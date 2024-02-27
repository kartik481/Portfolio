import dotenv from 'dotenv';

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express from "express";
import ViteExpress from "vite-express";
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';


const app = express();

app.get("/hello", (req, res) => {
  res.send("Kartik");
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, description } = req.body;
    console.group(name)
    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kumars.kartik@gmail.com',
            pass: 'gxoo qmpt ammw spbb'
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'kumars.kartik@gmail.com',
        subject: 'From Web portfolio',
        text: `Name: ${name}\nEmail: ${email}\nDescription: ${description}`
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

const port = process.env.PORT || 8080
ViteExpress.listen(app, port, () =>
  console.log("Server is listening on port 3000..."),
);
