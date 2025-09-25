import functionHeadquarters from "../controllers/headquarters.js";
import express from 'express'

const router = express.Router()

router.get("/",functionHeadquarters.getHeadquarters)
router.get("/:id", functionHeadquarters.getHeadquarter)
router.post("/", functionHeadquarters.createHeadquarter)
router.put("/:id", functionHeadquarters.updateHeadquarter)
router.delete("/:id", functionHeadquarters.deleteHeadquarter)

export default router