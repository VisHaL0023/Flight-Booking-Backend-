const { StatusCodes } = require('http-status-codes');

const { ErrorResponse } = require('../utils/common');
const AppError = require('../utils/errors/app-error');

function validateCreateRequest(req, res, next) {
    if(req.body.name && req.body.code && req.body.cityId){
        next();
    }
    ErrorResponse.message = 'Something went wrong while creating airport';
    if(!req.body.name) {
        ErrorResponse.error = new AppError(['name not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
        
    }
    if(!req.body.code) {
        ErrorResponse.error = new AppError(['Airport code not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST);
    }
    if(!req.body.cityId) {
        ErrorResponse.error = new AppError(['City Id not found in the oncoming request in the correct form'], StatusCodes.BAD_REQUEST);
    }
    return res
        .status(StatusCodes.BAD_REQUEST)
        .json(ErrorResponse);
}

module.exports = {
    validateCreateRequest
}