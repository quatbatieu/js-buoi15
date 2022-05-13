function buy() {
   var diemMon1 = +document.getElementById("diemMon1").value;
   var diemMon2 = +document.getElementById("diemMon2").value;
   var diemMon3 = +document.getElementById("diemMon3").value;
   var khuVuc = chonKhuVuc();
   var doiTuong = chonDoiTuong();
   var td = tinhtongDiem(diemMon3,diemMon2,diemMon1,khuVuc,doiTuong);
   var dc = +document.getElementById("diemchuan").value;  
   if ( diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0 ) {
      document.getElementById("divThanhTien").style.display = "block";
      document.getElementById("xuatTien").innerHTML = td +" "+ "Rớt";
   } else if(td >= dc) {
      document.getElementById("divThanhTien").style.display = "block";
      document.getElementById("xuatTien").innerHTML = td +" " + "Đậu";
   }else{
      document.getElementById("divThanhTien").style.display = "block";
      document.getElementById("xuatTien").innerHTML = td +" "+ "Rớt";
   }
}
function tinhtongDiem(diemMon3,diemMon2,diemMon1,khuVuc,doiTuong){
   var diemTong = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;
   return diemTong;
}
function chonKhuVuc() {
   // B1: DOM tới inputs/radios để lấy giá trị
   var kv1 = document.getElementById("khua").checked;
   var kv2 = document.getElementById("khub").checked;
   var kv3 = document.getElementById("khuc").checked;
   var kv4 = document.getElementById("khuk").checked;
   if (kv1) {
      return 2;
   }
   if (kv2) {
      return 1;
   }
   if (kv3) {
      return 0.5;
   }
   return 0;
}
function chonDoiTuong() {
   // B1: DOM tới inputs/radios để lấy giá trị
   var dtA = document.getElementById("khu1").checked;
   var dtB = document.getElementById("khu2").checked;
   var dtC = document.getElementById("khu3").checked;
   var dtD = document.getElementById("khu4").checked;
   if (dtA) {
      return 2.5;
   }
   if (dtB) {
      return 1.5;
   }
   if (dtC) {
      return 1;
   }
   return 0;
}



