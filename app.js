import express from "express"
import mongoose from "mongoose"
import "dotenv/config";
import headquarters from "./routes/headquarters.js";
import colleges from "./routes/colleges.js"

const app = express()
app.use(express.json())
app.use("/api/colegios/",colleges)
app.use("/api/sedes/",headquarters)

app.listen(process.env.PORT, () => {
    try {
        console.log(`Ay Dios ${process.env.PORT}`);
        mongoose.connect(`mongodb+srv://carlosalbertodb42:Sena_2025_proyectoFinal@cluster0.8swbecd.mongodb.net/`)
            .then(() => {
                console.log("perdon mami")
            })
    } catch (error) {
        console.log(error)
    }
});