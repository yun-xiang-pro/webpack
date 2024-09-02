export const isNumber = (value) => {
    if (!(typeof value === 'number')) {
       throw new TypeError(`${value}必须是number类型`)
    }
 }
 
export  const getDecimalPlaces = (value) => {
    return value.toString().split('.')[1]?.length || 0;
 
 }
 
 export  const getInteger = (value) => {
    return Number(value.toString().replace('.','') )
 }

export  const creatInstance  = (() => {
    let operation = {};
    const setOperation = (key,value) => {
       Object.defineProperty(operation,key,{
          value:value,
          writable:false,
          enumerable:true,
          configurable:false
       })
 
    }
    const getOperation  = () => operation;
    return {setOperation, getOperation}
 
 })()
