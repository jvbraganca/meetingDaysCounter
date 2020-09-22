var express = require("express")
var router = express.Router()
let {
  getTimeDifference,
  getHoursToMd,
  getMinutesToNextHour,
  isMeetingToday,
} = require("../services/date")

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    days: getTimeDifference("2020-11-19"),
    hours: getHoursToMd(),
    minutes: getMinutesToNextHour(),
    isMeetingToday: isMeetingToday("2020-11-19"),
  })
})

module.exports = router
