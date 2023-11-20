const { STATUS_CODES } = require("../statusCodes");

module.exports =  function errorHandler(err, req, res, next) {
	const statusCode = res.statusCode ? res.statusCode : 500;

	switch (statusCode) {
		case STATUS_CODES.NOT_FOUND:
			res.json({
				title: "Not found",
				message: err.message,
				stackTrace: err.stack,
			});
        case STATUS_CODES.FORBIDDEN:
            res.json({
                title: "Forbidden request",
                message: err.message,
                stackTrace: err.stack
            })
        case STATUS_CODES.BAD_REQUEST:
            res.json({
                title: "Bad request",
                message: err.message,
                stackTrace: err.stack
            })
        case STATUS_CODES.VALIDATION_ERROR:
            res.json({
                title: "Validation Error",
                message: err.message,
                stackTrace: err.stack
            })
        case STATUS_CODES.SERVER_ERROR:
            res.json({
                title: "Internal Sever error",
                message: err.message,
                stackTrace: err.stack
            })
		default:
			console.log("No errors all good")
	}
	console.log(statusCode);
}


