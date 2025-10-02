import functionHeadquarters from "../controllers/headquarters.js";
import express from 'express';
import { param, body } from "express-validator";
import { error } from "../helpers/watchValidation.js";
const router = express.Router()

const validationCreateHeadquarter = [
    body("colegio").trim().notEmpty(),
    body("nombre").trim().notEmpty(),
    body("codigo").trim().notEmpty(),
    body("direccion").trim().notEmpty(),
    body("telefono").trim().notEmpty().isNumeric(),
    body("coordinador").trim().notEmpty(),
];

const validationUpdateHeadquarter = [
    param("id").notEmpty(),
    body("colegio").trim().notEmpty(),
    body("nombre").trim().notEmpty(),
    body("codigo").trim().notEmpty(),
    body("direccion").trim().notEmpty(),
    body("telefono").trim().notEmpty().isNumeric(),
    body("coordinador").trim().notEmpty(),
];

router.get("/", functionHeadquarters.getHeadquarters);
router.get("/:id", param("id").notEmpty(), error, functionHeadquarters.getHeadquarter);
router.get("/:id/sedes", param("id").notEmpty(), error, functionHeadquarters.getHeadquarterByCollege);
router.post("/", validationCreateHeadquarter, error, functionHeadquarters.createHeadquarter);
router.put("/:id", validationUpdateHeadquarter, error, functionHeadquarters.updateHeadquarter);
router.put("/:id", param("id").notEmpty(), error, functionHeadquarters.desactiveHeadquarter);
router.put("/:id", param("id").notEmpty(), error, functionHeadquarters.activeHeadquarter);


export default router;