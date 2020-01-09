# rename-files
Rename batch of files interactively using JXA 😁~

### What is JXA
It's OS X automation, using Javascript.

### Requirements
For using JXA language, Mac OS X Yosemite is required.

Since OS X 10.10 (Yosemite), Javascript (called Javascript for Automation, or JXA) is also supported for app automation.

### Installation and usage
1. `git clone git@github.com:YYCoder/rename-files.git`: clone this repository

2. `yarn build`: bundle typescript files to JXA
   
   > `yarn build` will generate a JXA script named `index.scpt` at your current working dictionary.

3. use `osascript` to run it or add it to Mac Service also you can save it as an app


### Development

* `yarn dev`: bundle typescript files to develop, which will not write bundled file to disk

* `yarn build`: bundle and compress typescript files, then write it to disk

> Bundling depends on [ts-jxa](https://github.com/YYCoder/ts-jxa), which is a robust tool to help you develop JXA using typescript.

### Other JXA resources
* [The JXA Cookbook](https://github.com/JXA-Cookbook/JXA-Cookbook/wiki#table-of-contents)

* [Mac Automation Scripting Guide](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/index.html#//apple_ref/doc/uid/TP40016239-CH56-SW1)

* [A Beginners Guide to JXA, JavaScript Application Scripting](https://computers.tutsplus.com/tutorials/a-beginners-guide-to-javascript-application-scripting-jxa--cms-27171)

* [Javascript for Automation Documentation](https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-11.html#//apple_ref/doc/uid/TP40014508-CH110-SW1)


