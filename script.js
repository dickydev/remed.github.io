let nilai=prompt("Masukkan nilai DMI kamu.", 0);
let grade= "";

if(nilai >= 90 && nilai <= 100){
    grade = "A";
}else if(nilai >= 80 && nilai <= 100){
    grade = "B";
}else if(nilai >= 70 && nilai <= 100){
    grade = "C";
}else if(nilai >= 60 && nilai <= 100){
    grade = "D, silahkan kerjakan remedial";
}else if(nilai >= 50 && nilai <= 100){
    grade = "E, Silahkan kerjakan remedial";
}else if(nilai >= 40 && nilai <= 100){
    grade = "F, Silahkan kerjakan remedial";
}else if(nilai >= 30 && nilai <= 100){
    grade = "G, Silahkan kerjakan remedial";
}else if(nilai >= 20 && nilai <= 100){
    grade = "H, Silahkan kerjakan remedial";
}else if(nilai >= 10 && nilai <= 100){
    grade = "I, Silahkan kerjakan remedial";
}else{
    document.write(`<h1>Anda salah memasukan nilai</h1>`)
}
document.write(`<h1>Grade anda adalah ${grade} </h1>`);>