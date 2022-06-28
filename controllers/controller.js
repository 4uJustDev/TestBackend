import fs from "fs"
import Service from '../service/service.js';
const createItem = async (req, res, next) => {
    try {
        const Item = {
            id:5,
            user_id:1,
            url:"http://localhost3000/product/0",
            description: req.body.description,
            price: req.body.price,
            tegs: req.body.tegs,
            tittle: req.body.tittle,
            type: req.body.type,
            date: req.body.date
        };

        const dataCard = await Service.addCard(Item);
        res.send(`<h1>Данные успешно отправлены</h1><a href='/index.html'>Back to main page</a>` + JSON.stringify(Item))
        next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}
export default {
	createItem
}
