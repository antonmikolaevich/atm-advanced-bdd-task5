module.exports = {
    capabilities: {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: [
          // '--headless',
          '--window-size=1920,1080',
          '--disable-web-security',
          // '--incognito'
        ],
      },
    },
    services: ['chromedriver'],
    reporters: ['dot', 'spec']
  };