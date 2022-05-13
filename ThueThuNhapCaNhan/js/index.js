function minato(){
  var hoten = document.getElementById('hoten').value;
  var thunhap = +document.getElementById('thunhap').value;
  var nguoiphuthuoc = +document.getElementById('mains').value;
  var thunhapchiuthue = chiuthue(thunhap,nguoiphuthuoc);
  var tienchiuthue ;
  if(thunhapchiuthue <= 60000000){
    tienchiuthue = thunhapchiuthue * 0.05
  }else if(thunhapchiuthue <= 120000000){
    tienchiuthue = thunhapchiuthue * 0.1
  }else if(thunhapchiuthue <= 210000000){
    tienchiuthue = thunhapchiuthue * 0.15
  }else if(thunhapchiuthue <= 384000000){
    tienchiuthue = thunhapchiuthue * 0.2
  }else if(thunhapchiuthue <= 624000000){
    tienchiuthue = thunhapchiuthue * 0.25
  }else if(thunhapchiuthue <= 960000000){
    tienchiuthue = thunhapchiuthue * 0.3
  }else {
    tienchiuthue = thunhapchiuthue * 0.35
  }
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = tienchiuthue .toLocaleString();
}
function chiuthue(thunhap,nguoiphuthuoc){
  var total = thunhap - 4000000 - (nguoiphuthuoc*1600000);
  return total;
}