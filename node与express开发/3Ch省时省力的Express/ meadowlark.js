const express = require("express");

const app = express();
app.set("port", process.env.PORT || 1000)


app.listen(app.get("port"), () => {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate.');
});

app.get("/", (req, res) => {
    res.type("text/plain");
    res.send("Meadowlark Travel");
});

app.get("/about", (req, res) => {
    res.type("text/plain");
    res.send("Abount Meadowlark Travel");
});

//定制404页面
app.use((req, res) => {
    res.type("text/plain");
    res.status(404);
    res.end("404 - Not Found");
});

//定制500页面
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});