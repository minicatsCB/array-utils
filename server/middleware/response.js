/** Uniform the response object structure following JSend specification
 *  See: https://github.com/omniti-labs/jsend
 */

const SUCCESS = 'success';
const FAIL = 'fail';
const ERROR = 'error';

module.exports = function(req, res, next) {
    res.sendData = function(data) {
        res.json({ status: SUCCESS, data });
    }

    res.sendFail = function(reasons, statusCode = 400) {
        res.status(statusCode).json({ status: FAIL, data: reasons });
    }

    next();
}