//console.log("hello")

function SumofTwoElemInArr(arr,sum){
    // need to create two for loops in top need to iterate over specifed arr
    // in second array add element of 1st for loop and 1st element of second for loop and compare the sum if matched return true
    for (let i=0; i<arr.length; i++){
        console.log("i",arr[i])
        for (let j=0;j<arr.length;j++){
            console.log("j",arr[j])
            console.log("arr[i]+arr[j]",arr[i]+arr[j])    
            if (arr[i]+arr[j]==sum){
                console.log("Hurray!!")
                return true
            }
        }
    }
    return false
}

function SumofTwoElemInArr2(arr,sum){
    // Use builtin set params to create mySet
    // iterate over arr, check if its been sum value exists in mySet if not 
    let mySet = new Set();
    for (let i = 0; i<arr.length;i++){
        if (mySet.has(arr[i])){
            console.log(mySet,arr[i])
            console.log("Hurray 2!!")
            return true
        }
        mySet.add(sum - arr[i])
        console.log(mySet)
    }
}


SumofTwoElemInArr2([1,8,2,3,4,5,],10)
