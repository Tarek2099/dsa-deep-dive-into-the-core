const sortedArray = (arr) => {
    let k = 0;
    let sorted = arr
    for(let i = 0; i < arr.length; i++){
        for(let j = i +1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr[j] = "_";
            }
        }
    }
    sorted = arr.sort((a, b) => {
        if(a === "_") return 1;
        if(b === "_") return -1;
        return a - b;
    })
    return sorted
}
console.log(sortedArray([1,1,2,3,2,1,5,6, 1, 4,4]))