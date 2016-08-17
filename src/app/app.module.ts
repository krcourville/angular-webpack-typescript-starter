import AppController from "./app.controller";

export default angular
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