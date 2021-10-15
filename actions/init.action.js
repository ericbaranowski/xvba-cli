const path = require("path");
const fs = require("fs");
const rootPath = process.cwd();

module.exports = () => {

    try {
        let confFile = path.join(rootPath + "/config.json");
        data = {
            app_name: "XVBA",
            description: "",
            author: "",
            email: "",
            create_ate: "",
            excel_file: "index.xlsb",
            vba_folder: "vba-files",
            xvba_packages: {},
            xvba_dev_packages: {},
        }
        fs.exists(confFile, hasFile => {
            if (!hasFile) {
                fs.writeFile(confFile, JSON.stringify(data, null, 4), () => {})
                console.log("Created config.json");
            } else {
                console.log("File alredy exist!!")
            }
        })

    } catch (error) {
        console.log(error)
    }

}

