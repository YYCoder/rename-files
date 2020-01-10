# rename-files
Rename batch of files interactively using JXA 😁~

> Inspired by dtinth's [Batch File Rename](https://gist.github.com/dtinth/93e230152a771dcb1ec5).

### What is JXA
It's OS X automation, using Javascript.

### Requirements
For using JXA language, Mac OS X Yosemite is required.

Since OS X 10.10 (Yosemite), Javascript (called Javascript for Automation, or JXA) is also supported for app automation.

### Installation
1. `git clone git@github.com:YYCoder/rename-files.git`: clone this repository

2. `yarn build`: bundle typescript files to JXA
   
   > `yarn build` will generate a JXA script named `index.scpt` at your current working dictionary.

3. [add it to OS X Service](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/MakeaSystem-WideService.html#//apple_ref/doc/uid/TP40016239-CH46-SW1) or you can save it as an app, also just use `osascript` to run it

### How to use it
1. First step, select files:<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109184914.png" width="450" />

2. Next, there are two ways to rename files, as follows\:<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109192856.png" width="450" />

    1. you can simply write JavaScript code in the input, and this program will run it as a function, which return the new name. For example\:<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109192932.png" width="450" />

    2. you can click the **Case** button, then you will see this dialog:<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109192953.png" width="450" />

3. Then, you will see the diff dialog:<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109193039.png" width="450" />

4. Press the confirm button, that's it!


### Development

* `yarn dev`: bundle typescript files to develop, which will not write bundled file to disk

* `yarn build`: bundle and compress typescript files, then write it to disk

> Bundling depends on [ts-jxa](https://github.com/YYCoder/ts-jxa), which is a robust tool to help you develop JXA using typescript.

### Other JXA resources
* [The JXA Cookbook](https://github.com/JXA-Cookbook/JXA-Cookbook/wiki#table-of-contents)

* [Mac Automation Scripting Guide](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/index.html#//apple_ref/doc/uid/TP40016239-CH56-SW1)

* [A Beginners Guide to JXA, JavaScript Application Scripting](https://computers.tutsplus.com/tutorials/a-beginners-guide-to-javascript-application-scripting-jxa--cms-27171)

* [Javascript for Automation Documentation](https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-11.html#//apple_ref/doc/uid/TP40014508-CH110-SW1)


