"use strict";

const app = require("../app");
const PORT =3000;

app.listen(PORT, () => {      // == function() 과 동일
    console.log("SERVER OPERATE");
});