const str = 'abcdefghijklmnopqrstuvwxyz';
let result = '';
function subString(start, end) {
    for (let i = 0; i < str.length; i++) {
        if (i >= start && i < end) {
            result += str[i];
        };
    };
    return result;
};
console.log(subString(1, 4));//bcd
console.log(str.substring(1, -1))//bcd


