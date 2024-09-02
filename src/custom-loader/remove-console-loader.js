const sourceMapObj = require('source-map');
const sourceNode = sourceMapObj.SourceNode;
const SourceMapConsumer = sourceMapObj.SourceMapConsumer;

module.exports = function (content,sourceMap) {
    const newContent = content.replace(/console\.log\((.*)\);/g, '');
    const options = this.getOptions();
    console.log('options:', options)
    if (options && options.sourceMap && sourceMap) {
        const resourcePath =  this.resourcePath;
         // 生成的 sourceMap  节点
        // 第一个参数是当前的内容
        // 第二个参数是创建 SourceMapConsumer 实例
        const node = sourceNode.fromStringWithSourceMap(content,new SourceMapConsumer(sourceMap || {}))
        
    }

    return newContent;
}