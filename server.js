const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const hbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 4040;

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));

app.engine("handlebars", hbs({ defaultLayout: "main" }));
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "handlebars");

app.use(express.static("public"));
require("./routes/htmlRoutes")(app);

app.listen(PORT, listening);
    function listening () {
    console.log(`TRASHTRASH is live on PORT: ${PORT}`);
}