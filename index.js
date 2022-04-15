/* Setup

   1. Create a .env file (click add file then remane it to .env)

   2. Put "token=" (without quotes) into the .env file followed by your Discord Bot token (No spaces!)

*/

/* If you use uptimerobot to ping, delete this line and line 20

const express = require("express");
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});

*/

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
  // Here is where you need to code
  if(message.content == "Node.js is cool") {
    message.channel.send("Yea!");
  }
  if(message.content == ":dev"){
    message.channel.send("Sajad")
} 
  if(message.content == ":qr"){    message.channel.send("https://sajutrident.github.io/fivo-qr-generator/")
}
  if(message.content == ":web"){   message.channel.send("https://sajutrident.github.io/twin/")
}
  if(message.content == ":help"){
     message.channel.send(":help see all command's. :qr get Qr code generator link. :web get official twin website link.")
}
});

client.login(process.env.token);
