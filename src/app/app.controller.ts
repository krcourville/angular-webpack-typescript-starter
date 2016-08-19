import * as moment from "moment";
import "./app.scss";

export default class AppController {
    message = "World::  " + moment().format("YYYY-MM-DD HH:SS");
}