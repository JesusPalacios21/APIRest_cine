import {Router} from "express"
import { createPeliculas, deletePeliculas, getPeliculaByid, getPeliculas, updatePeliculas } from "../controllers/peliculas.controller.js"

const router = Router()

//API REST = verbos

router.get('/peliculas',  getPeliculas)

router.get('/peliculas/:id', getPeliculaByid)

router.post('/peliculas',  createPeliculas)

router.put('/peliculas/:id',  updatePeliculas)

router.delete('/peliculas/:id',  deletePeliculas)

export default router