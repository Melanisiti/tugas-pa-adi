var soal1 =prompt("ibu kota indonesia adalah:")
var poin=0
if (soal1 == "jakarta") {
  poin += 1 // 2
  alert(`jawaban benar, poin anda sekarang ${poin}`)
  var soal2 =prompt("apa singkatan dari PPLG:")
  if (soal2 == "pengembangan perangkat lunak dan gim") {
    poin += 1 //2
    alert(`jawaban benar, poin anda sekarang ${poin}`)
    var soal3 =prompt("sebutkan bilangan ganjil:")
    if (soal3 == "1,3,5,7") {
      poin += 1 // 2
      alert(`jawaban benar, poin anda sekarang ${poin}`)
    } else {
      poin += 0
      alert(`jawaban salah, poin anda adalah ${poin}`)  
    }
  } else {
    poin += 0
    alert(`jawaban salah, poin anda adalah ${poin}`)
  }
} else {
  poin += 0
  alert(`jawaban salah, poin anda adalah ${poin}`)
}