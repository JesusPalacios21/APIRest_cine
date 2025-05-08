import { pool } from "../db.js"

//Logica (backend) de cada endpoint
export const getPeliculas = async (req, res) => {
  const [rows] = await pool.query("SELECT *FROM peliculas")
  res.json(rows)
}

export const getPeliculaByid = async (req, res) => {
  const [rows] = await pool.query("SELECT *FROM peliculas WHERE id = ?", [req.params.id])
  if(rows.length <= 0) return res.status(404).json({
    message: 'No existe Pelicula con este ID'
  })
  res.json(rows)
}

//1. Obtener datos del Json (input)
export const createPeliculas = async (req, res) => {
  //2. EJecutar la consulta, pasa valores obtenidos
  const {titulo, duracionmin, clasificacion, alanzamiento} = req.body
  const[rows] = await pool.query("INSERT INTO peliculas (titulo, duracionmin, clasificacion, alanzamiento) VALUES(?,?,?,?)", 
  [titulo, duracionmin, clasificacion,alanzamiento])

  res.send({
    id: rows.insertId,
    titulo,
    duracionmin,
    clasificacion,
    alanzamiento
  })
}

export const updatePeliculas = async (req, res) => {
  const id = req.params.id
  const {titulo, duracionmin, clasificacion, alanzamiento} = req.body

  const querySQL = `
    UPDATE peliculas SET
      titulo = ?,
      duracionmin = ?,
      clasificacion = ?,
      alanzamiento = ?
    WHERE id = ?
  `
  const [result] = await pool.query(querySQL, [titulo, duracionmin, clasificacion, alanzamiento, id])
  if (result.affectedRows == 0){
    return res.status(404).json({
      message: 'El ID no existe' 
    })
  }

  res.json({ message: 'Actualización correcta'})
}

export const deletePeliculas = async (req, res) => {
  const [result] = await pool.query("DELETE FROM peliculas WHERE id = ?", [req.params.id]);

  // Si no se encuentra la película
  if (result.affectedRows <= 0) {
    return res.status(404).json({
      message: 'No existe registro con este ID'
    });
  }

  // Si se elimina correctamente
  res.status(200).json({
    message: 'Película eliminada correctamente'
  })
}
