var qrcode = new QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("hi");
function generateQr() {
  qrcode.makeCode(document.querySelector("input").value);
}