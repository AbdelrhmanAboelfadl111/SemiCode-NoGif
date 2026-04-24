document.addEventListener("DOMContentLoaded", function () {
  // Hero Animations
  document.querySelector(".logoContainer img")?.classList.add("show");
  document.querySelector(".logoContainer h1")?.classList.add("show");
  document.querySelector(".briefContainer p")?.classList.add("show");
  document
    .querySelectorAll(".buttonsContainer a")
    .forEach((a) => a.classList.add("show"));

  const CHUNK_SIZE = 10;
  const LOAD_THRESHOLD = 3;
  let loadedCount = 0;

  const feedbackContainer = document.querySelector(".swiper-wrapper");

  // Build single slide
  function createSlide(imgSrcName) {
    return `
        <div class="swiper-slide"
        onclick="colorBgFeedbackCard(this, 'imgs/home/feedBack/${imgSrcName}')"
        data-img-src="imgs/feedBack/${imgSrcName}">
          <img 
            src="imgs/home/feedBack/${imgSrcName}"
            alt="Feedback Image"
            loading="lazy"
            class="img-fluid"
          >
        </div>
      `;
  }

  // Load next 10 slides
  function loadNextChunk() {
    if (loadedCount >= feedbacks.length) return;

    const chunk = feedbacks.slice(loadedCount, loadedCount + CHUNK_SIZE);

    feedbackContainer.insertAdjacentHTML(
      "beforeend",
      chunk.map(createSlide).join("")
    );

    loadedCount += chunk.length;

    if (window.mySwiperInstance) {
      window.mySwiperInstance.update();
    }
  }

  loadNextChunk();

  // Init Swiper
  window.mySwiperInstance = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    cardsEffect: {
      perSlideOffset: 8,
      perSlideRotate: 2,
      rotate: true,
      slideShadows: false,
    },

    on: {
      slideChange(swiper) {
        const remaining = swiper.slides.length - swiper.activeIndex;

        if (remaining <= LOAD_THRESHOLD) {
          loadNextChunk();
          swiper.update();
        }
      },
    },
  });
});

// Cached DOM Elements
const boxes = document.querySelectorAll(".box > .item");
const partsTop = document.querySelectorAll(".part-top");
const imgRightSideAbout = document.querySelector("#About .part.part-right img");
const mainSrcImgRightSideAbout =
  imgRightSideAbout.getAttribute("data-default-src");
const dataInter = document.getElementById("dataInter");

const TRANSITION_DURATION = 350;

// Accordion
partsTop.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("clicked")) return;
    btn.classList.add("clicked");
    setTimeout(
      () => btn.classList.remove("clicked"),
      TRANSITION_DURATION + 150
    );

    const currentItem = btn.closest(".item");
    const isActive = currentItem.classList.contains("active");

    boxes.forEach((item) => item.classList.remove("active"));

    if (!isActive) {
      currentItem.classList.add("active");
      changeImage(imgRightSideAbout, btn.dataset.imgSrc);
    } else {
      changeImage(imgRightSideAbout, mainSrcImgRightSideAbout);
    }
  });
});

// Init
renderCourses("Frontend", true);
