let str=["tsar", "rat", "tar", "star", "tars", "cheese"];
function Separate(str){
    temp={};
    for (word of str){
        sorted=word.split('').sort().join('');
        if(temp.hasOwnProperty(sorted)){
            temp[sorted].push(word);
        }
        else {
            temp[sorted]=[word];
        }
    }
    res=Object.values(temp);
    console.log(res)
}
Separate(str)