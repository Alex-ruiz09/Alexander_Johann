import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const modelCollege = new Schema({
    direccionNucleo: {type: ObjectId, ref: 'direccionNucleo'},
    nombre: String,
    isActive: {type:Boolean, default: true},
    codigo: String,
    direccion: String,
    telefono: String,
    email: String,
    rector: String,
    createdAt: {type: Date, default: Date.now},
    updateAt:  {type: Date, default: Date.now}
})

export default mongoose.model("modelCollege", modelCollege);