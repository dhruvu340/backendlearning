function sum(a,b,...c){
    return [a,b,...c].reduce((acc,val)=>acc+val,0);
}


module.exports={
    sum
}