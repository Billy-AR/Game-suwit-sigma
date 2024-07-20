function getPilihanComputer() {
  const comp = Math.random();

  if (comp < 0.34) return "gajah";
  if (comp > 0.34 && comp < 0.64) return "semut";
  return "orang";
}

function getHasil(comp, player) {
  if (player == comp) return "SERI";
  if (player == "gajah") return comp == "orang" ? "MENANG" : "KALAH";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG";
  if (player == "orang") return comp == "semut" ? "MENANG" : "KALAH";
}

function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];

  let i = 0;

  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }

    imgComputer.setAttribute("src", "images/" + gambar[i++] + ".png");
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

let scorePlayer = 0;
let scoreComputer = 0;

const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    putar();

    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "images/" + pilihanComputer + ".png");

      const info = document.querySelector(".info");
      info.innerHTML = hasil;

      const scorePlayerElement = document.querySelector(".scorePlayer");
      const scoreComputerElement = document.querySelector(".scoreKomputer");

      if (hasil == "MENANG") scorePlayer += 1;
      if (hasil == "KALAH") scoreComputer += 1;
      scorePlayerElement.innerHTML = scorePlayer;
      scoreComputerElement.innerHTML = scoreComputer;

      if (scoreComputer == 10 || scorePlayer == 10) {
        if (scorePlayer == 10) {
          alert("Anda pemenang nya");
        } else if (scoreComputer == 10) {
          alert("Anda kalah bjing");
        }
        lagi = confirm("ingin bermain lagi?");

        if (lagi) {
          scorePlayer = 0;
          scoreComputer = 0;
          corePlayerElement.innerHTML = scorePlayer;
          scoreComputerElement.innerHTML = scoreComputer;
          info.innerHTML = "";
        } else {
          alert("GET OUTT!!!");
        }
      }
    }, 1000);
  });
});
