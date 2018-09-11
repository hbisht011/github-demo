#Selenium Grid Setup:

##Grid Setup:

To start hub -node, follow the below steps:

1. Navigate to the Selenium jar path: `cd /Users/Kireeti/Desktop/Shiva/SeleniumJars`

2. Start hub using the command: `java -jar selenium-server-standalone-3.11.0.jar -role hub`

3. Start node using the command:

####For Safari, 
pass the json config file having config like BrowserName, max sessions etc:

- `java -jar selenium-server-standalone-3.11.0.jar -role node -nodeConfig <path to the configfile>`
- `java -jar selenium-server-standalone-3.8.1.jar -role node -nodeConfig /Users/Kireeti/D ownloads/safarinodeConfig.js`

#####Works:
- `java -jar selenium-server-standalone-3.8.1.jar -role node -hub http://<ipAddress>:4444/grid/register -maxSession 5 -browser "browserName=safari, maxInstances=3,platform=MAC"`

``DesiredCapabilities capse = new DesiredCapabilities();
        capse.setCapability("browserName","safari");
        capse.setCapability("platform","MAC");
        driver = new RemoteWebDriver(new URL("http://<ipAddress>:4444/wd/hub"),capse);``

####For Firefox:

- `java -jar selenium-server-standalone-3.11.0.jar -role node -hub http://<ipAddress>:4444/grid/register -maxSession 5 -browser "browserName=firefox, maxInstances=3,platform=ANY"`
- `java -jar selenium-server-standalone-3.8.1.jar -role node -hub http://<ipAddress>:4444/grid/register -maxSession 5 -browser "browserName=firefox, maxInstances=3,platform=ANY"`
- `java -jar selenium-server-standalone-3.8.1.jar -role node -nodeConfig /Users/Kireeti/Downloads/ff.js`
- `java -Dwebdriver.gecko.driver=/Users/Kireeti/Desktop/Shiva/BrowserDrivers/geckodriver -jar selenium-server-standalone-3.8.1.jar -role node -nodeConfig /Users/Kireeti/Downloads/ff.js`


#####Works:
- `java -Dwebdriver.gecko.driver=/Users/Kireeti/Desktop/Shiva/BrowserDrivers/geckodriver -jar selenium-server-standalone-3.8.1.jar -role node -hub http://<ipAddress>:4444/grid/register -maxSession 5 -browser "browserName=firefox, maxInstances=3,platform=ANY"`

`DesiredCapabilities capse = new DesiredCapabilities();
capse.setCapability("browserName","firefox");
driver = new RemoteWebDriver(new URL("http://<ipAddress>:4444/wd/hub"),capse);`
