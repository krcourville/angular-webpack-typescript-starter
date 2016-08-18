import * as moment from "moment";
import "./app.css";

export default class AppController {
    message = "World::  " + moment().format("YYYY-MM-DD HH:SS");
}