import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const modelHeadquarter = new Schema({
    colegio: {type: ObjectId, ref: 'Colegio'},
    nombre: String,
    codigo: String,
    direccion: String,
    isActive: {type:Boolean, default: true},
    telefono: String,
    coordinador: String,
    activa: Boolean
})

export default mongoose.model("modelHeadquarter", modelHeadquarter);