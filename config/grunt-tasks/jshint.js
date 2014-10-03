module.exports = {
    src: ['<%= jsFiles %>'],
    options: {
        jshintrc: true
        , reporter: require('jshint-stylish')
        , force: '<%= jshintConfig.force %>'
    }    
}