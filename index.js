import express from 'express'
import path from 'path'
import 'dotenv/config'
const PORT = process.env.PORT || 3000
const app = express()
const __dirname = path.resolve(path.dirname(''));

app.use(express.static(path.resolve(__dirname, 'public' )))


app.get('/', (req,res)=>{
res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
})
app.get('/product', (req,res)=>{
res.sendFile(path.resolve(__dirname, 'public', 'product.html'))
})

app.listen(PORT, () => {
console.log(`Server started at PORT ${PORT}`)
})