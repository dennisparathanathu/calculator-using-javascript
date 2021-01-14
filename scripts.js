function clr(){
    document.getElementById("screen").value=""
}
function num(val){
    document.getElementById("screen").value += val
}
function equal(){
    var txt = document.getElementById("screen").value
    var result = eval(txt)
    document.getElementById("screen").value = result
}