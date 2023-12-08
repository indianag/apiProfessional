const Professional = require('../model/profesionalMDB');


function consultarProfesional(request, response)
{
  console.log(request.query)
  const {firstName, lastName} = request.query;

  Professional.findOne({firstName, lastName})
  .then((professional) => {
    if(!professional) {
      return response.send({error: 'Profesional no encontrado'});
    }
    response.send(professional);
   
  })
  .catch((error) => {
    console.log(error);
  })
}


function getAllProfessionals(request, response)
{
  Professional.find()
  .then((professionals) => {
    response.send(professionals);
  })
  .catch((error) => {
    console.log(error)
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
    }

    console.log('Profesional eliminado con exito');
    response.send(profesional);
  })
  .catch((error) => {
    console.log(error);

  });
}




module.exports = {
  consultarProfesional,
  getAllProfessionals,
  subirProfessional,
  modificarProfessional,
  eliminarProfessional,
  };