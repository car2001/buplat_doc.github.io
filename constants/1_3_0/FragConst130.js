sap.ui.define([
    'constants/GeneralConstants'
],
    function (GeneralConstants) {
        "use strict";
        const FragmentConstants = {
            routes: [
            {
              key: "INDEX",
              title : "Bienvenido a Buplat",
              route: GeneralConstants.root + ".fragments.1_3_0.Welcome",
              default : true
            },
            {
              key: "INTRO",
              title : "Introducción",
              route: GeneralConstants.root + ".fragments.1_3_0.Introduction"
            },
            {
              key: "INTRO_BPT",
              title : "Conociendo BUPLAT",
              route: GeneralConstants.root + ".fragments.1_3_0.ConociendoBPT"
            },
            {
              key: "INTRO_HOME",
              title : "Home de Aplicaciones",
              route: GeneralConstants.root + ".fragments.1_3_0.Home"
            },
            {
              key : "APP",
              title : "Aplicaciones",
              route: GeneralConstants.root + ".fragments.1_3_0.App"
            }
          ]
        }
        return FragmentConstants;
    }
);