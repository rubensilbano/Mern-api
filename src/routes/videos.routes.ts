// ACA ESTAN SOLAMENTE LAS RUTAS PARA EL CRUD, DE LOS OBJETOS VIDEO.
// ROUTER ES LA FUNCION DE EXPRESS, PARA MANEJAR RUTAS
    //ESTE ES UN INTERMEDIARIO PARA RECIBIR LOS LLAMADOS A LAS RUTAS, PERO NO LAS RESUELVE.
    //LLAMA A LAS IMPLEMENTACIONES EN videos.controller
import { Router } from "express"
const router = Router();

// * IMPORTA TODO EL MODULO, Y LE ASIGNA UN APODO videoCtrl
import * as videoCtrl from "./videos.controller";

// UNA MISMA RUTA PUEDE TENER DOS CONTROLADORES DISTINTOS.
    // SI ESTOS SON DIFERENCIADOS POR LA CANTIDAD DE ARGUMENTOS/PROPS, O EL METODO HTTP

router.post('/videos', videoCtrl.createVideo);

router.get('/videos', videoCtrl.getVideos);

router.get('/videos/:id', videoCtrl.getVideo);

router.delete('/videos/:id', videoCtrl.deleteVideo);

router.put('/videos/:id', videoCtrl.updateVideo);

export default router;
    