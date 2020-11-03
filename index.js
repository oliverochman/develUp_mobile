import React from "react";
import { registerRootComponent } from "expo";
import App from "./App";
import axios from "axios";

// axios.defaults.baseURL = "https://develup-2020.herokuapp.com/api/v1";
axios.defaults.baseURL = "http://localhost:3000/api/v1";



registerRootComponent(App);
