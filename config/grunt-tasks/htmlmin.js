module.exports.tasks = {
    "htmlmin": {
      "index": {
        "options": {
          "removeComments": true,
          "collapseWhitespace": true
        },
        "files": {
          "build/index.html": "build/index.html"
        }
      }
    }
};