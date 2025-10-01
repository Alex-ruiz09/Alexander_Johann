import functionColleges from "../controllers/colleges.js";
import express from 'express'
import { param, body, validationResult, query } from "express-validator";
import { error } from "../helpers/watchValidation.js"

const router = express.Router()

const validationCreateCollege = [
    body("direccionNucleo").trim().notEmpty(),
    body("nombre").trim().notEmpty(),
    body("codigo").trim().notEmpty(),
    body("direccion").trim().notEmpty(),
    body("telefono").trim().notEmpty().isNumeric(),
    body("email").trim().notEmpty(),
    body("rector").trim().notEmpty()
];
const validationCreateCollegeByDirection = [
    param("id").trim().notEmpty(),
    body("nombre").trim().notEmpty(),
    body("codigo").trim().notEmpty(),
    body("direccion").trim().notEmpty(),
    body("telefono").trim().notEmpty().isNumeric(),
    body("email").trim().notEmpty(),
    body("rector").trim().notEmpty()
];

router.get("/", functionColleges.getColleges)
router.get("/:id", param("id").notEmpty(), error, functionColleges.getCollege)
router.get("/direcciones-nucleo/:id/colegios", param("id").notEmpty(), error, functionColleges.getCollegeByDirection)
router.post("/", validationCreateCollege, error, functionColleges.createCollege)
router.post("/direcciones-nucleo/:id/colegios", validationCreateCollegeByDirection, error, functionColleges.createCollegeByDirection)
router.put("/:id", param("id").notEmpty(), error, functionColleges.updateCollege)
router.delete("/:id", param("id").notEmpty(), error, functionColleges.deleteCollege)

export default router