const array = [3,4,4,3,6,3];
function getUnique(arr){
    
    let uniqueArr = [];
    
    for(let i of arr) {
        if(uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}
getUnique(array);