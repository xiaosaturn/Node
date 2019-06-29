const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars.engine");
app.set("port", process.env.PORT || 1000)

app.use("./public/", express.static(path.join(__dirname, "/public")));

app.listen(app.get("port"), () => {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});

let fortunes = [
    "Conquer your fears or they will conquer you.", 
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

app.get("/", (req, res) => {
    // res.type("text/plain");
    // res.send("Meadowlark Travel");
    res.render("home");
});

app.get("/about", (req, res) => {
    // res.type("text/plain");
    // res.send("About Meadowlark Travel");
    let randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    res.render('about', { fortune: randomFortune });
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
