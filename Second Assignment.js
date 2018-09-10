var fs = require('fs');
var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

driver.get('https://www.facebook.com');
driver.get('https://www.browserstack.com');
driver.navigate().back();
driver.navigate().forward();
driver.navigate().back();
driver.getTitle().then(function (websiteTitle) {
    console.log(websiteTitle);
});
driver.wait(until.titleIs('Facebook – log in or sign up'), 1000)
    .then(function () {
        console.log('Page title is: Facebook – log in or sign up');
    });


driver.getCurrentUrl().then(function (websiteURL) {
    console.log(websiteURL);
});
driver.wait(until.urlIs('https://www.facebook.com/'), 1000)
    .then(function () {
        console.log("URL is: " + "https://www.facebook.com/");
    });


//If current URL is https://www.facebook.com/ then print -> URL is: https://www.facebook.com/

driver.takeScreenshot().then(function (base64Image) {
    var decodedImage = new Buffer(base64Image, 'base64');
    fs.writeFile('image_decoded.jpg', decodedImage, function(err) {});
    console.log('took screenshot');
});

driver.quit();