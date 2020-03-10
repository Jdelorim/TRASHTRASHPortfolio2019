module.exports = (app) => {
    app.get("/", (req, res) => {
        res.render("index", {title: "TRASHTRASH"});
    });
    app.get("/genbotsvr", (req, res) => {
        res.render("genbotsvr", {title: "TRASHTRASH"});
    });
    app.get("/3", (req, res) => {
        res.render("three", {title: "Pratice Makes Perfect!"});
    });

    
}