module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("index", {title: "TRASHTRASH"});
    });
    app.get("/genbotsvr", (req, res) => {
        res.render("genbotsvr", {title: "TRASHTRASH"});
    });

    
}