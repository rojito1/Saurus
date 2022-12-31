const Discord = require('discord.js')
const client = new Discord.Client()
const { Client, MessageEmbed, Guild } = require('discord.js');
require('dotenv').config();
const keepAlive = require('./server.js');
const express = require("express")().get("/", (req,res)=>res.send("Bot en Linea!")).listen(3000)

client.on('ready', () => {
   function presence() {
     client.user.setPresence({
       status: 'on',
       activity: {
         name: 'Join .gg/buxwarscm Create By: Rojito#0840',
         type: 'PLAYING'
       }
     })
   }
   presence();
   console.log(`Bot Encendido`)
})

const fs = require('fs')
let { readdirSync } = require('fs') 

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./comandos').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./comandos/${file}`);
  client.commands.set(command.name, command);
}

client.on('message', (message) => {

  let prefix = 'g!'

  if(message.author.bot) return;

  if(!message.content.startsWith(prefix)) return;

  let usuario = message.mentions.members.first() || message.member;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.find((c) => c.name === command || c.alias && c.alias.includes(command));
  if(cmd){
    cmd.execute(client, message, args)
  }
})


const mySecret = process.env['TOKEN']
client.login(mySecret)