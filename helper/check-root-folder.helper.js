const fs = require("fs");
const rootPath = process.cwd();

module.exports =  checkRootFolder = () => {
    let confFile = rootPath + "/xvba_modules";
    try {
        let find = fs.access(confFile);

        if (!find) {
            console.log('You are not in project root folder');
            return false;
        } else {
            console.log('xvba_modules found in project root folder');
            return true;
        }

    } catch (error) {
        console.log('Caught exception: ' + error);
        return false;
    }


}