import modelCollege from "../models/colleges.js";

const functionColleges = {
    getColleges: async (req, res) => {
        try {
            const colleges = await modelCollege.find({ isActive: true });
            res.send(colleges);
        } catch (error) {
            res.status(500).send("Error: " + error);
        }
    },

    getCollege: async (req, res) => {
        try {
            let { id } = req.params
            const college = await modelCollege.findOne({ _id: id, isActive: true });
            res.send(college)
        } catch (error) {
            res.send(error)
        }
    },
    getCollegeByDirection: async (req, res) => {
        try {
            let { id } = req.params
            const college = await modelCollege.find({ direccionNucleo: id })
            res.send(college)
        } catch (error) {
            res.send(error)
        }
    },
    createCollege: async (req, res) => {
        try {
            let { direccionNucleo, nombre, codigo, direccion, telefono, email, rector } = req.body
            const college = new modelCollege({ direccionNucleo, nombre, codigo, direccion, telefono, email, rector })
            await college.save()
            res.send(college)
        } catch (error) {
            res.status(500).send("Error: " + error.message);
        }
    },
    createCollegeByDirection: async (req, res) => {
        try {
            let { nombre, codigo, direccion, telefono, email, rector } = req.body
            let direccionNucleo = req.params.id
            const college = new modelCollege({ direccionNucleo, nombre, codigo, direccion, telefono, email, rector })
            await college.save()
            res.send(college)
        } catch (error) {
            res.status(500).send("Error: " + error.message);
        }
    },

    updateCollege: async (req, res) => {
        try {
            let { id } = req.params
            let { direccionNucleo, nombre, codigo, direccion, telefono, email, rector } = req.body
            let updateAt = new Date()
            const collegeUpdate = await modelCollege.findByIdAndUpdate(id, { direccionNucleo, nombre, codigo, direccion, telefono, email, rector, updateAt }, { new: true })
            res.send(collegeUpdate)
        } catch (error) {
            res.status(500).send("Error: " + error);
        }
    },

    deleteCollege: async (req, res) => {
        try {
            let { id } = req.params
            let isActive = false
            const collegeUpdate = await modelCollege.findByIdAndUpdate(id, { isActive }, { new: true })
            res.send(collegeUpdate)
        } catch (error) {
            res.status(500).send("Error: " + error);
        }
    }

}

export default functionColleges;