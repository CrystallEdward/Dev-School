let arr = [20,10,30,10,10,15,35];
function findEvenIndex(arr){
    let j=0;
    while(j<arr.length){
        let l=[];
        let r=[];
        let suml = 0;
        let sumr = 0;
        l = arr.slice(0,j);
        r = arr.slice(j+1,arr.length);
        for (let i = 0; i <= l.length-1;i++){
            suml+=l[i];
        }
        for (let k = 0; k <= r.length-1;k++){
            sumr+=r[k];
        }
        if (suml===sumr){
            return j;
        }
        j++;

    }
    return -1;

}
console.log(findEvenIndex(arr));
