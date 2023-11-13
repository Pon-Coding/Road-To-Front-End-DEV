var myEmptyArr = [];
var myArr = [12,23,3,5,6,8,74,-1,-2,-34,-23,-100];
getPosNum=(arrayNum)=>{
    for(const x of arrayNum){
        if(x>=0){
            myEmptyArr.push(x);
        }
    }
    return myEmptyArr;
}

// getPosNum(myArr);

console.log(getPosNum(myArr));