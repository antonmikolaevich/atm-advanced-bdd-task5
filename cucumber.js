module.exports = {
    debug: {
      require: ['cucumber/steps/*.js'],
      paths: ['cucumber/features/**/*.feature'],
      parallel: 2,
      publishQuiet: true,
      tags: "@test",
      format: ["html:report/cucumber-report.html", 'progress-bar', '@cucumber/pretty-formatter'],
      formatOptions: { 
        colorsEnabled: true
     }
  }
  }