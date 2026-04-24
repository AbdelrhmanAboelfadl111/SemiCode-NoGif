const allPluginsCategory = [
  {
    groupName: "Icons and animated icons",
    category: [
      "Icons",
      "Icon Library",
      "Animated Icon Library",
      "Icon Animations",
    ],
    img: "imgs/plugins/sidebar-icons/bullet-point.png",
  },
  {
    groupName: "Typography and text effects",
    category: ["Typography", "Typography Tools", "Text Animations"],
    img: "imgs/plugins/sidebar-icons/typography.png",
  },
  {
    groupName: "Css and js animations",
    category: [
      "JavaScript Animation",
      "CSS Animations",
      "Scroll Animations",
      "CSS Effects",
      "Page Transitions",
    ],
    img: "imgs/plugins/sidebar-icons/icons8-code.png",
  },
  {
    groupName: "Sliders and carousels",
    category: ["Slider & Carousel"],
    img: "imgs/plugins/sidebar-icons/responsive.png",
  },
  {
    groupName: "Charts and data visualization",
    category: ["Charts & Data Visualization"],
    img: "imgs/plugins/sidebar-icons/chart.png",
  },
  {
    groupName: "Forms and input components",
    category: ["Form Components"],
    img: "imgs/plugins/sidebar-icons/profile.png",
  },
  {
    groupName: "Svg and design generators",
    category: ["SVG Generators", "Design Assets"],
    img: "imgs/plugins/sidebar-icons/design-drawing.png",
  },
  {
    groupName: "Colors and css tools",
    category: [
      "Design & UI Tools",
      "Colors & Gradients",
      "CSS Tools & Generators",
      "CSS Generators",
    ],
    img: "imgs/plugins/sidebar-icons/colors.png",
  },
  {
    groupName: "Loaders and notifications",
    category: ["Loading Animations", "Alerts & Modals", "Tooltips"],
    img: "imgs/plugins/sidebar-icons/loader.png",
  },
  {
    groupName: "Layout and scrolling",
    category: ["Scrolling & Layout", "Layout & Grid"],
    img: "imgs/plugins/sidebar-icons/scroll.png",
  },
  {
    groupName: "Developer utilities",
    category: [
      "Online Tool Suite",
      "Developer Utilities",
      "WYSIWYG Editor",
      "Tours & Onboarding",
      "AI Design Tools",
    ],
    img: "imgs/plugins/sidebar-icons/developer.png",
  },
  {
    groupName: "Css frameworks and ui libraries",
    category: ["CSS Framework", "UI Component Library"],
    img: "imgs/plugins/sidebar-icons/framework.png",
  },
  {
    groupName: "Angular ecosystem",
    category: ["Angular UI Library", "Angular State Management"],
    img: "imgs/plugins/sidebar-icons/angular.png",
  },
];

const allPlugins = [
  {
    id: "PLG-001",
    name: "FontAwesome",
    logoLink: "imgs/plugins/plugins-icons/FontAwesome.png",
    category: "Icons",
    description:
      "Thousands of scalable vector icons, fully customizable with CSS for any web project.",
    link: "https://fontawesome.com/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes:
        "Icon font or SVG — used via class in HTML and styled with pure CSS",
    },
    keywords:
      "icons svg icons font icons vector icons icon library ui icons free icons icon font web icons font awesome fontawesome fa icons scalable icons css icons html icons icon set icon pack fa social icons arrow icons button icons navbar icons footer icons add icons to website how to use fontawesome fontawesome cdn fa cdn free icon font icon classes fa solid fa regular fa brands fontawesome 6 fontawesome 5 fontawesome free fontawesome pro",
  },
  {
    id: "PLG-002",
    name: "FontAwesome Animation",
    logoLink: "imgs/plugins/plugins-icons/FontAwesome.png",
    category: "Icon Animations",
    description:
      "CSS animation effects for Font Awesome icons including spin, shake, and burst.",
    link: "https://l-lin.github.io/font-awesome-animation/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: ["FontAwesome"],
      notes: "CSS-only extension for FontAwesome — no JavaScript required",
    },
    keywords:
      "font awesome animation icon animation css icon effects animated icons fa animation spin shake burst fontawesome effects icon motion animated fa icons",
  },
  {
    id: "PLG-003",
    name: "Lordicon",
    logoLink: "imgs/plugins/plugins-icons/lordicon.svg",
    category: "Animated Icon Library",
    description:
      "High-quality animated icons library with multiple formats and interactive triggers for web.",
    link: "https://lordicon.com/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: ["Lottie.js"],
      notes: "Powered by Lottie to render animated icons in JSON/SVG format",
    },
    keywords:
      "animated icons lordicon lottie icons json icons svg animated interactive icons animated icon library premium icons web icons motion icons lordicon library",
  },
  {
    id: "PLG-004",
    name: "Hugeicons",
    logoLink: "imgs/plugins/plugins-icons/hugeIcon.png",
    category: "Icon Library",
    description:
      "Modern icon library with 4,000 free icons and 46,000 pro icons in multiple styles.",
    link: "https://hugeicons.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes:
        "SVG icons — integrates with React/Vue/Angular or used directly as inline SVG",
    },
    keywords:
      "hugeicons icon library huge icons svg icons react icons vue icons angular icons large icon set free icons pro icons modern icons 4000 icons",
  },
  {
    id: "PLG-047",
    name: "Angular Material",
    logoLink: "imgs/plugins/plugins-icons/angular.png",
    category: "Angular UI Library",
    description:
      "Official Angular UI component library implementing Material Design with ready-to-use components.",
    link: "https://material.angular.io/",
    tech: {
      languages: ["html.png", "css.png", "typescript.png"],
      libraries: ["Angular"],
      notes: "Requires Angular — will not work without it",
    },
    keywords:
      "angular material material design angular ui components angular library google material angular components angular forms angular buttons angular tables angular dialogs",
  },
  {
    id: "PLG-048",
    name: "PrimeNG",
    logoLink: "imgs/plugins/plugins-icons/primeng-logo.png",
    category: "Angular UI Library",
    description:
      "Comprehensive Angular UI library with rich components including advanced datatable and charts.",
    link: "https://primeng.org/",
    tech: {
      languages: ["html.png", "css.png", "typescript.png"],
      libraries: ["Angular"],
      notes: "Requires Angular — mandatory dependency",
    },
    keywords:
      "primeng angular components angular datatable angular charts angular ui prime ng angular library rich components angular tables angular forms",
  },
  {
    id: "PLG-049",
    name: "NG-ZORRO",
    logoLink: "imgs/plugins/plugins-icons/NG-ZORRO.png",
    category: "Angular UI Library",
    description:
      "Enterprise-class Angular UI components built on the popular Ant Design system architecture.",
    link: "https://ng.ant.design/",
    tech: {
      languages: ["html.png", "css.png", "typescript.png"],
      libraries: ["Angular"],
      notes: "Requires Angular — built on top of Ant Design",
    },
    keywords:
      "ng zorro ant design angular angular enterprise ui ng zorro antd angular ant design angular components zorro",
  },
  {
    id: "PLG-050",
    name: "ngx-bootstrap",
    logoLink: "imgs/plugins/plugins-icons/logo-stack.svg",
    category: "Angular UI Library",
    description:
      "Bootstrap components fully powered by Angular with support for templates, directives, and events.",
    link: "https://valor-software.com/ngx-bootstrap/",
    tech: {
      languages: ["html.png", "css.png", "typescript.png"],
      libraries: ["Angular", "Bootstrap (CSS)"],
      notes: "Requires Angular — Bootstrap CSS is optional for full styling",
    },
    keywords:
      "ngx bootstrap angular bootstrap bootstrap angular angular bootstrap components valor software ngx-bootstrap angular modals angular dropdowns",
  },
  {
    id: "PLG-051",
    name: "NgRx",
    logoLink: "imgs/plugins/plugins-icons/ngrx.png",
    category: "Angular State Management",
    description:
      "Reactive state management library for Angular applications inspired by the Redux pattern.",
    link: "https://ngrx.io/",
    tech: {
      languages: ["typescript.png"],
      libraries: ["Angular", "RxJS"],
      notes: "Requires Angular and RxJS — built on the Redux pattern",
    },
    keywords:
      "ngrx angular state management redux angular rxjs angular store angular effects angular reducers angular actions state management angular",
  },
  {
    id: "PLG-052",
    name: "NGXS",
    logoLink: "imgs/plugins/plugins-icons/NGXS.png",
    category: "Angular State Management",
    description:
      "Simple and lightweight state management solution built specifically for Angular applications.",
    link: "https://www.ngxs.io/",
    tech: {
      languages: ["typescript.png"],
      libraries: ["Angular", "RxJS"],
      notes:
        "Requires Angular and RxJS — simpler and less boilerplate than NgRx",
    },
    keywords:
      "ngxs angular state library angular state management simple state angular rxjs state lightweight state angular store ngxs store",
  },
  {
    id: "PLG-045",
    name: "Tailwind CSS",
    logoLink: "imgs/plugins/plugins-icons/tailwindcss-a9ee66b5.png",
    category: "CSS Framework",
    description:
      "Utility-first CSS framework for building fully custom UIs without ever leaving your HTML.",
    link: "https://tailwindcss.com/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "CSS framework — add via CDN or PostCSS build pipeline",
    },
    keywords:
      "tailwind css framework utility first css tailwindcss responsive design css utilities custom ui tailwind classes tailwind cdn postcss tailwind components",
  },
  {
    id: "PLG-046",
    name: "Flowbite",
    logoLink: "https://flowbite.com/docs/images/logo.svg",
    category: "UI Component Library",
    description:
      "Over 600 Tailwind CSS components like buttons, modals, and navbars ready to use.",
    link: "https://flowbite.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["Tailwind CSS"],
      notes: "Requires Tailwind CSS — has wrappers for React, Vue, and Angular",
    },
    keywords:
      "flowbite tailwind components tailwind ui tailwind buttons tailwind modals tailwind navbar tailwind css components ready to use components flowbite react flowbite vue",
  },
  {
    id: "PLG-040",
    name: "SB Tools",
    logoLink: "https://sbthemes.com/images/logo.svg",
    category: "Developer Utilities",
    description:
      "All-in-one toolbox with CSS and JS minifiers, JSON formatters, and image compressors.",
    link: "https://sbthemes.com/tools",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Online tool suite — no installation required",
    },
    keywords:
      "developer tools online tools css minifier js minifier json formatter image compressor sb tools web tools code tools minify code online toolbox",
  },
  {
    id: "PLG-041",
    name: "10015 Tools",
    logoLink: "imgs/plugins/plugins-icons/logo-on-light.svg",
    category: "Online Tool Suite",
    description:
      "All-in-one utility platform offering free tools for text, image, CSS, and coding needs.",
    link: "https://10015.io/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Online tool suite — no installation required",
    },
    keywords:
      "online tools 10015 free tools text tools image tools css tools coding tools web utilities all in one tools developer utilities 10015.io",
  },
  {
    id: "PLG-042",
    name: "Editor.js",
    logoLink: "https://editorjs.io/_nuxt/logo.d2a59c1c.svg",
    category: "WYSIWYG Editor",
    description:
      "Block-based rich text editor that outputs clean JSON instead of messy HTML markup.",
    link: "https://editorjs.io/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)"],
      notes: "Vanilla JS — no jQuery, uses external plugins for block types",
    },
    keywords:
      "wysiwyg editor rich text editor block editor editorjs json editor content editor text editor editor js clean editor no jquery editor react editor",
  },
  {
    id: "PLG-043",
    name: "Driver.js",
    logoLink: "https://driverjs.com/driver.svg",
    category: "Tours & Onboarding",
    description:
      "Highlight any element and guide users through your app with step-by-step interactive tours.",
    link: "https://driverjs.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Zero dependencies — pure Vanilla JS, no jQuery needed",
    },
    keywords:
      "product tour onboarding driver js user guide highlight elements step by step tour app tour intro js alternative walkthrough tutorial overlay",
  },
  {
    id: "PLG-044",
    name: "Freepik AI App",
    logoLink: "imgs/plugins/plugins-icons/freepik.png",
    category: "AI Design Tools",
    description:
      "AI-powered creative platform for generating images, videos, and editing visuals instantly online.",
    link: "https://www.freepik.com/app",
    tech: {
      languages: [],
      libraries: [],
      notes:
        "Online AI platform — browser-based, no installation or coding needed",
    },
    keywords:
      "ai image generator ai video generator freepik ai design tool ai creative platform generate images online ai art ai graphics ai photos freepik app",
  },
  {
    id: "PLG-037",
    name: "fullPage.js",
    logoLink: "imgs/plugins/plugins-icons/fullPage-318818ea.png",
    category: "Scrolling & Layout",
    description:
      "Build stunning full-screen one-page websites with vertical and horizontal scrolling sections.",
    link: "https://alvarotrigo.com/fullPage/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [
        "jQuery (optional)",
        "React (optional)",
        "Vue (optional)",
        "Angular (optional)",
      ],
      notes:
        "Works standalone with Vanilla JS — jQuery is optional, not required",
    },
    keywords:
      "fullpage full screen scroll one page website fullpage js full page sections vertical scroll horizontal scroll alvaro trigo full screen layout",
  },
  {
    id: "PLG-038",
    name: "pagePiling.js",
    logoLink: "imgs/plugins/plugins-icons/pagePiling-437263fc.png",
    category: "Scrolling & Layout",
    description:
      "jQuery plugin that stacks full-page sections like cards when the user scrolls.",
    link: "https://alvarotrigo.com/pagePiling/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery"],
      notes: "Requires jQuery — mandatory dependency",
    },
    keywords:
      "page piling stacked sections jquery scroll plugin pagepiling fullpage alternative card scroll stacking sections",
  },
  {
    id: "PLG-039",
    name: "Magic Grid",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Layout & Grid",
    description:
      "Zero-dependency masonry grid layout that automatically repositions all items cleanly.",
    link: "https://github.com/e-oj/Magic-Grid",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Zero dependencies — pure Vanilla JS",
    },
    keywords:
      "masonry grid layout magic grid dynamic grid auto layout pinterest layout no dependency grid vanilla js grid responsive grid",
  },
  {
    id: "PLG-033",
    name: "Loaders.css",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Loading Animations",
    description:
      "Pure CSS loading animations including spinners, dots, and bars with no JavaScript.",
    link: "https://connoratherton.com/loaders",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Completely CSS-only — no JavaScript at all",
    },
    keywords:
      "css loader loading animation spinner dots bars pure css loader no javascript loader loading spinner css only loading indicator preloader",
  },
  {
    id: "PLG-034",
    name: "CSS Loaders",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Loading Animations",
    description:
      "Modern gallery of CSS-only loaders with bars, circles, and dots ready to copy.",
    link: "https://css-loaders.com/bars/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Completely CSS-only",
    },
    keywords:
      "css loader loading animation bars circles dots css spinner preloader loading indicator copy css loader modern loader gallery",
  },
  {
    id: "PLG-035",
    name: "SweetAlert2",
    logoLink: "imgs/plugins/plugins-icons/SweetAlert2.png",
    category: "Alerts & Modals",
    description:
      "Beautiful and fully customizable popups designed to replace boring native browser alerts.",
    link: "https://sweetalert2.github.io/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes: "Vanilla JS — framework wrappers available, no jQuery needed",
    },
    keywords:
      "alert modal popup sweetalert2 sweet alert custom alert dialog box notification toast confirm dialog replace browser alert beautiful popup",
  },
  {
    id: "PLG-036",
    name: "Balloon.css",
    logoLink: "imgs/plugins/plugins-icons/balloon.png",
    category: "Tooltips",
    description:
      "Pure CSS tooltips using data attributes with no JavaScript needed and four positions.",
    link: "https://kazzkiq.github.io/balloon.css/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes:
        "Completely CSS-only — just add data-balloon attribute to any element",
    },
    keywords:
      "tooltip css tooltip balloon css pure css tooltip no javascript tooltip data attribute tooltip hover tooltip top bottom left right tooltip",
  },
  {
    id: "PLG-030",
    name: "UI Gradients",
    logoLink:
      "https://cdn-1.webcatalog.io/catalog/uigradients/uigradients-icon.png?v=1714778064462",
    category: "Colors & Gradients",
    description:
      "Curated collection of beautiful CSS gradients you can browse, preview, and copy instantly.",
    link: "https://matya032.github.io/uiGradients/",
    tech: {
      languages: ["css.png"],
      libraries: [],
      notes: "Online tool — output is a ready-to-copy CSS gradient",
    },
    keywords:
      "gradients css gradients ui gradients color gradients background gradients linear gradient radial gradient copy gradient gradient generator beautiful gradients",
  },
  {
    id: "PLG-031",
    name: "Gradient.Page",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Design & UI Tools",
    description:
      "Curated platform offering gradient wallpapers, CSS color schemes, and free design tools.",
    link: "https://gradient.page/",
    tech: {
      languages: ["css.png"],
      libraries: [],
      notes: "Online tool — output is ready CSS code",
    },
    keywords:
      "gradient page gradient wallpapers css color schemes gradient tools design tools free gradients color palette gradient backgrounds",
  },
  {
    id: "PLG-032",
    name: "CSS Box Shadow Generator",
    logoLink: "https://toastlog.com/img/logos/cssscan.svg",
    category: "CSS Tools & Generators",
    description:
      "Over 91 handpicked box-shadow styles you can click and instantly copy the CSS.",
    link: "https://getcssscan.com/css-box-shadow-examples",
    tech: {
      languages: ["css.png"],
      libraries: [],
      notes: "Online tool — single-click copy of ready CSS code",
    },
    keywords:
      "box shadow css shadow shadow generator cssscan css box shadow examples copy shadow drop shadow card shadow button shadow input shadow",
  },
  {
    id: "PLG-026",
    name: "Blobmaker",
    logoLink: "imgs/plugins/plugins-icons/Blobmaker.png",
    category: "SVG Generators",
    description:
      "Generate unique organic SVG blob shapes for backgrounds and decorative UI accents.",
    link: "https://www.blobmaker.app/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Online tool — output is a ready-to-use SVG file",
    },
    keywords:
      "blob svg blob blobmaker organic shapes svg generator background shapes decorative shapes blob shapes free svg ui shapes",
  },
  {
    id: "PLG-027",
    name: "GetWaves",
    logoLink: "imgs/plugins/plugins-icons/GetWaves.avif",
    category: "SVG Generators",
    description:
      "Create smooth and beautiful SVG wave dividers for your page sections in seconds.",
    link: "https://getwaves.io/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Online tool — output is SVG or CSS ready to copy",
    },
    keywords:
      "wave svg wave getwaves wave divider section divider wave generator page divider smooth wave background wave",
  },
  {
    id: "PLG-028",
    name: "Shape Divider App",
    logoLink: "imgs/plugins/plugins-icons/Shape_Divider_App.png",
    category: "SVG Generators",
    description:
      "Design and export custom SVG section dividers with a live real-time visual preview.",
    link: "https://www.shapedivider.app/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Online tool — generates SVG + CSS code ready to paste",
    },
    keywords:
      "shape divider section divider svg divider custom divider wave divider triangle divider tilt divider page section separator shape divider app",
  },
  {
    id: "PLG-029",
    name: "Spectrum Shapes",
    logoLink: "imgs/plugins/plugins-icons/spectrum.png",
    category: "Design Assets",
    description:
      "High-quality vector shapes and design elements for UI and illustrations with free weekly updates.",
    link: "https://spectrums.framer.website/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Design assets (SVG/PNG) — use directly in HTML/CSS",
    },
    keywords:
      "vector shapes design assets spectrum shapes svg shapes png shapes ui shapes illustration shapes free shapes design elements weekly shapes",
  },
  {
    id: "PLG-021",
    name: "Tagify (YairEO)",
    logoLink:
      "https://raw.githubusercontent.com/yairEO/tagify/master/docs/readme-header.svg",
    category: "Form Components",
    description:
      "Transforms any input into a smart tags field with autocomplete and drag and drop.",
    link: "https://yaireo.github.io/tagify/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes: "Primarily Vanilla JS — has framework wrappers available",
    },
    keywords:
      "tags tag input tagify tag field autocomplete tags drag drop tags input component multi tag input yaireo tagify smart tags",
  },
  {
    id: "PLG-022",
    name: "Cleave.js",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Form Components",
    description:
      "Auto-formats input fields for credit cards, phone numbers, and dates as user types.",
    link: "https://nosir.github.io/cleave.js/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: ["React (optional)"],
      notes: "Vanilla JS — has an optional React component wrapper",
    },
    keywords:
      "input format cleave js credit card input phone number input date input auto format input mask format input field cleave",
  },
  {
    id: "PLG-023",
    name: "Date Range Picker",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Form Components",
    description:
      "Configurable jQuery date and time range picker with presets and full calendar display.",
    link: "https://www.daterangepicker.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery", "Moment.js"],
      notes: "Requires both jQuery and Moment.js as mandatory dependencies",
    },
    keywords:
      "date picker date range date range picker calendar picker jquery datepicker time picker date input date selector daterangepicker",
  },
  {
    id: "PLG-024",
    name: "Tokenize2",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Form Components",
    description:
      "Searchable multi-select tag input with async loading and full keyboard navigation support.",
    link: "https://dragonofmercy.github.io/Tokenize2/index.html",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery"],
      notes: "Requires jQuery — mandatory dependency",
    },
    keywords:
      "tokenize multi select tag input searchable select async select keyboard navigation select input tokenize2 jquery select",
  },
  {
    id: "PLG-025",
    name: "Tom Select",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Form Components",
    description:
      "Powerful select-box replacement with search, tagging, and async loading without jQuery.",
    link: "https://tom-select.js.org/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes:
        "Completely Vanilla JS — evolved from Selectize.js, no jQuery required",
    },
    keywords:
      "select box tom select custom select searchable select tagging select async select no jquery select selectize alternative dropdown search",
  },
  {
    id: "PLG-019",
    name: "Chart.js",
    logoLink: "https://www.chartjs.org/img/chartjs-logo.svg",
    category: "Charts & Data Visualization",
    description:
      "Eight animated and responsive chart types with a clean and very simple API.",
    link: "https://www.chartjs.org/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: [],
      notes: "Vanilla JS — renders on HTML5 Canvas, no jQuery needed",
    },
    keywords:
      "charts data visualization chart js bar chart line chart pie chart doughnut chart canvas chart responsive charts animated charts chartjs",
  },
  {
    id: "PLG-020",
    name: "ApexCharts",
    logoLink: "imgs/plugins/plugins-icons/apexcharts-logo.png",
    category: "Charts & Data Visualization",
    description:
      "Over 20 interactive animated chart types for React, Vue, Angular, and vanilla JS.",
    link: "https://apexcharts.com/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes:
        "Primarily Vanilla JS — has official wrappers for React, Vue, and Angular",
    },
    keywords:
      "apexcharts charts interactive charts animated charts react charts vue charts angular charts area chart heatmap chart candlestick chart apex charts",
  },
  {
    id: "PLG-016",
    name: "Swiper",
    logoLink: "https://swiperjs.com/images/swiper-logo.svg",
    category: "Slider & Carousel",
    description:
      "The most modern mobile-friendly slider with touch, autoplay, and full RTL support.",
    link: "https://swiperjs.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)", "Angular (optional)"],
      notes:
        "Primarily Vanilla JS — has official wrappers for React, Vue, and Angular",
    },
    keywords:
      "slider carousel swiper touch slider mobile slider autoplay slider rtl slider swiper js image slider responsive slider swiper react swiper vue",
  },
  {
    id: "PLG-017",
    name: "OwlCarousel2",
    logoLink: "imgs/plugins/plugins-icons/owl-logo.png",
    category: "Slider & Carousel",
    description:
      "Touch-enabled jQuery carousel with autoplay, lazy loading, and full RTL support.",
    link: "https://owlcarousel2.github.io/OwlCarousel2/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery"],
      notes: "Requires jQuery — mandatory dependency",
    },
    keywords:
      "owl carousel jquery carousel touch carousel autoplay carousel lazy load carousel rtl carousel owl carousel 2 image carousel responsive carousel",
  },
  {
    id: "PLG-018",
    name: "Splide.js",
    logoLink: "imgs/plugins/plugins-icons/splide.png",
    category: "Slider & Carousel",
    description:
      "Lightweight accessible slider with fade, thumbnails, and autoplay using zero dependencies.",
    link: "https://splidejs.com/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["React (optional)", "Vue (optional)"],
      notes:
        "Zero dependencies — pure Vanilla JS with optional framework wrappers",
    },
    keywords:
      "splide slider lightweight slider accessible slider fade slider thumbnail slider no dependency slider splide js carousel autoplay slider",
  },
  {
    id: "PLG-010",
    name: "GSAP",
    logoLink: "imgs/plugins/plugins-icons/gsap-logo-1d2e01cc.png",
    category: "JavaScript Animation",
    description:
      "Industry-standard JavaScript animation library that is fast, smooth, and universally compatible.",
    link: "https://gsap.com/",
    tech: {
      languages: ["js.png"],
      libraries: [],
      notes:
        "Vanilla JS — integrates with React/Vue/Angular but works independently",
    },
    keywords:
      "gsap javascript animation greensock animation platform timeline animation scroll animation tween animation gsap react gsap vue motion animation performant animation",
  },
  {
    id: "PLG-011",
    name: "Animate.css",
    logoLink: "imgs/plugins/plugins-icons/animatecss-a2cade18.png",
    category: "CSS Animations",
    description:
      "Plug-and-play CSS animations like bounce and fade, with no JavaScript needed at all.",
    link: "https://animate.style/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Completely CSS-only — no JavaScript required at all",
    },
    keywords:
      "animate css css animation bounce fade slide zoom flip rotate css only animation animate style plug and play animation animated class",
  },
  {
    id: "PLG-012",
    name: "WOW.js",
    logoLink: "imgs/plugins/plugins-icons/wow-logo.jpg",
    category: "Scroll Animations",
    description:
      "Triggers CSS animations when elements scroll into view, pairs perfectly with Animate.css.",
    link: "https://wowjs.uk/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["Animate.css"],
      notes:
        "Requires Animate.css to function — Vanilla JS with no jQuery dependency",
    },
    keywords:
      "scroll animation wow js animate on scroll scroll trigger css animation scroll reveal wow animate css scroll into view",
  },
  {
    id: "PLG-013",
    name: "AOS",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Scroll Animations",
    description:
      "Add scroll-triggered animations to any element using just a single HTML data attribute.",
    link: "https://michalsnik.github.io/aos/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "Vanilla JS — triggered via data attributes directly in HTML",
    },
    keywords:
      "aos animate on scroll scroll animation data attribute animation scroll reveal scroll trigger fade on scroll aos js scroll animation library",
  },
  {
    id: "PLG-014",
    name: "Hover.css",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "CSS Effects",
    description:
      "Over 100 modern CSS hover effects ready to apply by adding a class to any element.",
    link: "https://ianlunn.github.io/Hover/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Completely CSS-only — just add a class to the element",
    },
    keywords:
      "hover effects css hover hover css button hover effects link hover card hover image hover css transition effects hover animation",
  },
  {
    id: "PLG-015",
    name: "Animsition",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Page Transitions",
    description:
      "Simple jQuery plugin for adding smooth CSS transition effects between website pages.",
    link: "http://git.blivesta.com/animsition/",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: ["jQuery"],
      notes: "Requires jQuery — will not work without it",
    },
    keywords:
      "page transition animsition jquery transition css page transition page change animation smooth transition between pages website transition",
  },
  {
    id: "PLG-005",
    name: "Google Fonts",
    logoLink: "imgs/plugins/plugins-icons/google-fonts-logo-png_seeklogo.png",
    category: "Typography",
    description:
      "Over 1,500 free web fonts by Google, ready to embed in one line.",
    link: "https://fonts.google.com/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Added via <link> tag in HTML and applied with font-family in CSS",
    },
    keywords:
      "fonts web fonts typography google fonts free fonts font family custom fonts 1500 fonts embed font cdn font link tag",
  },
  {
    id: "PLG-006",
    name: "TextBlock",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Typography Tools",
    description:
      "Fine-grained control over text blocks for balanced and fully responsive typography layouts.",
    link: "https://textblock.io/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: [],
      notes: "Pure Vanilla JS — no external framework required",
    },
    keywords:
      "text formatting typography text block responsive typography balanced text text layout font control textblock",
  },
  {
    id: "PLG-007",
    name: "Animated Headlines",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Text Animations",
    description:
      "Eye-catching rotating and typing headline effects designed for modern hero sections.",
    link: "https://codyhouse.co/demo/animated-headlines/index.html",
    tech: {
      languages: ["html.png", "css.png", "js.png"],
      libraries: [],
      notes: "CSS Keyframes + Vanilla JS — no jQuery needed",
    },
    keywords:
      "animated headline text animation rotating text typing text hero text headline animation codyhouse headline effects animated title",
  },
  {
    id: "PLG-008",
    name: "iTyped",
    logoLink: "imgs/plugins/plugins-icons/puzzle_4020290.png",
    category: "Text Animations",
    description:
      "Smooth typewriter text animation with custom delays, loop control, and cursor effects.",
    link: "https://ityped.surge.sh/",
    tech: {
      languages: ["html.png", "js.png"],
      libraries: [],
      notes: "Pure Vanilla JS — a lightweight alternative to Typed.js",
    },
    keywords:
      "typing animation typewriter ityped typed js alternative typewriter effect cursor effect loop text type effect text typing",
  },
  {
    id: "PLG-009",
    name: "CSS Animated Text Generator",
    logoLink: "imgs/plugins/plugins-icons/cssicon.png",
    category: "CSS Generators",
    description:
      "Create animated text styles with custom fonts, effects, and ready-to-copy CSS output.",
    link: "https://www.cssportal.com/css-animated-text-generator/",
    tech: {
      languages: ["html.png", "css.png"],
      libraries: [],
      notes: "Online tool — output is pure HTML + CSS ready to paste",
    },
    keywords:
      "css animated text text animation generator css text effects animated text generator custom text animation copy css text generator cssportal",
  },
];
