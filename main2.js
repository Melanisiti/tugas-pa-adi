let belanja = parseInt(prompt(`masukkan total belanja:`));
let diskon =0
document.writeln(`anda belanja = ${belanja}`)
switch (true) {
  case ( belanja< 100000) :
  document.writeln(`anda tidak mendapatkan diskon`)
  break;
  case (belanja >= 100000 && belanja <= 200000):
  diskon = belanja*10/100;
  document.writeln(`anda mendapatkan diskon 10% ${belanja - diskon}`);
  break;
  case (belanja > 200000) :
  diskon = belanja*25/100;
  document.writeln(`anda mendapatkan diskon 25% ${belanja-diskon}`);
}