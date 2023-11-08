let m = 1071225;
function FindNB (m){
    let n = 0
    n=((1+(1+8*m**0.5)**0.5)/2)-1;
    if(n%1==0){
        console.log(n)
    } else {
        console.log(-1)
    }
}
FindNB(m)