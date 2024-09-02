
import {creatInstance, isNumber,getDecimalPlaces,getInteger} from './common'

const operationAdd = (n1,n2) => {
   isNumber(n1)
   isNumber(n2)
   let digit1 =  getDecimalPlaces(n1) //0.3=>3  1位小数 乘以10
   let digit2 = getDecimalPlaces(n2); // 0.66 => 66 2位小数 乘以100
   let max = Math.max(digit1, digit2); // 取最大值，2
   let multiple = Math.pow(10,max) 
   let count = getInteger(n1)* Math.pow(10,max - digit1 ) +  getInteger(n2)*Math.pow(10,max-digit2);
   let result = count/multiple
   return result
}

// 减
export const subtract = (n1,n2) => {
   isNumber(n1)
   isNumber(n2)
     let digit1 =getDecimalPlaces(n1);  //0.3=>3  1位小数 乘以10
     let digit2 = getDecimalPlaces(n2); // 0.66 => 66 2位小数 乘以100
     let max = Math.max(digit1, digit2); // 取最大值，2
     let multiple = Math.pow(10,max) 
     let count = getInteger(n1)* Math.pow(10,max - digit1 ) -  getInteger(n2)*Math.pow(10,max-digit2);
     let result = count/multiple
     return result
}

// 乘
export const multiplication = (n1,n2) => {
   isNumber(n1)
   isNumber(n2)
   let digit1 = getDecimalPlaces(n1);
   let digit2 =getDecimalPlaces(n2);
   let multiple = Math.pow(10,digit1+digit2)  
   let count = getInteger(n1) *  getInteger(n2);
   let result = count/multiple
   return result
}

// 除 
export const division = (n1,n2) => {
   isNumber(n1)
   isNumber(n2)
   let digit1 = getDecimalPlaces(n1);
   let digit2 = getDecimalPlaces(n2);
   let max = Math.max(digit1, digit2);
   let result = (getInteger(n1)* Math.pow(10,max - digit1 )) /  (getInteger(n2)* Math.pow(10,max - digit2 ))
   return result
}

const  Init = () => {
   const {setOperation, getOperation} = creatInstance;
   setOperation('operationAdd', operationAdd)
   setOperation('subtract', subtract)
   setOperation('multiplication', multiplication)
   setOperation('division', division)
   return getOperation()
}

// 1. 提取重复代码
// 2. 功能方法要单一（一个函数只做一件事） y = fn(x);
// 3. 对扩展开放，对修改关闭（开发关闭原则）

export const operation = Init()