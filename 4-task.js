let m = 20187049;
function isPrime(m){
    let k=1;
    res=true;
    for (n=2;n<=100000;n++){
        if ((m%n===0)&&(n!=m)){
            k++;
        }
    }
    console.log(k);
    if ((k>2)||(m<0)||(m==1)){
        res = false;
    }
    else if (k==1){
        res = true;
    }
    return res;
}

console.log(isPrime(m));

