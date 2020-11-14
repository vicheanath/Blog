export { pastImageUrl ,cutStringTitle}

const pastImageUrl = (url) => {
    return 'http://127.0.0.1:8000/storage/' + url;
}

const cutStringTitle = function (str, length, ending) {
    if (length == null) {
        length = 100;
    }
    if (ending == null) {
        ending = '...';
    }
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    } else {
        return str;
    }
};

