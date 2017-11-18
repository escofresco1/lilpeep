const Discord = require("discord.js");
const client = new Discord.Client();

  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);	
});

client.on('message', msg => {
  if (msg.content === 'gay') {
    msg.reply('Think your cool calling people gay? suck an ass');
   
}});


client.login('MzgxMzAxNzkyMjcwNTgxNzYw.DPFKfA.LYkBm6G0XQStiBIPncLtUv0ogys');
