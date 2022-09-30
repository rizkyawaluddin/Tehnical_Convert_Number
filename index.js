function kata (n) {
    let no = new Array("","satu","dua","tiga","empat","lima","enam","tujuh","delapan","sembilan","sepuluh","sebelas")
    let bil;

    if (n<12){
        bil=" "+no[n];
    } else if (n<20) {
        bil= kata(n-10)+" belas";
    } else if (n<100) {
        bil= kata(Math.floor(n/10))+" puluh"+kata(n%10);
    } else if (n<200) {
        bil="seratus" +kata(n-100);
    } else if (n<1000) {
        bil= kata(Math.floor(n/100))+" ratus"+kata(n%100);
    } else if (n<2000) {
        bil="seribu" +kata(n-1000); 
    } else if (n<1000000) {
        bil= kata(Math.floor(n/1000))+" ribu"+kata(n%1000);
    }

    return bil;

}

function bahasa(a,b) {
    document.getElementById(b).innerHTML=kata(a.value);
}