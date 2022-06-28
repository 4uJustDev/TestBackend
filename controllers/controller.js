import fs from "fs"
const createItem = async (req, res, next) => {
    try {
        const Item = {
            name: req.body.name,
            type: req.body.type,
            price: req.body.price,
            date: req.body.date,
            description: req.body.description,
            tegs: req.body.tegs,
            status:200
        };
        fs.writeFileSync('../data/data.json', JSON.stringify(Item));
        res.send(JSON.stringify(Item))
        next();
    } catch(e) {
        console.error(e);
        res.sendStatus(500);
    }
}
export default {
	createItem
}
