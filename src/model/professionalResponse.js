class ProfessionalResponse {
    constructor(error, codigo, message, professionals) {
      this.error = error;
      this.codigo = codigo;
      this.message = message;
      this.professionals = professionals;
    }
  }
  
  module.exports = { ProfessionalResponse };