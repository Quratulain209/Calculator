function getnum(num){
    document.getElementById('result').value +=num;
}
function getresult(){
    document.getElementById('result').value = eval(document.getElementById('result').value);
}
function clearall(){
    document.getElementById('result').value ='';
}
function removeval(){
    var x = document.getElementById('result').value;
    document.getElementById('result').value = document.getElementById('result').value.slice(0,x.length-1);
}
function fac(num){
    let m = document.getElementById('result').value +=num;
    document.getElementById('result').value = factorial(document.getElementById('result').value.slice(0,m.length-1));
}
function factorial(n){
    let i,f = 1;
    for(i=n;i>=1;i--){
        f = f*i;
    }
    return f;
}