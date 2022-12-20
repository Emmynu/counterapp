let count = 0

function decrease(){
    count -= 1
    document.getElementById("display").textContent = count
}
function reset(){
    count = 0
    document.getElementById("display").textContent = count
    document.getElementById("save-num").textContent = 0
}
function increase(){
    count += 1
    document.getElementById("display").textContent =count
}
function save(){
    document.getElementById("save-num").textContent +=  count  + "-"
}