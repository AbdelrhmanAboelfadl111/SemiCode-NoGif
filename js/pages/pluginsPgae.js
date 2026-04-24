// ============================================================
// Sidebar & Navigation
window.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.getElementById("sidebar");
  const toggleButton = document.getElementById("sidebarToggle");

  // Add active-show class immediately when page loads
  document.querySelector(".sidebar").classList.add("active-show");

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

  toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("is-closed");
    sidebar.classList.toggle("is-open");
    setTimeout(() => {
      moveActivePill(document.querySelector("aside .nav-item.is-active"));
    }, 220);
  });

  window.addEventListener("load", () => {
    moveActivePill(document.querySelector("aside .nav-item.is-active"));
  });

  window.addEventListener("resize", () => {
    moveActivePill(document.querySelector("aside .nav-item.is-active"));
    if (window.innerWidth < 768) {
      sidebar.classList.add("is-closed");
      sidebar.classList.remove("is-open");
    } else {
      sidebar.classList.remove("is-closed");
      sidebar.classList.add("is-open");
    }
  });

  document
    .getElementById("sidebar__nav")
    .addEventListener("click", function (e) {
      const navItem = e.target.closest(".nav-item");
      if (!navItem) return;
      if (navItem.classList.contains("is-active")) return;
      setActiveItem(navItem);
      renderCategoryPlugins(navItem);
    });
});

// ============================================================
// Sidebar Categories Spawn
const pluginsCategoryRow = document.querySelector("#sidebar__nav");

(function renderSidebarCategories() {
  const allItem = `
    <span class="sidebar__active-pill" id="activePill"></span>
    <article class="nav-item is-active" data-category="all" data-index="1">
      <span class="nav-item__icon">
        <img src="imgs/plugins/sidebar-icons/apps_14434519.png" loading="lazy" alt="All Category"
          onerror="this.src='imgs/plugins/plugins-icons/puzzle_4020290.png'" class="img-fluid">
      </span>
      <span class="nav-item__text">All Plugins</span>
    </article>
  `;

  const categoriesItems = allPluginsCategory
    .map(
      (pluginCategory, index) => `
    <article class="nav-item" data-category="${
      pluginCategory.category[0]
    }" data-index="${index + 2}">
      <span class="nav-item__icon">
        <img src="${pluginCategory.img}" loading="lazy" alt="${
        pluginCategory.groupName
      }"
          onerror="this.src='imgs/plugins/plugins-icons/puzzle_4020290.png'" class="img-fluid">
      </span>
      <span class="nav-item__text">${pluginCategory.groupName}</span>
    </article>
  `
    )
    .join("");

  pluginsCategoryRow.innerHTML = allItem + categoriesItems;
})();

let searched = false;

// ============================================================
// State
const pluginsContainer = document.getElementById("pluginsContainer");
const pluginsScrollContainer = document.getElementById(
  "pluginsScrollContainer"
);
const searchInput = document.querySelector('input[type="search"]');
const NUMBER_OF_PLUGINS_CARD = 6;

let filteredPlugins = [...allPlugins];
let visibleCountStart = 0;
let visibleCountEnd = 12;
let loading = false;

// ============================================================
// Init Plugins
appendPlugins(filteredPlugins);

// ============================================================
// Search System
function searchPlugins(query) {
  const q = query.trim().toLowerCase();
  if (!q) return [...filteredPlugins]; // if search empty return all plugins
  return filteredPlugins.filter((item) => {
    return (
      item.category.includes(q) ||
      item.keywords.includes(q) ||
      item.name.includes(q)
    );
  });
}

let searchTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const results = searchPlugins(searchInput.value);

    visibleCountStart = 0;
    visibleCountEnd = 12;
    loading = false;

    pluginsScrollContainer.scrollTo({ top: 0, behavior: "smooth" });
    if (results.length == 0) {
      if (searched) return;
      pluginsContainer.innerHTML = "";
    } else {
      pluginsContainer.innerHTML = "";
    }
    appendPlugins(results);
  }, 300);
});

// ============================================================
// When Scrolling = Add Plugins
pluginsScrollContainer.addEventListener("scroll", () => {
  const { scrollTop, clientHeight, scrollHeight } = pluginsScrollContainer;
  const reachedBottom = scrollTop + clientHeight >= scrollHeight - 100;

  if (reachedBottom && !loading && visibleCountEnd < filteredPlugins.length) {
    loading = true;
    setTimeout(() => {
      visibleCountStart = visibleCountEnd;
      visibleCountEnd += NUMBER_OF_PLUGINS_CARD;
      appendPlugins(filteredPlugins);
      loading = false;
    }, 200);
  }
});
