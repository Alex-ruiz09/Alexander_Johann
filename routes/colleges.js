import functionColleges from "../controllers/colleges.js";
import express from 'express'
import { param, body, validationResult } from "express-validator";
import {error} from "../helpers/watchValidation.js"

const router = express.Router()

            //let { direccionNucleo, nombre, codigo, direccion, telefono, email, rector
const validation = [
    body("direccionNucleo").trim().notEmpty(),
    body("nombre").trim().notEmpty(),
    body("codigo").trim().notEmpty(),
    body("direccion").trim().notEmpty(),
    body("telefono").trim().notEmpty(),
    body("email").trim().notEmpty(),
    body("rector").trim().notEmpty()

]

router.get("/", functionColleges.getColleges)
router.get("/:id", param("id").notEmpty(), error, functionColleges.getCollege)
router.get("/direcciones-nucleo/:id/colegios", functionColleges.getCollegeByDirection)
router.post("/", validation, error, functionColleges.createCollege)
router.post("/direcciones-nucleo/:id/colegios", functionColleges.createCollegeByDirection)
router.put("/:id",  param("id").notEmpty(), error, functionColleges.updateCollege)
router.delete("/:id",  param("id").notEmpty(), error, functionColleges.deleteCollege)

export default router