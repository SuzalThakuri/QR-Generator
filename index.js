import inquirer from "inquirer";
import { type } from "os";
import fs from "node:fs";
import qr from "qr-image";

inquirer
  .prompt([
    {
      message: "Enter the url",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('image.png'));
    fs.writeFile("URL.txt",url,(err)=>{
        if(err) throw err;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });


