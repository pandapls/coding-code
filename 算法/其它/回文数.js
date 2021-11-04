function backtTxt(x) {
    if(x<=0 || (!(x % 10) && x)){
        return false;
    }
    let copyX = x,
    res = 0;
    while (copyX){
        res = res * 10 + copyX % 10;
        copyX = ~~(copyX / 10)
    }
    return res === x
};
console.log(backtTxt(-121))