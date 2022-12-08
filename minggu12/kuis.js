var dataNama = [
    "Muhammad Rayyan",
    "Alesha Zahra",
    "Michael Santoso"
];

function showNama(){
    var listNama = document.getElementById("list-nama");
    listNama.innerHTML = "";

    for(let i = 0; i < dataNama.length; i++){
        var btnEdit = "<a href='#' onclick='editNama("+i+")'>Edit</a>";
        var btnHapus = "<a href='#' onclick='deleteNama("+i+")'>Hapus</a>";
        listNama.innerHTML += "<li>" + dataNama[i] + " ["+btnEdit + " | "+ btnHapus +"]</li>"; 
    }
}

function addNama(){
    var input = document.querySelector("input[name=nama]");
    dataNama.push(input.value);
    showNama();
}

function editNama(id){
    var newNama = prompt("Masukkan Nama Mahasiswa Kembali", dataNama[id]);
    dataNama[id] = newNama;
    showNama();
}

function deleteNama(id){
    dataNama.splice(id, 1);
    showNama();
}

showNama();