const mysql = require('mysql2');
const express = require('express');
var app = express();

// database file to json
const parser = require('body-parser')
app.use(parser.json());

var connection = mysql.createConnection(
    {
        host:'localhost',
        user : 'root',
        password : '1234',
        database : 'maintenance_and_support'
    }
);

connection.connect((err)=>
{
    if(!err)
        console.log('Database Connected');
    else
        console.log('Error!')
});

app.listen(5700,()=>{
    console.log('Server Started!!')
});

app.get('/ticket',(req,res)=>{
    connection.query("SELECT * FROM tickets",(err,rows,fields)=>{
    if(!err)
        res.send(rows);
    else
        console.log('Error!');
    })
})

app.get('/ticket/:id',(req,res)=>{
    connection.query("SELECT * FROM tickets WHERE ticket_no = ?",[req.params.id],(err,rows,fields)=>{
    if(!err)
        res.send(rows);
    else
        console.log('Error!');
    })
})

app.get('/add',(req,res)=>{
    var post = {Priority:3,Assigned_to:"Sameer",Date:"2022-01-22",Time:"09:00:10",Status:"Hold"};
    var sql = 'INSERT INTO tickets SET ?';
    var query = connection.query(sql,post,(err,result)=>{
        if(err) throw err;
        res.send('Rows Inserted!')
    })
});

app.get('/update/:id',(req,res)=>{
    var name = 'Ankur Sharma';
    
    var sql = `UPDATE tickets SET Assigned_to ='${name}' WHERE ticket_no = '${req.params.id}'`;
    var query = connection.query(sql,post,(err,result)=>{
        if(err) throw err;
        res.send('Rows Updated!')
    })
});

app.get('/delete/:id',(req,res)=>{
    
    var sql = `DELETE tickets WHERE ticket_no = '${req.params.id}'`;
    var query = connection.query(sql,post,(err,result)=>{
        if(err) throw err;
        res.send('Rows Deleted!')
    })
});