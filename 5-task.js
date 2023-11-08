let a =('1 2 3');
function highandlow(a){
    a=a.split(' ')
    let max=a[0];
    let  min=a[0];
    for (let k = 0; k<a.length;k++){
        if (max<parseInt(a[k])){
            max=a[k];
        }
        for (let k = 0; k<a.length;k++) {
            if (parseInt(a[k])<min){
                min=a[k];
            }
        }
    }
    return[max, min].join(' ');
}
console.log(highandlow(a))
