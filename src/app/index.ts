import "material-design-icons-iconfont/dist/material-design-icons.css";
import "angular-material/angular-material.css";
import "roboto-fontface";

import app from "./app.module";

const a = 'abcdde';

angular.bootstrap(document, [app.name], {
    strictDi: true
});
