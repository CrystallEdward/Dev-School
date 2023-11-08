let sum = 0;
let n=-10;
if (n>0){
    for (let i =1; i < n; i++) {
        if ((i % 3 == 0) || (i % 5 == 0)) {
            sum = sum + i;
        }
    }
}else{
    sum=0;
}
console.log(sum)