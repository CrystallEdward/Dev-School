let num=12345;
function func(num){
    let arr=(''+num).split('').map(Number)
    let temp =0;
    for (i=0;i<=arr.length-1;i++){
        for (j=0;j<=arr.length-i;j++){
            if (arr[j]<arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr.join(""));

}
func(num)