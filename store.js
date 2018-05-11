#!/usr/bin/env node
'use strict';

const fs = require('fs');

var args = process.argv.slice(2);
console.log (args[0]);
let dict = {};

if(args[0] == "add")
{
	var key = args[1];
	var value = args[2];

	

fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        if(data )
        {
    dict = JSON.parse(data); 
        }

    dict[key]=value; 
    dict = JSON.stringify(dict); 
    fs.writeFileSync('data.json', dict, 'utf8'); 
}
  });

}

if(args[0]== "list")
{
    fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
       var dictionary = JSON.parse(data); 
        for(key in dictionary)
        {
          console.log("key : ",key,"value : ",dictionary[key]);
          //console.log("value : ",dictionary[key]);
        }
    }
});
}

if(args[0] == "get")
{
    var keyfile = args[1];
    fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
       var dictionary = JSON.parse(data); 
        for(key in dictionary)
        {
           if(keyfile == key)
           {
          console.log("value : ",dictionary[key]);
           }
        }
    }
});
}

if(args[0] == "remove")
{
    var keyfile = args[1];
    fs.readFile('data.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
       var dictionary = JSON.parse(data); 
        for(key in dictionary)
        {
           if(keyfile == key)
           {
            delete dictionary[key];
            dict = JSON.stringify(dictionary); 
            fs.writeFileSync('data.json', dict, 'utf8'); 

           }
        }
    }
});
}

if(args[0] == "clear")
{
    var dictionary = JSON.stringify(dict); 
     fs.writeFileSync('data.json',dictionary,'utf8'); 
}









