// Cronjob
var CronJob = require('cron').CronJob;
// HTTP Requests
const axios = require('axios');

// Env Variables
const SLACK_URL = process.env.SLACK_URL;
const SLACK_MESSAGE = process.env.SLACK_MESSAGE;
const SLACK_CHANNEL = process.env.SLACK_CHANNEL;
const CRON_TIME = process.env.CRON_TIME;

var ValidateParameters = () => {
  console.log(`[36m%s[0m`, `# Validatig parameters...`);
  if ( process.env.SLACK_URL )  console.log(`  OK - Using Slack webhook: [35m${process.env.SLACK_URL}[0m`);
    else {
      console.log(`[31m%s[0m`, `  ERROR - No SLACK_URL provided`);
      throw `Missing SLACK_URL Environment variable`
    }
  if ( process.env.SLACK_MESSAGE ) console.log(`  OK - Sending message: [35m${process.env.SLACK_MESSAGE}[0m`);
    else {
      console.log(`[31m%s[0m`, `  ERROR - No SLACK_MESSAGE provided`);
      throw `Missing SLACK_MESSAGE Environment variable`
    }
  if ( process.env.SLACK_CHANNEL ) console.log(`  OK - To channel: [35m${process.env.SLACK_CHANNEL}[0m`);
    else {
      console.log(`[31m%s[0m`, `  ERROR - No SLACK_CHANNEL provided`);
      throw `Missing SLACK_CHANNEL Environment variable`
    }
  if ( process.env.CRON_TIME ) console.log(`  OK - At: [35m${process.env.CRON_TIME}[0m`);
    else {
      console.log(`[31m%s[0m`, `  ERROR - No CRON_TIME provided`);
      throw `Missing CRON_TIME Environment variable`
    }
  console.log(`[36m%s[0m`, `# Validation completed.`);

}

var SendWebHookMessage = ( options ) => {

    return new Promise((resolve, reject) => {
        var url = options.SLACK_URL;
        var text = options.SLACK_MESSAGE;
        var channel = options.SLACK_CHANNEL;
        var color = options.SLACK_COLOR || `#297ed8`

        axios.post(url, { channel, text, color })
        .then((response) => resolve({error: false}))
        .catch( (error) => reject({error: true, error_message: error}))
    })


}


// Index init ------------------------------------------------------------------
ValidateParameters();
new CronJob('* * * * * *', function () {
    console.log('You will see this message every second');
}, null, true, 'America/Los_Angeles');

// SendWebHookMessage({SLACK_URL, SLACK_MESSAGE, SLACK_CHANNEL})
// .then((res) => {
//     console.log(`Message sent`);
// })
// .catch((err) => {
//     console.log(`Ther was an error`);
//
// })
