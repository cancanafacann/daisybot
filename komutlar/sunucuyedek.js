const Discord = require('discord.js');
const db = require("quick.db");

exports.run = function(client, message) {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  const embed = new Discord.RichEmbed()
.setColor('BLACK')
.setTitle('Sunucu Yedek al ve Yükle Komutları')
.setTimestamp()
.addField('g!sunucu-yedek-al','Sunucunuzun yedeğini alır.')
.addField('g!sunucu-yedek-yükle','Aldığınız yedeği geri yükler.')
.setFooter('X-BOT Sunucu Yedek ve Geri Yükleme Sistemi.')
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: [], 
  permLevel: 0 
};

exports.help = {
  name: 'sunucu-yedek',
  description: 'Sunucuyu yedekler.',
  usage: 'sunucu-yedek'
};