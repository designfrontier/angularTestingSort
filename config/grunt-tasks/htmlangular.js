module.exports = {
    options: {
        tmplext: '-template.html',
        customtags: ['<%= nghtml.tags %>'],
        customattrs: ['<%= nghtml.attrs %>'],
        reportpath: '<%= nghtml.reportpath %>'
    },
    files: {
      src: ['<%= htmlFiles %>'],
    },
};