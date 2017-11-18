const Discord = require("discord.js");
const client = new Discord.Client();

  client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);	
});

client.on('message', msg => {
  if (msg.content === '@esco#2218') {
    msg.reply('Think your cool calling out esco? fuck off loser.');
   
}});


client.login('MzgxMzAxNzkyMjcwNTgxNzYw.DPFKfA.LYkBm6G0XQStiBIPncLtUv0ogys');
