let arr= [1,2,3,4];
let d = 2;

function FindMax(arr,d){
    let n= arr.length;
    let suma=[];
    let sum1=0
    if ((n % d == 0)||(1<=d<=31)||(n>0)){
        for (let j = 0; j<=n-1;j++){
            sum1=0;
            for(let k = j;k<n;k+=n/d){
                sum1+=arr[k];
                suma[j]=sum1;
                suma.length=arr.length/d;
            }
        }
        console.log(suma);
        return(suma.sort((a,b)=>b-a)[0]);
    }
    else {
        return -1;
    }
}
FindMax(arr,d)