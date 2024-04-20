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
let displayGetCRUD = async (req, res) => {
    let data = await CRUDservice.getAllUser();
    return res.render('displayCRUD', {
        dataTable: data
    })
}

let getEditCRUD = async (req, res) => {
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDservice.getUserInfoById(userId);
        //check user data not found
        // let userData
        return res.render('editCRUD', {
            user: userData
        })
    }
    else {
        return res.send('user not found')

    }
}

let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDservice.updateUserData(data);
    return res.render('displayCRUD', {
        dataTable: allUsers
    })
}

let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {

        await CRUDservice.deleteUserById(id);
        return res.send('Delete the user succeed')
    }
    else{
        return res.send('found')
    }


}
module.exports = {
    getHomePage, getAboutPage, getCRUD, postCRUD, displayGetCRUD, getEditCRUD, putCRUD, deleteCRUD,
}