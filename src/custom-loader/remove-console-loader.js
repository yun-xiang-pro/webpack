module.exports = function (content,sourceMap) {
    const newContent = content.replace(/console\.log\((.*)\);/g, '');
    return newContent;
}