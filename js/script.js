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
ctx.font = "8px 'Press Start 2P'";

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
"BİZ KİMİZ: Biz, markalaşma hedefi olan bir Instagram sayfası olarak, kendini geliştirmek isteyen ve eğitim ile disiplin konularında yatırım yapmak isteyen insanlara ilham verici bir kaynak sunmayı amaçlayan dinamik bir topluluğuz. Kendi potansiyellerini keşfetmeye istekli olan herkesi bir araya getirerek, karşılıklı destek ve paylaşım ortamı sağlamaktayız.\n\nAMACIMIZ: Takipçilerimizin hayatlarını daha iyi hale getirmelerine yardımcı olmak ve onları finansal özgürlük, motivasyon ve disiplin konularında yönlendirmektir. Kendilerini geliştirmeye adanmış bir ekip olarak, takipçilerimizin hedeflerine ulaşmalarına katkıda bulunmak ve olumlu değişimler yaratmak için çabalıyoruz.\n\nMİSYONUMUZ: Matrix'ten kaçmak isteyen bireylerin yaşamlarında gerçek anlam ve amacı bulmalarına yardımcı olmak için kaliteli içerikler ve ürünler sunmayı misyon edindik. İçeriklerimiz, motivasyon, kişisel finans, liderlik, sağlıklı yaşam, yaratıcılık ve daha birçok konuda geniş bir yelpazeyi kapsamaktadır. Takipçilerimize ilham vermek, bilinçlerini genişletmek ve kendilerini geliştirme yolculuklarında rehberlik etmek amacıyla sürekli olarak yeni içerikler üretmeye odaklanıyoruz.\n\nVİZYONUMUZ: Instagram sayfamız aracılığıyla, dünya genelinde milyonlarca kişiye ilham vermek ve onları kendilerini geliştirmeye yönlendirmek istiyoruz. Sadece bir topluluk olmakla kalmayıp, bir hareketin parçası olmayı hedefliyoruz. İnsanların hayatlarına dokunarak, pozitif bir etki yaratmak ve bireylerin gerçek potansiyellerini keşfetmelerine yardımcı olmak istiyoruz. \n\nFollow The White Rabbit... Bizimle birlikte, sınırları aşın ve kendinizi keşfedin!\n"

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

window.addEventListener('load', function() {
  var container = document.getElementById('container');
  var scrollHeight = container.scrollHeight;
  var isScrollingUp = false;

  function autoScroll() {
    if (!isScrollingUp && container.scrollTop < scrollHeight) {
      container.scrollTop += 2; // İstediğiniz hızda kaydırma yapabilirsiniz
      setTimeout(autoScroll, 2); // İstediğiniz zaman aralığını belirleyebilirsiniz
    }
  }

  function handleScroll() {
    if (container.scrollTop === 0 || container.scrollTop === scrollHeight) {
      isScrollingUp = true;
    } else {
      isScrollingUp = false;
    }
  }

  container.addEventListener('scroll', handleScroll);
  autoScroll();
});

