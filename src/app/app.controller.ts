import * as moment from "moment";
import "./app.scss";
import "./images/smile.jpeg";

export default class AppController {
    public message = "World::  " + moment().format("YYYY-MM-DD HH:SS");
}