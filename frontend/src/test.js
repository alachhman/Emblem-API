import fetch from "node-fetch";

fetch("https://www.FE-API.com/fe8/units")
    .then((response) => response.json())
    .then((data) => console.log(data));
