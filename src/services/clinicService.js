import db from '../models/index';


let createClinic = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.name || !data.address || !data.imageBase64 || !data.descriptionHTML || !data.descriptionMarkdown) {
                resolve({
                    errCode: 1,
                    errMessage: 'Missing parameter'
                })
            } else {
                await db.Clinic.create({
                    name: data.name,
                    address: data.address,
                    image: data.imageBase64,
                    descriptionHTML: data.descriptionHTML,
                    descriptionMarkdown: data.descriptionMarkdown
                })
                resolve({
                    errCode: 0,
                    errMessage: 'Ok'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createClinic
}