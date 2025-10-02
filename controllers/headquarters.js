import modelHeadquarter from "../models/headquarters.js";
const functionHeadquarter = {
    getHeadquarters: async (req, res) => {
        try {
            const headquarters = await modelHeadquarter.find({ isActive: true });
            res.send(headquarters);
        } catch (error) {
            res.status(500).send("Error: " + error);
        }
    },

    getHeadquarter: async (req, res) => {
        try {
            let { id } = req.params
            const headquarter = await modelHeadquarter.findOne({ _id: id, isActive: true })
            res.send(headquarter)
        } catch (error) {
            res.send(error)
        }
    },
    getHeadquarterByCollege: async (req, res) => {
        try {
            let { id } = req.params
            console.log(id)
            const headquarter = await modelHeadquarter.find({ colegio: id, isActive: true })
            res.send(headquarter)
        } catch (error) {
            res.send(error)
        }
    },

    createHeadquarter: async (req, res) => {
        try {
            let { colegio, nombre, codigo, direccion, telefono, coordinador } = req.body
            const Headquarter = new modelHeadquarter({ colegio, nombre, codigo, direccion, telefono, coordinador })
            await Headquarter.save()
            res.send(Headquarter)
        } catch (error) {
            res.status(500).send("Error: " + error.message);
        }
    },

    updateHeadquarter: async (req, res) => {
        try {
            let { id } = req.params
            let { colegio, nombre, codigo, direccion, telefono, coordinador } = req.body
            let updateAt = new Date()
            const HeadquarterUpdate = await modelHeadquarter.findByIdAndUpdate(id, { colegio, nombre, codigo, direccion, telefono, coordinador, updateAt }, { new: true })
            res.send(HeadquarterUpdate)
        } catch (error) {
            res.status(500).send("Error: " + error);
        }
    },

    desactiveHeadquarter: async (req, res) => {
        try {
            let { id } = req.params
            let isActive = false
            const HeadquarterUpdate = await modelHeadquarter.findByIdAndUpdate(id, { isActive }, { new: true })
            res.send(HeadquarterUpdate)
        } catch (error) {
            res.status(500).send("Error: " + error);
        }
    },

    activeHeadquarter: async (req, res) => {
        try {
            let { id } = req.params
            let isActive = true
            const HeadquarterUpdate = await modelHeadquarter.findByIdAndUpdate(id, { isActive }, { new: true })
            res.send(HeadquarterUpdate)
        } catch (error) {
            res.status(500).send("Error: " + error);
        }
    }

}

export default functionHeadquarter;