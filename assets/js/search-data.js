// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Things I&#39;ve built — at work and for fun.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "My full work an academic history, you can download the one-page pdf as well",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "books-the-employees-a-workplace-novel-of-the-22nd-century",
          title: 'The Employees: A Workplace Novel of the 22nd Century',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_employees/";
            },},{id: "books-longitude",
          title: 'Longitude',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/longitude/";
            },},{id: "books-smart-baseball",
          title: 'Smart Baseball',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/smart_baseball/";
            },},{id: "books-the-visual-display-of-quantitative-information",
          title: 'The Visual Display of Quantitative Information',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/visual_display/";
            },},{id: "books-the-catalyst-rna-and-the-quest-to-unlock-life-39-s-deepest-secrets",
          title: 'The Catalyst: RNA and the Quest to Unlock Life&amp;#39;s Deepest Secrets',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/catalyst/";
            },},{id: "books-unruly-the-ridiculous-history-of-england-39-s-kings-and-queens",
          title: 'Unruly: The Ridiculous History of England&amp;#39;s Kings and Queens',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/unruly/";
            },},{id: "books-the-poppy-war-trilogy",
          title: 'The Poppy War Trilogy',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_poppy_war/";
            },},{id: "projects-mappy",
          title: 'MAPPy',
          description: "An LLM + RAG platform that helps NASA and DoD teams generate and reason about systems engineering artifacts",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_mappy/";
            },},{id: "projects-in-search-of-the-most-exciting-baseball-game",
          title: 'In search of the most exciting baseball game',
          description: "A metric for how exciting a game actually was, run across decades of box scores",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_baseball/";
            },},{id: "projects-usb-nugget-amp-retia-io",
          title: 'USB Nugget &amp;amp; Retia.io',
          description: "Helping a nonprofit build open-source hardware that teaches people how hacking actually works",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_usb_nugget/";
            },},{id: "projects-wifi-triggered-fireworks",
          title: 'WiFi-triggered fireworks',
          description: "An ESP32 that sets off fireworks when it hears the right WiFi packet",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_fireworks/";
            },},{id: "projects-llm-over-meshtastic",
          title: 'LLM over Meshtastic',
          description: "Querying a language model over long-range LoRa radio, no internet required",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_llm_meshtastic/";
            },},{id: "projects-alphafour",
          title: 'AlphaFour',
          description: "A Connect Four-playing machine that beats you at your own game — my mechanical engineering senior design project",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_alphafour/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6E%73%67%6F%64%73%68%61%6C%6C@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/nsgodshall", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/nsgodshall", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
