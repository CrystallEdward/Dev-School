function unpackSausages(truck) {
    let unload = [];
    truck.forEach(function (box) {
        box.forEach(function (pack) {
            let count = 0;
            if (pack.startsWith('[') && pack.endsWith(']') && pack.length == 6) {
                pack=pack.replace('[','').replace(']','');
                if (pack[0] === pack[1]
                    && pack[0] === pack[2]
                    && pack[0] === pack[3]
                    && pack[1] === pack[2]
                    && pack[1] === pack[3]
                    && pack[1] === pack[3]) {
                    unload.push(pack);
                }
            }
        })
    })
    for (let i =1 ; i<=unload.length-1; i++){
        if (i%4===0){
            unload.splice(i,1)
        }
    }
    return unload.join('').replaceAll('',' ').trim();
}