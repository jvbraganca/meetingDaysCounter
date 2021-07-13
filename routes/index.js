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
    days: getTimeDifference("2021-10-08"),
    hours: getHoursToMd(),
    minutes: getMinutesToNextHour(),
    isMeetingToday: isMeetingToday("2021-10-08"),
  })
})

module.exports = router
