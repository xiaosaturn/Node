const express = require("express");
const path = require("path");
const fortune = require("./lib/fortune");
const handlebars = require("express-handlebars").create({ defaultLayout: "main" });
// const handlebars = require("express-handlebars");

const app = express();

app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));
// app.engine('html', handlebars({
//     layoutsDir: 'views',
//     defaultLayout: 'layout',
//     extname: '.handlebars'
// }));
// app.set('view engine', 'handlebars');


app.set("port", process.env.PORT || 1000);
app.use("./public/", express.static(path.join(__dirname, "/public")));

app.listen(app.get("port"), () => {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});

app.get("/", (req, res) => {
    // res.type("text/plain");
    // res.send("Meadowlark Travel");
    res.render("home");
});

app.get("/about", (req, res) => {
    // res.type("text/plain");
    // res.send("About Meadowlark Travel");
    res.render('about', { fortune: fortune.getFortune() });
});

//定制404页面
app.use((req, res, next) => {
    // res.type("text/plain");
    // res.status(404);
    // res.end("404 - Not Found");
    res.status(404);
    res.render("404");
});

//定制500页面
app.use((err, req, res, next) => {
    console.error(err.stack);
    // res.type('text/plain');
    // res.status(500);
    // res.send('500 - Server Error');
    res.status(500);
    res.render("500");
});
