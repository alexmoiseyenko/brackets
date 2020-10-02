module.exports = function check(str, bracketsConfig) {
    let res = [];
    if (str.length % 2 !== 0) {
        return false;
    }
    str.split('').forEach((item) => {
        bracketsConfig.forEach((i) => {
            if (i[1] === item && item === (res[res.length - 1] || 0)) {
                res.pop();
            } else if (i[0] === item) {
                res.push(i[1]);
            }
        })
    })

    return res.length === 0;
}

