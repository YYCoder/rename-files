# rename-files
批量重命名文件小工具 😁~

> 感谢 dtinth 大神的例子 [Batch File Rename](https://gist.github.com/dtinth/93e230152a771dcb1ec5)。

### 什么是 JXA
即用 JavaScript 开发 OS X automation。

### 环境要求
至少需要 OS X 10.10 (Yosemite) 及以上版本。

### 安装
1. `git clone git@github.com:YYCoder/rename-files.git`: clone 该仓库到本地

2. `yarn build`: 打包 ts 代码并生成 JXA 代码
   
   > `yarn build` 会在当前工作目录生成一个 `index.scpt` 文件。

3. [把生成的脚本添加成一个通用服务](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/MakeaSystem-WideService.html#//apple_ref/doc/uid/TP40016239-CH46-SW1)，或者你也可以将其保存为一个应用，也可以通过 `osascript` 直接运行它，用法参考：`osascript -l JavaScript 脚本路径`


### 如何使用
它是一个交互式工具，内部调用的 OS X 的 UI 接口，引导你一步一步完成操作🙂。

1. 首先，选择文件：<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109184914.png" width="450" />

2. 接下来，有如下两种方法去修改文件名：<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109192856.png" width="450" />

    1. 可以直接在输入框中写 JS 脚本，其中 name 变量就是当前的文件名，返回值就是新的文件名，因此你可以使用任何 JS 的语法，比如 `return name.toUpperCase()`：<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109192932.png" width="450" />

    2. 可以点击 **Case** 按钮，会让你直接选择一些常见的大小写格式使用，无需手动编写 JS：<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109192953.png" width="450" />

3. 完成上述步骤后，你会看到一个 diff 窗口，告诉你都有哪些文件被修改以及将会修改成什么样：<br><img src="https://markey-oss1.oss-cn-beijing.aliyuncs.com/rename-files/Lark20200109193039.png" width="450" />

4. 点击确定按钮即可~


### 开发

* `yarn dev`: 打包 ts 代码，并 watch 文件变动，当打包完成后还会自动执行，它不会将文件输出到磁盘

* `yarn build`: 打包并压缩 ts 代码，会在磁盘中输出产出的 JXA 文件

> 打包依赖于 [ts-jxa](https://github.com/YYCoder/ts-jxa)，它是个让开发者使用 typescript 开发 JXA 的强大工具。

### 其他 JXA 相关资料
* [The JXA Cookbook](https://github.com/JXA-Cookbook/JXA-Cookbook/wiki#table-of-contents)

* [Mac Automation Scripting Guide](https://developer.apple.com/library/archive/documentation/LanguagesUtilities/Conceptual/MacAutomationScriptingGuide/index.html#//apple_ref/doc/uid/TP40016239-CH56-SW1)

* [A Beginners Guide to JXA, JavaScript Application Scripting](https://computers.tutsplus.com/tutorials/a-beginners-guide-to-javascript-application-scripting-jxa--cms-27171)

* [Javascript for Automation Documentation](https://developer.apple.com/library/archive/releasenotes/InterapplicationCommunication/RN-JavaScriptForAutomation/Articles/OSX10-11.html#//apple_ref/doc/uid/TP40014508-CH110-SW1)

