/**
 * 判断数组a是否包含b数组,即b数组是否是a数组的子集
 * @return {boolean} description
 */
function container(a, b) {
    if (b.length === 0) {
        return true;
    }
    for (let i = 0; i < b.length; i++) {
        const source = b[i];
        if (a.indexOf(source) === -1) {
            return false;
        }
    }
    return true;
}

export default {
    container,
};
