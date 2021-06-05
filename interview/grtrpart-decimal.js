function gp(n){
    var a=n.toString().split('.');
    if(a.length===1){
        alert(a[0])
    }else if (parseInt(a[0])>parseInt(a[1])){
        alert(a[0])
    }else{
        alert(a[1])
    }
}
gp(200.34);