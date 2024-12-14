export function add(a, b) {
    return a + b;
  }
  
  export function createObject(name,age,classroom){
    return ({name:name,age:age,classroom:add(classroom,2)})
  }