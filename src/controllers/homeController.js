import db from '../models/index'
import CRUDservice from '../services/CRUDservice'


let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        })
    } catch (e) {
        console.log(e)
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs')
}
let getCRUD = (req, res) => {
    return res.render('crud')
}
let postCRUD = async (req, res) => {
    let message = await CRUDservice.createNewUser(req.body);
    console.log(message)
    return res.send('post crud form')
}

module.exports = {
    getHomePage, getAboutPage, getCRUD, postCRUD,
}