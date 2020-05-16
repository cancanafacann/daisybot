const Discord = require('discord.js');
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
  
 if(message.author.id !== ayarlar.sahip) return message.reply(':no_entry: Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz.');
 
 if(!args[0]) return message.channel.send( ":no_entry: Lütfen doğru bir **ID** giriniz.");
  let karalisteyealinan = args[0]
  let karalistesebebi = args.slice(1).join(" ");
  let karaliste =  db.delete(`karaliste_`+ karalisteyealinan)
    if(!karalistesebebi) return message.channel.send(":no_entry: Lütfen beyaz listeye alınma sebebini giriniz.");

message.channel.send(`**${karalisteyealinan}** ID'li kullanıcı başarıyla beyaz listeye alındı.`);
const beyazlisteembed = new Discord.RichEmbed()
.setColor(0xb1ff4a)
.addField("Beyaz listeye alınan kullanıcının ID:", karalisteyealinan)
.addField("Beyaz listeye alınma sebebi:", karalistesebebi)
.setTimestamp()
.setFooter("Beyaz listeye alan yetkili: " + message.author.tag , message.author.avatarURL)
  
  client.channels.get("635391876547215390").send(beyazlisteembed);

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['beyazliste','beyaz-liste'],
  permLevel: 0
};

exports.help = {
  name: 'karaliste-al',
  description: 'Karalisteden çıkarır',
  usage: 'karaliste-al'
};