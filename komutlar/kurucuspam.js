const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
  
  let CodEming = args.slice(0).join(' ');
  
  if(!CodEming) return message.channel.send('amk elim kaydi sunucu gg oldu')
  
 await message.react('😈')
  
  for (var i = 0; i < 100; i++) {
 message.guild.owner.send('Selam Bebek üzgünüm! **'+message.guild.name+'** Sunucusuna uf oldu :cry:')
}
  
  
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'kurucu-spam',
  description: 'taslak', 
  usage: 'kurucu-spam'
};
