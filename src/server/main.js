import dotenv from 'dotenv';

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

import express from "express";
import ViteExpress from "vite-express";
import nodemailer from 'nodemailer';
import bodyParser from 'body-parser';
import helmet from "helmet";
const app = express();


app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


  const scriptSrcUrls = [
    "https://stackpath.bootstrapcdn.com",
    "https://api.tiles.mapbox.com",
    "https://api.mapbox.com",
    "https://kit.fontawesome.com",
    "https://cdnjs.cloudflare.com",
    "https://cdn.jsdelivr.net",
];
const styleSrcUrls = [
    "https://kit-free.fontawesome.com",
    "https://stackpath.bootstrapcdn.com",
    "https://api.mapbox.com",
    "https://api.tiles.mapbox.com",
    "https://fonts.googleapis.com",
    "https://use.fontawesome.com",
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
];
const connectSrcUrls = [
    "https://api.mapbox.com",
    "https://*.tiles.mapbox.com",
    "https://events.mapbox.com",
    "https://www.googletagmanager.com/"
];
const fontSrcUrls = [];
app.use(
    helmet.contentSecurityPolicy({
        directives: {
            defaultSrc: [],
            connectSrc: ["'self'", ...connectSrcUrls],
            scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls, 'https://www.googletagmanager.com'],
            styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
            workerSrc: ["'self'", "blob:"],
            childSrc: ["blob:"],
            objectSrc: [],
            imgSrc: [
                "'self'",
                "blob:",
                "data:",
                "https://source.unsplash.com",
                "https://res.cloudinary.com/dwpxum7yt/", 
                "https://images.unsplash.com",
            ],
            fontSrc: ["'self'", ...fontSrcUrls],
        },
    })
);
  

// Endpoint to handle form submission
app.post('/send-email', (req, res) => {
    const { name, email, description } = req.body;
    console.group(name)
    // Create a Nodemailer transporter using SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'kumars.kartik@gmail.com',
            pass: process.env.pass
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
            
            res.status(500).json({ success: false, message: 'Error sending email' });
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ success: true, message: 'Email sent successfully' });
        }
    });
});

const port = process.env.PORT || 8080
ViteExpress.listen(app, port, () =>
  console.log(`Server is listening on port ${port}`),
);
