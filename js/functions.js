function changeActives(that) {
  let parentAllChildren = that.closest(".changeActives"),
    childActive = parentAllChildren.querySelector(".active"),
    currentChild = that;

  if (that.classList.contains("active")) {
    return 0;
  } else {
    childActive.classList.remove("active");
    currentChild.classList.add("active");
  }
}

// ! Sidebar Activate Functions
function getActivePill() {
  return document.getElementById("activePill");
}

function moveActivePill(target) {
  const activePill = getActivePill();
  if (!target || !activePill) return;
  activePill.style.transform = `translateY(${target.offsetTop}px)`;
  activePill.style.height = `${target.offsetHeight}px`;
}

function setActiveItem(targetItem) {
  document
    .querySelectorAll("aside .nav-item")
    .forEach((item) => item.classList.remove("is-active"));
  targetItem.classList.add("is-active");
  moveActivePill(targetItem);
}

// ! Plugins Page Functions \\
// Filter by Category
function renderCategoryPlugins(that) {
  const typeCategory = that.dataset.category;

  searchInput.value = "";

  if (typeCategory === "all") {
    filteredPlugins = [...allPlugins];
  } else {
    const group = allPluginsCategory.find((g) =>
      g.category.includes(typeCategory)
    );
    const relatedCategories = group ? group.category : [typeCategory];
    filteredPlugins = allPlugins.filter((item) =>
      relatedCategories.includes(item.category)
    );
  }

  visibleCountStart = 0;
  visibleCountEnd = 12;
  loading = false;

  pluginsScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
  pluginsContainer.innerHTML = "";
  appendPlugins(filteredPlugins);
}

// Append Plugins
function appendPlugins(arrayFiltered) {
  if (arrayFiltered.length == 0) {
    if (searched) return;

    pluginsContainer.classList.add("notFound");

    let alertElement = `<div class="BoxContainerForNotPluginFound justify-content-center align-items-center flex-column">
        <img src="imgs/plugins/plug-in.png" class="imgForNotFoundPlugin">
        <h4 class="mb-0">Plugin is Not Found</h4>
      </div>`;

    pluginsContainer.innerHTML = `${alertElement}`;

    searched = true;

    setTimeout(() => {
      let alert = document.querySelector(".BoxContainerForNotPluginFound");
      alert.classList.add("active");
      setTimeout(() => {
        alert.classList.add("show");
      }, 10);
    }, 1);
  } else {
    const currentPlugins = arrayFiltered.slice(
      visibleCountStart,
      visibleCountEnd
    );
    pluginsContainer.classList.remove("notFound");
    searched = false;

    setTimeout(() => {
      let alert = document.querySelector(".BoxContainerForNotPluginFound");
      alert.classList.remove("show");
      setTimeout(() => {
        alert.classList.remove("active");
      }, 500);
    }, 1);

    const template = document.createElement("template");
    const fragment = document.createDocumentFragment();

    currentPlugins.forEach((plugin) => {
      template.innerHTML = `
        <article class="column column1 plugin-card-animate">
          <a href="${plugin.link}" target="_blank">
            <div class="item">
              <img src="imgs/plugins/arrow.png" loading="lazy" alt="Arrow travel" class="img-fluid top-right">
              <div class="plugin__logo">
                <img src="${plugin.logoLink}" onerror="this.src='imgs/plugins/plugins-icons/puzzle_4020290.png'"
                  alt="${plugin.name}" loading="lazy" class="img-fluid">
              </div>
              <div class="plugin__name"><h3>${plugin.name}</h3></div>
              <div class="plugin__category"><h4>${plugin.category}</h4></div>
              <div class="plugin__description"><p>${plugin.description}</p></div>
            </div>
          </a>
        </article>`.trim();
      fragment.appendChild(template.content.firstElementChild);
    });

    pluginsContainer.appendChild(fragment);
  }
}

//
function changeImage(img, newSrc) {
  const preloader = new Image();
  preloader.src = newSrc;

  preloader.onload = () => {
    img.classList.add("fade-out");
    setTimeout(() => {
      img.setAttribute("src", newSrc);
      img.classList.remove("fade-out");
    }, TRANSITION_DURATION);
  };

  preloader.onerror = () => {
    img.setAttribute("src", newSrc);
  };
}

function renderCourses(
  typeOfCourse,
  stat = false,
  btn = document.querySelector("[data-type='Frontend'")
) {
  const filtered = dataCourses.filter((course) =>
    course.typeCourse.includes(typeOfCourse)
  );

  if (stat) {
    if (btn.dataset.type === "Frontend") {
      buttonRoadMap.href =
        "https://drive.google.com/file/d/1rs-3tc0LQYXjfGYlJFdyOoMlgdBgG0AP/view?usp=drivesdk";
    } else if (btn.dataset.type === "Backend") {
      buttonRoadMap.href =
        "https://drive.google.com/file/d/1FYBILvIa5Ldq1e8fFMpC0sodQQynp8k2/view?usp=drivesdk";
    } else {
    }
    buttonRoadMap.classList.remove("active");
    setTimeout(() => {
      buttonRoadMap.classList.add("active");
    }, 800);
  }

  dataInter.innerHTML = filtered
    .map(
      (course, index) => `
    <li style="--i: ${index}">
      <div class="img-language">
        <img
          src="imgs/home/about/logo_language/${course.imgLanguage}"
          onerror="this.src='imgs/home/about/logo_language/default-svgrepo-com.svg'"
          loading="lazy"
          alt="${course.nameLanguage} icon"
          class="img-fluid"
        >
      </div>
      <div class="name-language">${course.nameLanguage}</div>
    </li>
  `
    )
    .join("");
}

function changeCoursesContent(typeOfCourse, btn) {
  if (btn.classList.contains("active")) return;

  renderCourses(typeOfCourse, true, btn);
}

function changeActives(btn) {
  btn
    .closest(".changeActives")
    .querySelectorAll("h6")
    .forEach((h) => h.classList.remove("active"));
  btn.classList.add("active");
}

let t = 250;

function openPopup(popupName) {
  const popupEle = document.querySelector(`.popup[data-name="${popupName}"]`);
  const popupChildBox = popupEle.querySelector(".box");
  const timer = t;
  if (popupEle.classList.contains("clicked")) return;
  document.querySelector("body").style.overflowY = "hidden";
  popupEle.classList.add("clicked");
  popupEle.classList.add("active");
  setTimeout(() => {
    popupEle.classList.add("show");
  }, 1);

  setTimeout(() => {
    popupChildBox.classList.add("active");
    popupEle.classList.remove("clicked");
  }, timer);
}

function closePopup() {
  const popupActive = document.querySelector(".popup.active");
  const popupChildBox = popupActive.querySelector(".box");
  const timer = t;

  popupChildBox.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  popupChildBox.classList.remove("active");

  setTimeout(() => {
    popupActive.classList.remove("show");
    setTimeout(() => {
      popupActive.classList.remove("active");
    }, timer);
  }, timer);
  document.querySelector("body").style.overflowY = "auto";
}

function colorBgFeedbackCard(that, imgSrc) {
  let color = "";

  if (that.ariaLabel.split(" ")[0] % 2 == 0) {
    color = "#fff";
  } else if (that.ariaLabel.split(" ")[0] % 2 != 0) {
    color = "linear-gradient(to right, #24243e, #302b63, #0f0c29)";
  }

  changeImageSrcPopup(imgSrc, color);
}

function changeImageSrcPopup(imgSrc, color) {
  const popupEle = document.querySelector(`.popup[data-name="imgShow"]`);
  const popupChildBox = popupEle.querySelector(".box");
  const imgEle = popupEle.querySelector("img");
  imgEle.setAttribute("src", imgSrc);

  popupChildBox.style.background = color;

  openPopup("imgShow");
}
