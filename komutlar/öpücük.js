const Discord = require('discord.js');
let ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix;

exports.run = function(client, msg, author) {
    let yazi = msg.mentions.members.first();
    if(!yazi){
      msg.channel.sendMessage('> Örnek Kullanım: '+prefix+'öp istediğiniz kişiyi öper.  ');
    }if(yazi){
      const Embed = new Discord.RichEmbed()
      .setTitle('💋👅')
      .setDescription(`Vouvv,** <@${msg.author.id}> adlı kullanıcı ${yazi} adlı kullanıcıyı öptü.!**`)
      .setColor('RANDOM')
      .setImage('https://media.giphy.com/media/yWSX1sxLwnpsI/giphy.gif')
      msg.channel.sendMessage(Embed);
    } 
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'öp',
  description: 'Bu komut ile istediğiniz kişiyi öpersiniz',
  usage: 'öp <kullanıcı>' 
}