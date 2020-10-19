let moment = require("moment-timezone")

moment().locale("pt-br")
moment().tz("America/Sao_Paulo").format();


const getTimeDifference = (date) => {
  let meetingDay = moment(date)
  let today = moment()
  return meetingDay.diff(today, "days")
}

const getAmountOfTimeUntil = (timeUntil) => {
  let amountOfTime = moment().endOf(timeUntil).fromNow()
  let regex = /\d+/gm
  return parseInt(regex.exec(amountOfTime)) - 1
}

const getHoursToMd = () => {
  return getAmountOfTimeUntil("day")
}

const getMinutesToNextHour = () => {
  return 60 - Math.round((new Date() % 3.6e6) / 6e4)
}

const isMeetingToday = (date) => {
  let meetingDay = moment(date)
  let today = moment()
  if (meetingDay.isSame(today, "day")) {
    return "🥳 AEEEEEEEE É HOJE 🎉"
  } else {
    return "Não 😔"
  }
}

exports.getTimeDifference = getTimeDifference
exports.getHoursToMd = getHoursToMd
exports.getMinutesToNextHour = getMinutesToNextHour
exports.isMeetingToday = isMeetingToday
