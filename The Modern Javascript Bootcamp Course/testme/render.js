import jsdom from 'jsdom';
import path from 'path';

const { JSDOM } = jsdom;

const render = async (filename) => {
    const filePath = path.join(process.cwd(), filename);
    // JSDOM CONFIG
    const dom = await JSDOM.fromFile(filePath, {
        runScripts: 'dangerously',
        resources: 'usable'
    });

    return new Promise((resolve, reject) => {
        dom.window.document.addEventListener('DOMContentLoaded', () => {
            // IF PROMISE RESOLVES RETURN DOM
            resolve(dom);
        });
    });
};

export { render };