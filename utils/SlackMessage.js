// HTTP Requests
var axios = require('axios');

// Send Slack Message Promise
var SendSlackMessage = ( options ) => {

    return new Promise((resolve, reject) => {
        var url = options.SLACK_HOOK_URL;
        var text = options.SLACK_MESSAGE;
        var channel = options.SLACK_CHANNEL;
        var color = options.SLACK_COLOR || `#297ed8`

        axios.post(url, { channel, text, color })
        .then((response) => resolve(response))
        .catch((err) => {
          console.log(err);
          reject(err.message);
        });
    })


}

module.exports = { SendSlackMessage }
