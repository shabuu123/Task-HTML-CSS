function insertArray ( array , variable){
    let newArray = [variable];
    for(let i = 0; i<array.length; i++){
        newArray.push(array[i])
    }
    return newArray
}
console.log(insertArray([1,2,3,4],5));