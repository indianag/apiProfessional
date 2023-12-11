import { Professional } from "./professional";

export class ProfessionalResponse {
    constructor(
        public error:boolean,
        public codigo: number,
        public message: string,
        public professionals: Professional[]){}
}
