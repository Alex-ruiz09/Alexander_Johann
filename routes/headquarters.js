import functionHeadquarters from "../controllers/headquarters.js";
import express from 'express'
import { param, body, validationResult } from "express-validator";
import {error} from "../helpers/watchValidation.js"
const router = express.Router()

router.get("/",functionHeadquarters.getHeadquarters)
router.get("/:id", param("id").notEmpty(), error, functionHeadquarters.getHeadquarter)
router.get("/:id/sedes", param("id").notEmpty(), error, functionHeadquarters.getHeadquarterByCollege)
router.post("/", functionHeadquarters.createHeadquarter)
router.put("/:id", param("id").notEmpty(), error, functionHeadquarters.updateHeadquarter)
router.delete("/:id", param("id").notEmpty(), error, functionHeadquarters.deleteHeadquarter)


export default router