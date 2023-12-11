const Professional = require('../model/profesionalMDB');
const {ProfessionalResponse} = require('../model/professionalResponse')


function consultarProfesional(request, response)
{
  console.log(request.query)
  const {firstName, lastName} = request.query;

  Professional.findOne({firstName, lastName})
  .then((professionals) => {
    if(!professionals) {
      return response.send({error: 'Profesional no encontrado'});
    }
    response.send([professionals]);
   
  })
  .catch((error) => {
    console.log(error);
  })
}


function getAllProfessionals(request, response)
{
  Professional.find()
  .then((professionals) => {
    const professionalResponse = new ProfessionalResponse(false, 200, 'Success', professionals);
    response.send(professionalResponse);
  })
  .catch((error) => {
    console.log(error)
    const errorResponse = new ProfessionalResponse(true, 500, 'Error', []);
    response.status(500).send(errorResponse);
  })
}


function subirProfessional(request, response)
{
  let professional = new Professional({firstName: request.body.firstName,
                                      lastName: request.body.lastName,
                                      age: request.body.age,
                                      weight: request.body.weight,
                                      height: request.body.height,
                                      isRetired: request.body.isRetired,
                                      nationality: request.body.nationality,
                                      oscarsNumber: request.body.oscarsNumber,
                                      profession: request.body.profession}) 
  professional.save()
  .then((professional) => 
  {
    console.log("Profesional guardado correctamente")
    response.send(professional);
  })
  .catch((error) => 
  {
    console.log(error)
  })
}



function modificarProfessional(request, response) {
  console.log(request.body);
  const { firstName, lastName, age, weight, height, isRetired, nationality, oscarsNumber, profession } = request.body;

  Professional.findOneAndUpdate(
    { firstName }, // Filtramos por el título
    { $set: { lastName, age, weight, height, isRetired, nationality, oscarsNumber, profession } }, // Actualizamos los datos
    { new: true } // Esto es para obtener la foto actualizada en la respuesta
   
  )
    .then((professional) => {
      if (!professional) {
        // Si no se encuentra ninguna foto con el título dado
        console.error('No se encontró ningun profesional con el nombre proporcionado');
        return response.send({ error: 'No se encontró ningun profesional con el nombre proporcionado' });
      }
      
      console.log('Datos del profesional modificado con éxito');
      response.send(professional);
    })
    .catch((error) => {
      console.error('Error al modificar los datos del profesional', error);
      response.send({ error: 'Error al modificar los datos del profesional' });
    });
}



function eliminarProfessional(request, response)
{
  console.log(request.body);
  const {firstName} = request.body;

  Professional.findOneAndDelete(
    {firstName}
  )
  .then((profesional) => {
    if(!profesional){
      console.error('No se encontró ningun profesional con el nombre proporcionado');
      return response.status(404).json({ message: 'No se encontró ningún profesional con el nombre proporcionado' });
    }

    console.log('Profesional eliminado con exito');
    response.send(profesional);
  })
  .catch((error) => {
    console.log(error);
    response.status(500).json({ message: 'Error al eliminar el profesional' });

  });
}




module.exports = {
  consultarProfesional,
  getAllProfessionals,
  subirProfessional,
  modificarProfessional,
  eliminarProfessional,
  };