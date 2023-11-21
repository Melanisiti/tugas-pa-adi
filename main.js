let belanja = parseInt(prompt(`masukkan total belanja:`));
document.writeln(`anda belanja = ${belanja}`)
if (belanja < 100000) {
  document.writeln(`anda tidak mendapatkan diskon`)
} else if (belanja >= 100000 && belanja <= 200000) {
  let diskon = belanja*10/100;
  document.writeln(`anda mendapatkan diskon 10% ${belanja - diskon}`);
} else if (belanja > 200000) {
  let diskon = belanja*25/100;
  document.writeln(`anda mendapatkan diskon 25% ${belanja-diskon}`);
}
