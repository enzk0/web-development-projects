import inquirer from "inquirer";
import qr from "qr-image";
import fs from "node:fs";

inquirer
    .prompt([
        {
          name: "url",
          type: "input",
          message: "Please place a url to convert in QR code!"
      },
    ])
    .then((answers) => {
      const url = answers.url;
      makeQr(url);
    })
    .catch((error) => {
    if (error.isTtyError) {
      console.error("An error occurred:", error);
    } else {
      // Something else went wrong
    }
});

function makeQr(key){
  var qr_image = qr.image(key)
  qr_image.pipe(fs.createWriteStream("qr_code.png"))

  fs.writeFile("URL.txt", qr_img, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}