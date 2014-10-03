module.exports.tasks = {
  "watch": {
    "options": {
      "livereload": true
    },
    "js": {
      "files": [
        "**/*.js",
        "!**/*_test.js"
      ],
      "tasks": [
        "clear",
        "karma:unit:run"
      ]
    },
    "templates": {
      "files": [
        "**/*.html"
      ],
      "tasks": [
        "clear",
        "karma:unit:run"
      ]
    },
    "tests": {
      "files": [
        "**/*_test.js"
      ],
      "tasks": [
        "clear",
        "karma:unit:run"
      ]
    },
    "styles": {
      "files": [
        "**/*.styl"
      ],
      "tasks": [
        "clear",
        "stylus"
      ]
    }
  }
}