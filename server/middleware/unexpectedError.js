// TODO: consider using morgan or winston for more logging features

const ERROR = 'error';

export default function(err, req, res, next) {
    if (process.env.NODE_ENV !== 'test') {
        console.error(err);
    }
    res.status(500).json({ status: ERROR, message: err.message });
}