const {sendJSON, getDirectoryChildren, sendDirectoryList} = require("../utils/file");
const {BASE_DATA_PATH} = require("../constants");
const VALUE = "units"

exports.getDirectory = async (req, res) => sendDirectoryList(BASE_DATA_PATH + '/data', res, (dir) => {
    return {
        pages: dir.map(subDir => "/units/" + subDir)
    }
})

exports.getData = async (req, res) => await sendJSON("sacred_stones", VALUE, res);