import { Router } from "express"
import path from "path"
import Controller from "../controllers/controller.js"
import filter from '../middlewares/fileFilter.js'


const __dirname = path.resolve(path.dirname(''))
const router = Router()

router.post('/create', filter.uploadPhoto, Controller.createItem);
router.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
router.get('/product/:id', async (req, res) => {
  console.log(req.params.id)
  res.sendFile(path.resolve(__dirname, 'public', 'product.html'))
})

export default router