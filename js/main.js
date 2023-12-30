// 장바구니 - Basket
const basketStartEl = document.querySelector("header .basket-starter");
const basketEl = basketStartEl.querySelector(".basket");

basketEl.addEventListener("click", (event) => {
  event.stopPropagation();
});
basketStartEl.addEventListener("click", (event) => {
  event.stopPropagation();
  if (basketEl.classList.contains("show")) {
    hideBasket();
  } else {
    showBasket();
  }
});
window.addEventListener("click", () => {
  hideBasket();
});

function showBasket() {
  basketEl.classList.add("show");
}
function hideBasket() {
  basketEl.classList.remove("show");
}

// 검색 - Search
const headerEl = document.querySelector("header");
const hearderMenuEls = [...headerEl.querySelectorAll("ul.menu > li")];
const searchWrapEl = headerEl.querySelector(".search-wrap");
const searchStarterEl = headerEl.querySelector(".search-starter");
const searchCloserEl = searchWrapEl.querySelector(".search-closer");
const searchShadowEl = searchWrapEl.querySelector(".shadow");
const searchInputEl = searchWrapEl.querySelector("input");
const searchDelayEls = [...searchWrapEl.querySelectorAll("li")];

searchStarterEl.addEventListener("click", showSearch);
searchCloserEl.addEventListener("click", hideSearch);
searchShadowEl.addEventListener("click", hideSearch);

function showSearch() {
  headerEl.classList.add("searching");
  document.documentElement.classList.add("fixed");
  hearderMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = (index * 0.4) / hearderMenuEls.length + "s";
  });
  searchDelayEls.forEach((el, index) => {
    el.style.transitionDelay = (index * 0.4) / searchDelayEls.length + "s";
  });

  setTimeout(() => {
    searchInputEl.focus();
  }, 600);
}
function hideSearch() {
  headerEl.classList.remove("searching");
  document.documentElement.classList.remove("fixed");
  hearderMenuEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = (index * 0.4) / hearderMenuEls.length + "s";
  });
  searchDelayEls.reverse().forEach((el, index) => {
    el.style.transitionDelay = (index * 0.4) / searchDelayEls.length + "s";
  });
  searchDelayEls.reverse();
  searchInputEl.value = "";
}

// 요소의 가시성 관찰
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.add("show");
  });
});
const infoEls = document.querySelectorAll(".info");
infoEls.forEach((el) => {
  io.observe(el);
});

// 비디오 재생!
const video = document.querySelector(".stage video");
const playBtn = document.querySelector(".stage .controller--play");
const pauseBtn = document.querySelector(".stage .controller--pause");

playBtn.addEventListener("click", () => {
  console.log("재생");
  video.play();
  playBtn.classList.add("hide");
  pauseBtn.classList.remove("hide");
});
pauseBtn.addEventListener("click", () => {
  console.log("멈춰");
  video.pause();
  playBtn.classList.remove("hide");
  pauseBtn.classList.add("hide");
});
