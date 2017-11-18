const Discord = require("discord.js");
const client = new Discord.Client();

  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);	
});

client.on('message', msg => {
  if (msg.content === 'esco') {
    msg.reply('esco is currently taken by opossum. stop trying to get with him.');
   
}});


client.login('MzgxMzAxNzkyMjcwNTgxNzYw.DPFKfA.LYkBm6G0XQStiBIPncLtUv0ogys');
