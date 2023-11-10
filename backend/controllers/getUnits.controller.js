const {sendJSON, getDirectoryChildren, sendDirectoryList} = require("../utils/file");
const {BASE_DATA_PATH} = require("../constants");
const VALUE = "units"

exports.getData = async (req, res) => {
    const game = req.query.game;

    if(!game){
        sendDirectoryList(BASE_DATA_PATH + '/data', res, (dir) => {
            return {
                pages: dir.map(subDir => "/units?game=" + subDir)
            }
        })
    } else {
        await sendJSON(req.query.game, VALUE, res);
    }
};

