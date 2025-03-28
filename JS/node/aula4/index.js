const fs = require('fs').promises;
const { read } = require('fs');
const path = require('path');

async function readdir(rootDir) {
    rootDir =rootDir || path.resolve(__dirname)
    const files = await fs.readdir(rootDir);
    walk(files, rootDir);
}
 
async  function walk(files, rootDir) {
    for (let file of files) {
        const fileFullPath = path.resolve(rootDir, file);
        const stats = fs.stat(fileFullPath);

        if(/\.git/g.test(fileFullPath)) continue;
        if(/node_modules/g.test(fileFullPath)) continue;
        if(/\.git /g.test(fileFullPath)) continue;


        if((await stats).isDirectory()) {
            readdir(fileFullPath);
            continue;
        }

        if(!/\.css$/g.test(fileFullPath) && !/\.html$/g.test(fileFullPath)) {
            continue;
        }

        // console.log(fileFullPath, (await stats).isDirectory());
        console.log(fileFullPath);
    }
}
readdir('C:/Users/Filipe/OneDrive - SESISENAISP - Escolas/Documentos/Workspace/My-JS-progress/JS/');