var fs = require('fs');
var assert = require('assert');
var webdriver = require('selenium-webdriver'),By = webdriver.By,until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();

driver.get('https://the-internet.herokuapp.com/javascript_alerts');
// driver.wait(5000);

// Click 'Click for JS Alert'.
driver.findElement(By.xpath('//*[@id="content"]/div/ul/li[1]/button')).click();
driver.sleep(2000);
driver.switchTo().alert().accept(); 

// Click 'Click for JS Confirm'. Clicks 'OK'. Assert the Result value 'You clicked: Ok'
driver.findElement(By.xpath('//*[@id="content"]/div/ul/li[2]/button')).click();
driver.sleep(2000);
driver.switchTo().alert().accept();
driver.findElement(By.xpath('//*[@id="result"]')).getText().then(function(body_text){
    assert.equal("You clicked: Ok", body_text, "Yay, it worked");
});


// Click 'Click for JS Prompt'. Enter 'BrowserStack' in the prompt. Assert the Result value 'You entered: BrowserStack' Screen reader support enabled.
driver.findElement(By.xpath('//*[@id="content"]/div/ul/li[3]/button')).click();
driver.sleep(2000);
driver.switchTo().alert().sendKeys("BrowserStack");
driver.sleep(2000);
driver.switchTo().alert().accept();


// driver.findElement(By.xpath('//*[@id="result"]')).getText().then(function(body_text){
//     assert.equal("You clicked: Ok", body_text, "Yay, it worked");
// });

driver.quit();