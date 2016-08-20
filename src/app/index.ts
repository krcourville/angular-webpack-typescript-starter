require("material-design-icons-iconfont/dist/material-design-icons.css");
require("angular-material/angular-material.css");
require("roboto-fontface");

import app from "./app.module";

angular.bootstrap(document, [app.name], {
    strictDi: true
});

