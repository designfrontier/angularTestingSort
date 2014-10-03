module.exports.tasks = {
    "cacheBust": {
      "options": {
        "length": 32,
        "rename": true,
        "deleteOriginals": true,
        "encoding": "utf8",
        
        "jsonOutput": "<%= cacheBustConfig.jsonOutput %>",
        "baseDir": "<%= cacheBustConfig.baseDir %>"
      },
      "files": {
        "src": [
          "build/index.html"
        ]
      }
    }
};