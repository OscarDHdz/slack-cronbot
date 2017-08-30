const env = process.env.NODE_ENV || 'development';

// If dev, read ./config.json
if ( env === 'development' ) {
  const devConfigs = require('./config.json');
  // Set local configuration
  for (var config in devConfigs) {
    process.env[config] = devConfigs[config];
  }
}

// Environment variables validation
var ValidateParameters = () => {
  console.log(`[36m%s[0m`, `# Validatig parameters...`);
  if ( process.env.SLACK_HOOK_URL )  console.log(`  OK - Using Slack webhook: [35m${process.env.SLACK_HOOK_URL}[0m`);
    else {
      console.log(`[31m%s[0m`, `  ERROR - No SLACK_HOOK_URL provided`);
      throw `Missing SLACK_HOOK_URL Environment variable`
    }
  if ( process.env.SLACK_MESSAGE ) console.log(`  OK - Sending message: [35m${process.env.SLACK_MESSAGE}[0m`);
    else {
      console.log(`[31m%s[0m`, `  ERROR - No SLACK_MESSAGE provided`);
      throw `Missing SLACK_MESSAGE Environment variable`
    }
  if ( process.env.SLACK_CHANNEL ) console.log(`  OK - To channel(s): [35m${process.env.SLACK_CHANNEL}[0m`);
    else {
      console.log(`[31m%s[0m`, `  ERROR - No SLACK_CHANNEL provided`);
      throw `Missing SLACK_CHANNEL Environment variable`
    }
  if ( process.env.CRON_TIME ) console.log(`  OK - At: [35m${process.env.CRON_TIME}[0m`);
    else {
      console.log(`[31m%s[0m`, `  ERROR - No CRON_TIME provided`);
      throw `Missing CRON_TIME Environment variable`
    }
  if ( process.env.CRON_ZONE ) console.log(`  OK - With timezone: [35m${process.env.CRON_ZONE}[0m`);
    else {
      process.env.CRON_ZONE = 'Etc/GMT0';
          console.log(`  OK - Timezone not privided using default: [35m${process.env.CRON_ZONE}[0m`);
    }
  console.log(`[36m%s[0m`, `# Validation completed.`);

}
ValidateParameters();


module.exports = {
  SLACK_HOOK_URL: process.env.SLACK_HOOK_URL,
  SLACK_MESSAGE: process.env.SLACK_MESSAGE,
  SLACK_CHANNEL: process.env.SLACK_CHANNEL,
  CRON_TIME: process.env.CRON_TIME
};
