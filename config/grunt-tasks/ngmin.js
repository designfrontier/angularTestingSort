module.exports.tasks = {
  "ngmin": {
    "app": {
      "expand": true,
      "cwd": ".",
      "src": ['<%= jsFiles %>'],
      "dest": "build/generated"
    }
  }
};