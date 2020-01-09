export const prompt = (app, text, defaultAnswer = '') => {
    const options = {
        defaultAnswer,
        buttons: ['确认', '取消', '修改大小写'],
        defaultButton: '确认',
        cancelButton: '取消'
    };
    try {
        return app.displayDialog(text, options);
    } catch (e) {
        return null;
    }
};

export const alert = (app, text, informationalText) => {
    const options: any = {};
    if (informationalText) options.message = informationalText;
    app.displayAlert(text, options);
};

export const confirm = (app, text) => {
    try {
        app.displayDialog(text);
        return true;
    } catch (e) {
        return false;
    }
};

export const chooseCase = (app, list) => {
    try {
        return app.chooseFromList(list, {
            withPrompt: '请选择要转换的大小写格式',
            defaultItems: [list[0]]
        });
    } catch(e) {
        return null;
    }
};