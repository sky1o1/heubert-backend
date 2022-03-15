const express = require("express");
const router = express.Router();
const { getDatas, getDatasByFilter } = require("../controllers/datas");

router.route("/").get(getDatas);
router.route("/filter").get(getDatasByFilter);

module.exports = router;
