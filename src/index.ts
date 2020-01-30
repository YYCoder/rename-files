/* UI 相关工具方法 */
import '@jxa/global-type';
import {
    kebabCase, camelCase, capitalize, snakeCase
} from 'lodash';
import { prompt, confirm, alert, chooseCase } from './ui';
const CASE_LIST = ['kebabCase', 'snakeCase', 'camelCase', 'pascalCase', 'capitalize', 'upperCase', 'lowerCase'];
const CASE_MAP = {
    kebabCase,
    snakeCase,
    camelCase,
    capitalize,
    pascalCase: (str: string) => camelCase(str).replace(/^\w/, (sub) => sub.toUpperCase()),
    upperCase: (str: string) => str.toUpperCase(),
    lowerCase: (str: string) => str.toLowerCase()
};

/* 程序初始化 */
const app = Application.currentApplication();
app.includeStandardAdditions = true;

const se = Application('System Events');

/* 选择需要修改的文件 */
const selection = app.chooseFile({
    withPrompt: 'please select which file you want to modify',
    multipleSelectionsAllowed: true,
    defaultLocation: app.pathTo('home folder') + '/Desktop'
}).map((path) => {
    // 注：这里 path 必须是 string，默认是 Path 对象。太坑了。。。😓
    return se.diskItems.byName(path.toString());
});

/* 选择如何修改 */
const {
    buttonReturned: btn,
    textReturned: code
} = prompt(
    app, 
    `change to what ? there are two ways as follows:
    1. js code: name variable is the current file name
    2. click Case button: will give you several frequently-used case to choose, so you don't have to write code`,
    'return name;'
);
let fn: any = () => {};
if (btn === 'Case') {
    const selectedCase = chooseCase(app, CASE_LIST);
    fn = (name) => CASE_MAP[selectedCase](name);
}
else {
    fn = new Function('name', code);
}


try {
    const tasks = selection
        .map((item) => {
            const rawName = item.name();
            const hasExt = rawName.includes('.');
            let target = '';
            try {
                if (btn === 'Case') {
                    // 多级拓展名不转换，只在选择大小写格式时使用
                    const name = rawName.split('.')[0];
                    const ext = hasExt ? rawName.split('.').slice(1).join('.') : '';
                    target = fn(name) + '.' + ext;
                }
                else {
                    target = fn(rawName);
                }
            } catch (e) {
                throw new Error('can\'t rename file: "' + rawName + '": ' + e);
            }
            if (!target) {
                throw new Error('can\'t rename file: "' + rawName + '", because expression returned empty value');
            }
            return {
                item,
                to: target,
                from: rawName
            };
        })
        .filter((task) => task.from != task.to);

    if (tasks.length == 0) throw new Error('No file is selected to be renamed, or the names of the files are the same, so there is no need to rename');

    const message = `following files will be renamed: \n${
        tasks.map((task) => `* ${task.from} => ${task.to}`).join('\n')
    }`;

    /* 确认是否修改 */
    if (confirm(app, message)) {
        tasks.forEach((task) => task.item.name = task.to);
    }

} catch(e) {
    console.log(`error: ${e}`);
    alert(app, 'Error!', String(e));
}


