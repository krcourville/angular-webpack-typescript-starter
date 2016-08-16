import AppController from "./app.controller";

const app = angular
    .module("app", ["ui.router"])
    .config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterService) => {
        $stateProvider
            .state("root", {
                url: "",
                template:  require("./app.html"),
                controller: AppController,
                controllerAs: "$ctrl"
            });
    })
;

export default app;