// Cronjob
var CronJob = require('cron').CronJob;
// Configure
const CONFIGS = require('./configs/config');
// SendMessagePromise
const {SendSlackMessage} = require('./utils/SlackMessage');






// Index init ------------------------------------------------------------------
new CronJob(CONFIGS.CRON_TIME, function () {
  SendSlackMessage(CONFIGS)
   .then((res) => {
      var date = new Date();
      console.log(`Message sent at: ${date.toString()}`);
   })
   .catch((err) => {
     console.log(`[31m%s[0m`, `Message could not be sent due: ${err}`);
  })
}, null, true, CONFIGS.CRON_ZONE);
