let utils = {
    removeEmptyProperties: function(obj) {
        const newObj = {};
        Object.keys(obj).forEach(key => {
            if (obj[key]) {
                newObj[key] = obj[key];
            }
        });

        return newObj;
    }
}

module.exports = utils;
