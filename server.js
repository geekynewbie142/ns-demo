const express = require('express');
const mysql = require('mysql');
const app = express();
const connection = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",

})
connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connected");
})

// connection.query("Create database demo",(error ,results,fields) => {
//     if (!error)
//     console.log(results); // The results 
// });
const stmt = `USE db demo;CREATE TABLE Persons (
    PersonID int,
    LastName varchar(255),
    FirstName varchar(255),
    Address varchar(255),
    City varchar(255)
);`
connection.query(stmt, (error ,results,fields) => {
    if (!error){
    console.log(results);
    return 
 }
 console.log(error);
});
connection.query("show databases", (error ,results,fields) => {
    if (!error)
    console.log(results); // The results 
});

app.get("/",(req,res) => {
    res.json({msg:"Hello"});
})
app.listen(3000,() => {
    console.log("http://localhost:3000");
})