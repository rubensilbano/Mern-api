import {Schema, model} from "mongoose";

// AQUI SE GUARDA UNA ABSTRACCION DE LOS VIDEOS.
    // DE OTRO MODO MONGOOSE NO PUEDE INTERPRETAR LA INFORMACION EXTRAIDA DE LA DB.
    // Schema	ES LA ESTRUCTURA U OBJETO QUE DEBEN TENER LOS REGISTROS DE VIDEO
    // model	PARECE ES EL NOMBRE DEL OBJETO, QUE SERA EXPORTADO AL FINAL.
        // IMAGINABA QUE EXPORTARIA UNA INSTANCIA DE videoSchema, PERO NO
const videoSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true,
        // unique   EVITA QUE SE REPITA ESTE CAMPO ENTRE REGISTROS
        unique: true
    }
},
{
    versionkey: false, // DIJO QUE ES PARA QUE NO APAREZCA EL "WW PROPIO DE MONGOOSE"
    timestamps: true, // ES PARA ADJUNTAR AUTOMATICAMENTE FECHA DE CREACION Y ACTUALIZACION DE LOS REGISTROS.
    
    // ASI SE ESPECIFICA QUE COLECCION SE VA A USAR. TAMBIEN PERMITE USAR COLECCIONES PREVIAS.
        // DE OTRO MODO SE CREA UNA COLECCION POR DEFECTO VACIA, CON EL MISMO NOMBRE DE LA DB
    collection : 'VideoCollection'
});

// model(NOMBRE QUE TENDRA EL OBJETO EXPORTADO)
export default model('Video', videoSchema);