var c = document.getElementById('c');
var ctx = c.getContext('2d');
c.width = window.innerWidth;
c.height = window.innerHeight;
var columns_w = c.width / 15;
var columns_h = c.height / 25.2;
var index = [];
for (var i = 0; i < columns_w; ++i) {
  index[i] = 0;
}
var timer;
var randomN = [];
for (var i = 0; i < columns_w; ++i) {
  randomN[i] = (Math.floor(Math.random() * columns_h + 1));
  if (randomN[i] < 6) {
    this.randomN[i] = getRndInteger(6, columns_h);
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function rain() {
  for (var m = 0; m < columns_w; m++) {
    ctx.fillStyle = "rgba(0, 0, 0, 0.9)";
    ctx.fillRect((c.width / columns_w * m), c.height / columns_h * (index[m] - (columns_h - randomN[m])), c.width / columns_w, c.height / columns_h * columns_h * 2);
    for (var x = 2; x < columns_h; x++) {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect((c.width / columns_w * m), (c.height / randomN[m]) - ((c.height / randomN[m]) * x), (c.width / columns_w), (c.height / columns_h * index[m]));
    }
    if (c.height / columns_h * (index[m] - (columns_h - randomN[m])) > c.height * 1.2) {
      randomN[m] = getRndInteger(6, columns_h);
      index[m] = 0;
    }
  }
}
ctx.fillRect(0, 0, c.width, c.height);
ctx.font = "15px 'Press Start 2P'";

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.fillRect(0, 0, c.width / columns_w * columns_w, c.height / columns_h * columns_h);
  for (var i = 0; i < columns_w; i++) {
    for (var j = 0; j < columns_h + 25.2; j++) {
      ctx.fillStyle = "rgb(0, 255, 0, 1)";
      ctx.fillText(Math.floor(Math.random() * 10), 15 * i, 25.2 * j);
    }
  }
  rain();
  for (var l = 0; l < columns_w; l++) {
    index[l]++;
  }
}
timer = setInterval(drawMatrix, 100);

const text =
"BİZ KİMİZ: Kendini geliştirmek isteyen, eğitim ve disiplin konularında kendine yatırım yapmak isteyen insanlar için ilham verici bir kaynak sunan, markalaşma hedefi olan bir Instagram sayfasıyız.\n\nAMACIMIZ: Takipçilerimizin hayatlarını daha iyi hale getirmelerine yardımcı olmak ve onları finansal özgürlük, motivasyon ve disiplin konularında desteklemek. \n\nMİSYONUMUZ: Matrixten kaçmak isteyen kişilerin yaşamlarında gerçek anlam ve amaç bulmalarına yardımcı olmak için kaliteli içerikler sunmak. \n\nVİZYONUMUZ: Instagram sayfamız aracılığıyla dünya genelinde milyonlarca kişiye ilham vermek ve onları kendilerini geliştirmeye yönlendirmek. \n\nFollow The White Rabbit..";

const animatedText = document.getElementById("animated-text");
let currentCharIndex = 0;

function animateText() {
if (currentCharIndex < text.length) {
  animatedText.textContent += text[currentCharIndex];
  currentCharIndex++;
  setTimeout(animateText, 5); // Her harf arasındaki bekleme süresi
} else {
  animatedText.classList.add("animated");
}
}

animateText();