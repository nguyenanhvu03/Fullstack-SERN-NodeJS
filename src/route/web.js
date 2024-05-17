import express from "express";
import homeController from '../controllers/homeController';
import userController from '../controllers/userController';


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    router.get('/about', homeController.getAboutPage);
    router.get('/crud', homeController.getCRUD);

    router.post('/post-crud', homeController.postCRUD);
    router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/edit-crud', homeController.getEditCRUD);
    router.post('/put-crud', homeController.putCRUD);
    router.get('/delete-crud', homeController.deleteCRUD);

    router.post('/api/login', userController.handleLogin);
    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-users', userController.handleCreateNewUser);
    router.put('/api/edit-users', userController.handleEditUser);
    router.delete('/api/delete-users', userController.handleDeleteUser);


    router.get('/api/allcode', userController.getAllCode);


    router.get('/abc', (req, res) => {
        return res.send('hello world check abc')
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;