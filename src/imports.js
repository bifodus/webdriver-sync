/*!
 * Copyright 2013 Joseph Spencer
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var java = require("java");
var path = require("path");
var binaryDir = path.resolve(
   process.env.USERPROFILE || process.env.HOME,
   '.webdriver-sync'
);
var seleniumJarPath=path.resolve(
   binaryDir, 'selenium-server-standalone.jar'
);
var helperJarPath=path.resolve(
   __dirname, "java", "webdriversynchelpers", "dist", "webdriversynchelpers.jar"
);
var pathToChromeDriver=path.resolve(binaryDir, 'chromedriver');
java.classpath.push(seleniumJarPath);
java.callStaticMethodSync(
   "java.lang.System",
   "setProperty",
   "webdriver.chrome.driver",
   pathToChromeDriver
);

/* TODO
 * AndroidDriver
 * AndroidWebDriver
 * AndroidWebElement
 * DesiredCapabilities
 * DriverCommandExecutor
 * EventFiringKeyboard
 * EventFiringMouse
 * EventFiringWebDriver
 * ExtensionConnection
 * HtmlUnitDriver
 * HtmlUnitDriver.HtmlUnitWindow
 * HtmlUnitKeyboard
 * HtmlUnitMouse
 * HtmlUnitWebElement
 * HttpCommandExecutor
 * InternetExplorerDriver
 * IPhoneDriver
 * IPhoneSimulatorCommandExecutor
 * IPhoneSimulatorDriver
 * MarionetteConnection
 * NewProfileExtensionConnection
 * RemoteWebDriver
 * RemoteKeyboard
 * RemoteWebElement
 * RemoteWebDriver.RemoteTargetLocator
 * RemoteWebDriver.RemoteWebDriverOptions
 * RemoteWebDriver.RemoteWebDriverOptions.RemoteInputMethodManager
 * RemoteWebDriver.RemoteWebDriverOptions.RemoteTimeouts
 * RemoteWebDriver.RemoteWebDriverOptions.RemoteWindow
 * SafariDriver
 */

module.exports={
   helpers:{
      Map:java.import('me.joespencer.webdriversynchelpers.Map')
   },
   By:java.import('org.openqa.selenium.By'),
   ChromeDriver:java.import('org.openqa.selenium.chrome.ChromeDriver'),
   Command:java.import('org.openqa.selenium.remote.Command'),
   Cookie:java.import('org.openqa.selenium.Cookie'),
   Date:java.import('java.util.Date'),
   Dimension:java.import('org.openqa.selenium.Dimension'),
   ExpectedConditions:java.import('org.openqa.selenium.support.ui.ExpectedConditions'),
   FirefoxDriver:java.import('org.openqa.selenium.firefox.FirefoxDriver'),
   HtmlUnitDriver:java.import('org.openqa.selenium.htmlunit.HtmlUnitDriver'),
   Long:java.import('java.lang.Long'),
   Platform:java.import('org.openqa.selenium.Platform'),
   Point:java.import('org.openqa.selenium.Point'),
   Response:java.import('org.openqa.selenium.remote.Response'),
   SessionId:java.import('org.openqa.selenium.remote.SessionId'),
   TimeUnit:java.import('java.util.concurrent.TimeUnit'),
   UserAndPassword:java.import('org.openqa.selenium.security.UserAndPassword'),
   WebDriverWait:java.import('org.openqa.selenium.support.ui.WebDriverWait')
};