// ESTE ES UN MANEJADOR PARA LAS RUTAS DE LAS PETICIONES, A LOS OBJETOS VIDEO.
    //ESTA ES LA ESPECIFICACION E IMPLEMENTACION A LAS RUTAS
import { RequestHandler } from "express"
// PERMITE MANEJAR FUNCIONES ASINCRONAS CON EXPRESS
import Video from "./Video";

// LA PETICION SE MANEJA DE FORMA ASINCRONA
export const createVideo: RequestHandler = async (req,res) => {
    //  EN CASO DE QUE LA URL RECIBIDA EXISTA EN LOS REGISTROS, SE DEVUELVE UN JSON CON UN MENSAJE.
    const videoFound = await Video.findOne({url: req.body.url})
    if (videoFound)
        return res.status(301).json({message: 'LA url YA EXISTE'})
    //RECIBE LA REQUEST, Y GUARDA EL CUERPO JSON EN UN NUEVO REGISTRO
    const video = new Video(req.body)
    // console.log(video)
    // AQUI ESPERA A EJECUTAR EL METODO SAVE, PARA GUARDAR EL REGISTRO. ESTO VIENE DE MONGOOSE
    // AL EJECUTAR LA REQUEST, DEBERIA AGREGAR TAMBIEN LAS FECHAS DE CREATE Y UPDATE
    const savedVideo = await video.save()
    res.json('VIDEO CREADO' + savedVideo);
}

// AL EJECUTAR MUESTRA TODOS LOS REGISTROS.
export const getVideos: RequestHandler = async (req,res) => {
    try {
        // const videos = await Video.find()
        const videos = await Video.find().exec();
        return res.json(videos);
    } catch (error) {
        res.json(error)
    }
}

//  DEVUELVE UNICAMENTE EL ELEMENTO QUE COINCIDA CON EL ID RECIBIDO
export const getVideo: RequestHandler = async (req,res) => {
    try {
        const videoFound = await Video.findById(req.params.id);
        // NUNCA DEVUELVE UN STATUS 204
            // ES MAS, SI FALLA EL METODO findById, SE CAE EL SERVIDOR. POR ESO AGREGUE EL TRY CATCH
        if (!videoFound) return res.status(204).json();
        return res.json(videoFound);
    } catch (error) {
        res.json(error)
    }
}

// DELETE VIDEO, BASICAMENTE ES LO MISMO QUE LA FUNCION getVideo
export const deleteVideo: RequestHandler = async (req,res) => {
    const videoFound = await Video.findByIdAndDelete(req.params.id);
    if (!videoFound) return res.status(204).json();
    return res.json(videoFound);
}

// UPDATE VIDEO, DEVUELVE EL REGISTRO MODIFICADO
export const updateVideo: RequestHandler = async (req,res) => {
    const videoUpdated = await Video.findByIdAndUpdate(req.params.id, req.body, {new: true})
    if (!videoUpdated) return res.status(204).json();
    return res.json(videoUpdated);
}