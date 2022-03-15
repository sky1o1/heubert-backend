const connectDB = require("../../config/db");
const ErrorResponse = require("../../utills/errorResponse");
const asyncHandler = require("../../middleware/async");

// @desc  Get all leads
// @route  Get /leads
// @access  Public

exports.getLeads = asyncHandler(async (req, res, next) => {
  var sql = "SELECT * from datas";
  connectDB.query(sql, function (error, result) {
    if (error) {
      return next(new ErrorResponse(`Datas not found`, 404));
    }
    return res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });
  });
});

// @desc  Filter datas by leadOrigin and leadSource
// @route  Get /leads/filter?leadOrigin=data&leadSource=data
// @access  Public

exports.getLeadsByFilter = asyncHandler(async (req, res, next) => {
  var sql = `SELECT * from datas WHERE leadOrigin = ${req.query.leadOrigin} and leadSource = ${req.query.leadSource}`;
  connectDB.query(sql, function (error, result) {
    if (error) {
      return next(new ErrorResponse(`Datas not found`, 404));
    }
    return res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });
  });
});
