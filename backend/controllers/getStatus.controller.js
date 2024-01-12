exports.getData = async (req, res) => {
    res.json({
        "schemaVersion": 1,
        "label": "status",
        "message": "online",
        "color": "green"
    });
};

exports.getStatus = async (req, res) => {
    res.send(200)
}

