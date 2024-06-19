module.exports = function(req, res, next) {
    console.log(`${new Date().toISOString()} - ${req.method} request for ${req.url}`);
    next();
}