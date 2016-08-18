import AppController from "./app.controller";
import IDialogService = angular.material.IDialogService;

export default angular
    .module("app", ["ui.router", "ngMaterial"])
    .config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterService) => {
        $stateProvider
            .state("root", {
                url: "",
                template:  require("./app.html"),
                controller: AppController,
                controllerAs: "$ctrl"
            });
    })
    .run(($mdDialog: IDialogService) => {
        console.log("RUN");
        $mdDialog.show(
            $mdDialog.alert()
                .title("alert")
                .textContent("Testing")
        );

    })
;