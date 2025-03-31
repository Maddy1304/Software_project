const express = require("express");
const cors = require("cors");
const pool = require("./database");
const app = express();

app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;


//add inventory 1st one

app.post("/addprod", (req, res) => {
    const prodid = req.body["prodid"];
    const prodname = req.body["prodname"];
    const price = req.body["price"];

   
    console.log("Product ID" + prodid);
    console.log("Product Name" + prodname);
    console.log("Product Price" + price);

    const insertproddeet = `INSERT INTO proddeets ( prodid , prodname, prodprice ) VALUES ( '${prodid}','${prodname}','${price}');`

    pool.query(insertproddeet).then((response) => {
        console.log("Data Saved")
        console.log(response)
    })
    .catch((err) => {
        console.log(err)
    })

    console.log(req.body);
    res.send("Response Received" + req.body);
});