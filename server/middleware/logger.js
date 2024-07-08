// TODO: consider using morgan or winston for more logging features

export default function(req, res, next) {
    if (process.env.NODE_ENV !== 'test') {
        console.log(`${new Date().toISOString()} - ${req.method} request for ${req.url}`);
    }
    next();
}