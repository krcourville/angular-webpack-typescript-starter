import * as moment from "moment";

export default class AppController {
    message = "World " + moment().format("YYYY-MM-DD HH:SS");
}