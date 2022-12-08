var dataBunga = [
    "Bunga Anggrek",
    "Bunga Matahari",
    "Bunga Mawar"
];

function showBunga(){
    var listBunga = document.getElementById("list-bunga");
    listBunga.innerHTML = "";

    for(let i = 0; i < dataBunga.length; i++){
        var btnEdit = "<a href='#' onclick='editBunga("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteBunga("+i+")'>Hapus</a>";
        listBunga.innerHTML += "<li>" + dataBunga[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>"; 
    }
}

function addBunga(){
    var input = document.querySelector("input[name=bunga]");
    dataBunga.push(input.value);
    showBunga();
}

function editBunga(id){
    var newBunga = prompt("Masukkan nama bunga baru", dataBunga[id]);
    dataBunga[id] = newBunga;
    showBunga();
}

function deleteBunga(id){
    dataBunga.splice(id, 1);
    showBunga();
}

showBunga();