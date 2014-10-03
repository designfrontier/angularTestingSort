module.exports.tasks = {
  "cssmin": {
    "combine": {
      "files": {
        "build/app.css": [
          "**/*.css",
          "!lib/**",
          "!node_modules/**"
        ]
      }
    },
    "minify": {
      "expand": true,
      "cwd": "build/",
      "src": [
        "**/*.css"
      ],
      "dest": "build/",
      "ext": ".css"
    }
  }
};