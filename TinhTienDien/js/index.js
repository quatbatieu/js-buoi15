function pay() {
  // B1: DOM tới inputs/radios để lấy giá trị
  var buy = +document.getElementById("buy").value;
  var total = 0;
  // B2 : Process
  if (buy <= 50) {
    total += buy * 500;
  } else if (buy <= 100) {
    total += 50 * 500 + (buy - 50) * 650;
  } else if (buy <= 200) {
    total += 50 * 500 + 50 * 650 + (buy - 100) * 850;
  } else if (buy <= 350) {
    total += 50 * 500 + 50 * 650 + 100 * 850 + (buy - 200) * 1100;
  } else {
    total += 50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (buy - 350) * 1300;
  }
  //B3 : Xuất kết quả
  document.getElementById("divThanhTien").style.display = "block";
  document.getElementById("xuatTien").innerHTML = total.toLocaleString();
}
