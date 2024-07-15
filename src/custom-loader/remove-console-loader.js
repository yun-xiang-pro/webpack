const sourceMapObj = require('source-map');
const sourceNode = sourceMapObj.SourceNode;
const SourceMapConsumer = sourceMapObj.SourceMapConsumer;
module.exports = function(content,sourceMap) {
    if (this.cacheable) {  
        this.cacheable()
    }
    // 移除JavaScript代码中的console.log语句
    const newContent = content.replace(/console\.log\((.*)\);/g, '');
    // 获取loader的options
    const options = this.getOptions();
    if (options && options.sourceMap && sourceMap) {
        // 获取正在处理的文件地址
        const resourcePath =  this.resourcePath;
        // 生成的 sourceMap  节点
        // 第一个参数是当前的内容
        // 第二个参数是创建 SourceMapConsumer 实例
        const node = sourceNode.fromStringWithSourceMap(content,new SourceMapConsumer(sourceMap || {}))
        if (node) {
            // sourceMap 
            const result = node.toStringWithSourceMap({file:resourcePath})
            let callback = this.async();
            console.log('result.map.toJSON():', result.map.toJSON())
            callback(null,result.code, result.map.toJSON())
        }
    }
    return newContent;
}