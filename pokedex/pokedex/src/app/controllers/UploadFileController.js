//const { response } = require("../../app");

const uploadFileController = {
    storeFile: (request,response) => {
        const { filename } = request.file

        response.json({arquivo: filename})
    }
}

module.exports = uploadFileController;