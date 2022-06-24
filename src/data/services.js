import strings from "../lang/langs";
if (!localStorage.getItem("lang")) {
  localStorage.setItem("lang", "en");
}

strings.setLanguage(localStorage.getItem("lang"));
let our_services = [
  {
    name: strings.serv_b_and_d,
    imgs: [
      require("../assets/images/sections/services/georgie-cobbs-muOHbrFGEQY-unsplash.jpg"),
      require("../assets/images/pages/services/barnd_and_de/ryan-ancill-aJYO8JmVodY-unsplash.jpg"),
      require("../assets/images/pages/services/barnd_and_de/scott-graham-5fNmWej4tAA-unsplash.jpg"),
    ],

    services: [
      strings.serv_b_and_d_1,
      strings.serv_b_and_d_2,
      strings.serv_b_and_d_3,
      strings.serv_b_and_d_4,
    ],
  },
  {
    name: strings.serv_content_dev,
    imgs: [
      require("../assets/images/sections/services/andrew-neel-9moikpaufvg-unsplash.jpg"),
      require("../assets/images/pages/services/content_dev/ben-kolde-FaPxZ88yZrw-unsplash.jpg"),
      require("../assets/images/pages/services/content_dev/corinne-kutz-tMI2_-r5Nfo-unsplash.jpg"),
    ],
    services: [
      strings.serv_content_dev_1,
      strings.serv_content_dev_2,
      strings.serv_content_dev_3,
      strings.serv_content_dev_4,
      strings.serv_content_dev_5,
    ],
  },
  {
    name: strings.serv_wep_and_app,
    imgs: [
      require("../assets/images/sections/services/nubelson-fernandes-UcYBL5V0xWQ-unsplash.jpg"),
      require("../assets/images/pages/services/web_app_dev/fotis-fotopoulos-DuHKoV44prg-unsplash.jpg"),
      require("../assets/images/pages/services/web_app_dev/karl-pawlowicz-QUHuwyNgSA0-unsplash.jpg"),
    ],
    services: [strings.serv_wep_and_app_1, strings.serv_wep_and_app_2],
  },
  {
    name: strings.serv_markting,
    imgs: [
      require("../assets/images/sections/services/myriam-jessier-eveI7MOcSmw-unsplash.jpg"),
      require("../assets/images/pages/services/digital_markting/alessio-zaccaria-MplUOXqEUK0-unsplash.jpg"),
      require("../assets/images/pages/services/digital_markting/campaign-creators-pypeCEaJeZY-unsplash.jpg"),
      require("../assets/images/pages/services/digital_markting/tech-daily-HpekD5ujnbQ-unsplash.jpg"),
    ],

    services: [strings.serv_markting_1, strings.serv_markting_2],
  },
  {
    name: strings.serv_media,
    imgs: [
      require("../assets/images/sections/services/sirisvisual-IcwAKUhNGXs-unsplash.jpg"),
      require("../assets/images/pages/services/medi_prod/allec-gomes-2F3JgwHM0nU-unsplash.jpg"),
      require("../assets/images/pages/services/medi_prod/sirisvisual-FonUXQEL1JQ-unsplash.jpg"),
    ],

    services: [
      strings.serv_media_1,
      strings.serv_media_2,
      strings.serv_media_3,
      strings.serv_media_4,
      strings.serv_media_5,
    ],
  },
  {
    name: strings.serv_sales_out,
    imgs: [
      require("../assets/images/sections/services/stephen-dawson-qwtCeJ5cLYs-unsplash.jpg"),
      require("../assets/images/pages/services/digital_markting/tech-daily-HpekD5ujnbQ-unsplash.jpg"),
    ],

    services: [
      strings.serv_sales_out_1,
      strings.serv_sales_out_2,
      strings.serv_sales_out_3,
    ],
  },
  {
    name: strings.serv_event_planning,
    imgs: [
      require("../assets/images/sections/services/kal-visuals-FtQE89f3EXA-unsplash.jpg"),
      require("../assets/images/pages/services/event_planning/charlesdeluvio-wn7dOzUh3Rs-unsplash.jpg"),
      require("../assets/images/pages/services/event_planning/chuttersnap-Q_KdjKxntH8-unsplash.jpg"),
      require("../assets/images/pages/services/event_planning/teemu-paananen-bzdhc5b3Bxs-unsplash.jpg"),
    ],

    services: [strings.serv_event_planning_1],
  },
];

export default our_services;
