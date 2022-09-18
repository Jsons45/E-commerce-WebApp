

function beli(){
    var input = document.getElementById("namainput").value;
    localStorage.setItem("textvalue", input)
    document.location.href="index2.html";
}
function tambah() {
    document.getElementById("jumlah").classList.remove("box")
    document.getElementById("nama").classList.remove("box")
    document.getElementById("btn2").classList.remove("btn2")
}


