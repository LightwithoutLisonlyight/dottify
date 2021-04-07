'use strict'
module.exports = dottify
function isObject(test){return test && typeof test === 'object'}
function dottify(object,separator = '.'){
    try{
    let flatted = {}
    function iterate(object, root = null){
        for(let key in object){
            let path = root === null ? key.toString() : `${root.toString()}${separator}${key.toString()}`
            !isObject(object[key]) ? flatted[path] = object[key] : iterate(object[key],path)
        }
    }
    iterate(object)
    return flatted
    }
    catch(e){console.log(e)}
}


