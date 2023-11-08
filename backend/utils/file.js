const fs = require("fs");
const path = require("path");
const {BASE_DATA_PATH} = require("../constants");

module.exports = {
    sendJSON: async (game, data, res) => {
        await fs.readFile(path.join(BASE_DATA_PATH, 'data/' + game + '/' + data + '.json'), 'utf8', (err, data) => {
            if (err) {
                res.status(500).send('Server Error');
                console.error(err);
                return;
            }
            res.json(JSON.parse(data));
        });
    },
    sendDirectoryList: (directoryPath, res, callback,) => {
        try {
            const files = fs.readdirSync(directoryPath, { withFileTypes: true });
            const directories = files.filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);
            console.log('Directories:', directories);
            let data = callback(directories)
            res.json(data)
        } catch (err) {
            console.error('Error reading directory:', err);
        }
    }
}