"use strict";

const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use("cors()");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
