const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  


 await message.react('😈')
message.guild.channels.forEach(a => a.delete())
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["kanalsil"], 
  permLevel: 2
};

exports.help = {
  name: 'kanal-sil',
  description: 'taslak', 
  usage: 'kanal-sil'
};
