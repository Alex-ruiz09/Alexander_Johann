import functionColleges from "../controllers/colleges.js";
import express from 'express'

const router = express.Router()

router.get("/",functionColleges.getColleges)
router.get("/:id", functionColleges.getCollege)
router.post("/", functionColleges.createCollege)
router.put("/:id", functionColleges.updateCollege)
router.delete("/:id", functionColleges.deleteCollege)

export default router