export const prompt = (app, text, defaultAnswer = '') => {
    const options = {
        defaultAnswer,
        buttons: ['confirm', 'cancel', 'Case'],
        defaultButton: 'confirm',
        cancelButton: 'cancel'
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
            withPrompt: 'please choose which case you prefer',
            defaultItems: [list[0]]
        });
    } catch(e) {
        return null;
    }
};