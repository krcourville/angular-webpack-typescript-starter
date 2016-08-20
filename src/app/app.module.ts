import AppController from "./app.controller";

export default angular
    .module("app", ["ui.router", "ngMaterial"])
    .config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterService) => {
        $stateProvider
            .state("root", {
                controller: AppController,
                controllerAs: "$ctrl",
                template:  require("./app.html"),
                url: ""
            });
    });
