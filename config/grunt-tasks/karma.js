module.exports.tasks = {
  "karma": {
    "unit": {
      "configFile": '<%= karmaConfig.configFile %>',
      "background": true
    },
    "continuous": {
      "configFile": '<%= karmaConfig.configFile %>',
      "singleRun": true,
      "browsers": [
        "PhantomJS"
      ]
    }
  }
};