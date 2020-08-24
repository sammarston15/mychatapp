const moment = require('moment');


const formatMessage = (username, text) => {
  return {
    username,
    text, 
    time: moment().format('h:ma')
  }
}

module.exports = formatMessage;