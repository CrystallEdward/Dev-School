function getRootProperty(object, target) {
    let result = null;

    function search(object, path) {
        if (Array.isArray(object)) {
            if (object.includes(target) && result === null) {
                result = path[0];
            }
        } else if (typeof object === 'object') {
            for (const key in object) {
                search(object[key], path.concat(key));
            }
        }
    }

    search(object, []);

    return result;
}