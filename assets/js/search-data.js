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
            },{id: "books-the-big-short-inside-the-doomsday-machine",
          title: 'The Big Short: Inside the Doomsday Machine',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_big_short_inside_the_doomsday_machin/";
            },},{id: "books-project-hail-mary",
          title: 'Project Hail Mary',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/project_hail_mary/";
            },},{id: "books-superheavy-making-and-breaking-the-periodic-table",
          title: 'Superheavy: Making and Breaking the Periodic Table',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/superheavy_making_and_breaking_the_perio/";
            },},{id: "books-number-go-up-inside-crypto-39-s-wild-rise-and-staggering-fall",
          title: 'Number Go Up: Inside Crypto&amp;#39;s Wild Rise and Staggering Fall',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/number_go_up_inside_crypto_s_wild_rise_a/";
            },},{id: "books-kitchen-confidential-adventures-in-the-culinary-underbelly",
          title: 'Kitchen Confidential: Adventures in the Culinary Underbelly',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/kitchen_confidential_adventures_in_the_c/";
            },},{id: "books-meditations-marcus-aurelius-a-modern-translation-for-2026-amp-beyond",
          title: 'Meditations - Marcus Aurelius - A Modern Translation for 2026 &amp;amp; Beyond',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/meditations_marcus_aurelius_a_modern_tra/";
            },},{id: "books-longitude-the-true-story-of-a-lone-genius-who-solved-the-greatest-scientific-problem-of-his-time",
          title: 'Longitude: The True Story of a Lone Genius Who Solved the Greatest Scientific...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/longitude_the_true_story_of_a_lone_geniu/";
            },},{id: "books-at-night-all-blood-is-black",
          title: 'At Night All Blood is Black',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/at_night_all_blood_is_black/";
            },},{id: "books-the-highland-clans",
          title: 'The Highland Clans',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_highland_clans/";
            },},{id: "books-1066-the-year-of-the-conquest",
          title: '1066: The Year of the Conquest',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/1066_the_year_of_the_conquest/";
            },},{id: "books-the-last-of-his-kind-clayton-kershaw-and-the-burden-of-greatness",
          title: 'The Last of His Kind: Clayton Kershaw and the Burden of Greatness',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_last_of_his_kind_clayton_kershaw_and/";
            },},{id: "books-the-poppy-war",
          title: 'The Poppy War',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_poppy_war/";
            },},{id: "books-with-the-old-breed-at-peleliu-and-okinawa",
          title: 'With the Old Breed: At Peleliu and Okinawa',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/with_the_old_breed_at_peleliu_and_okinaw/";
            },},{id: "books-storm-clouds-over-the-pacific-1931-41",
          title: 'Storm Clouds over the Pacific, 1931–41',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/storm_clouds_over_the_pacific_1931_41/";
            },},{id: "books-the-wager-a-tale-of-shipwreck-mutiny-and-murder",
          title: 'The Wager: A Tale of Shipwreck, Mutiny and Murder',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_wager_a_tale_of_shipwreck_mutiny_and/";
            },},{id: "books-the-employees",
          title: 'The Employees',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_employees/";
            },},{id: "books-after-nationalism-being-american-in-an-age-of-division",
          title: 'After Nationalism: Being American in an Age of Division',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/after_nationalism_being_american_in_an_a/";
            },},{id: "books-foster",
          title: 'Foster',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/foster/";
            },},{id: "books-mere-christianity",
          title: 'Mere Christianity',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/mere_christianity/";
            },},{id: "books-smart-baseball",
          title: 'Smart Baseball',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/smart_baseball/";
            },},{id: "books-the-mvp-machine-how-baseball-39-s-new-nonconformists-are-using-data-to-build-better-players",
          title: 'The MVP Machine: How Baseball&amp;#39;s New Nonconformists Are Using Data to Build Better...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_mvp_machine_how_baseball_s_new_nonco/";
            },},{id: "books-the-visual-display-of-quantitative-information",
          title: 'The Visual Display of Quantitative Information',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/visual_display/";
            },},{id: "books-the-sirens-39-call-how-attention-became-the-world-39-s-most-endangered-resource",
          title: 'The Sirens&amp;#39; Call: How Attention Became the World&amp;#39;s Most Endangered Resource',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_sirens_call_how_attention_became_the/";
            },},{id: "books-the-catalyst-rna-and-the-quest-to-unlock-life-39-s-deepest-secrets",
          title: 'The Catalyst: RNA and the Quest to Unlock Life&amp;#39;s Deepest Secrets',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/catalyst/";
            },},{id: "books-founding-brothers-the-revolutionary-generation",
          title: 'Founding Brothers: The Revolutionary Generation',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/founding_brothers_the_revolutionary_gene/";
            },},{id: "books-patrolling-the-heart-of-the-west-true-tales-of-a-nevada-state-trooper",
          title: 'Patrolling the Heart of the West: True Tales of a Nevada State Trooper...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/patrolling_the_heart_of_the_west_true_ta/";
            },},{id: "books-the-dragon-republic",
          title: 'The Dragon Republic',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_dragon_republic/";
            },},{id: "books-unruly-the-ridiculous-history-of-england-39-s-kings-and-queens",
          title: 'Unruly: The Ridiculous History of England&amp;#39;s Kings and Queens',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/unruly_the_ridiculous_history_of_england/";
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
