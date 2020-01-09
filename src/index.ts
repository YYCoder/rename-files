/* UI 相关工具方法 */
import '@jxa/global-type';
import {
    kebabCase, camelCase, capitalize, snakeCase
} from 'lodash';
import { prompt, confirm, alert, chooseCase } from './ui';
const CASE_LIST = ['中划线', '下划线', '小驼峰', '大驼峰', '首字母大写', '全大写', '全小写'];
const CASE_MAP = {
    '中划线': kebabCase,
    '下划线': snakeCase,
    '小驼峰': camelCase,
    '大驼峰': (str: string) => camelCase(str).replace(/^\w/, (sub) => sub.toUpperCase()),
    '首字母大写': capitalize,
    '全大写': (str: string) => str.toUpperCase(),
    '全小写': (str: string) => str.toLowerCase()
};

/* 程序初始化 */
const app = Application.currentApplication();
app.includeStandardAdditions = true;

const se = Application('System Events');

/* 选择需要修改的文件 */
const selection = app.chooseFile({
    withPrompt: '请选择要重命名的文件：',
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
    `修改成？
    1. js 代码，name 变量为当前文件名
    2. 选择 修改大小写 则直接将文件名按规则替换`,
    'return name;'
);
let fn: any = () => {};
if (btn === '修改大小写') {
    const selectCase = chooseCase(app, CASE_LIST);
    fn = (name) => CASE_MAP[selectCase](name);
}
else {
    fn = new Function('name', code);
}


try {
    const tasks = selection
        .map((item) => {
            const rawName = item.name();
            const hasExt = rawName.includes('.');
            // 多级拓展名不转换
            const name = rawName.replace(/\.[\w\-\_]+/g, '');
            const ext = hasExt ? rawName.replace(/^[\w\-\_]+\./, '') : '';
            let target = '';
            const from = hasExt ? `${name}.${ext}` : name;
            let to = '';
            try {
                target = fn(name);
                to = hasExt ? `${target}.${ext}` : target;
            } catch (e) {
                throw new Error('无法重命名文件： "' + name + '": ' + e);
            }
            if (!target) {
                throw new Error('无法重命名文件："' + name + '"，重命名表达式返回为空');
            }
            return {
                item,
                ext,
                from,
                to
            };
        })
        .filter((task) => task.from != task.to);

    if (tasks.length == 0) throw new Error('没有选择需要重命名的文件，或文件前后命名一致，无需重命名');

    const message = `如下文件将被修改：\n${
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


