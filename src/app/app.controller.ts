import * as moment from "moment";
import "./app.scss";

const a = "1235 4";

export default class AppController {
    public message = "World::  " + moment().format("YYYY-MM-DD HH:SS");
}
