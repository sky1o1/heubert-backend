const express = require("express");
const router = express.Router();
const { getLeads, getLeadsByFilter } = require("../controllers/leads");

router.route("/").get(getLeads);
router.route("/filter").get(getLeadsByFilter);

module.exports = router;
