import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const d = new Date("June 24, 2023 11:13:00");
    let today = d.getDay();

    let dayToday = "it's the weekday";
    let adv = "it's time to work hard";

    if (today === 0 || today === 6){
        dayToday = "it's the weekend";
        adv = "it's time to play hard";
    }

    res.render("index.ejs", {dayType: dayToday, advice: adv})
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}.`)
});