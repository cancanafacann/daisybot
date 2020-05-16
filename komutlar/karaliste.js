const Discord = require('discord.js');
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')
exports.run = (client, message, args) => {
 
 if(message.author.id !== ayarlar.sahip) return message.reply(':no_entry: Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz.'); // Sadece
 
 if(!args[0]) return message.channel.send( ":no_entry: Lütfen doğru bir kullanıcı **ID'si** giriniz.");
  let karalisteyealinan = args[0]
  let karalistesebebi = args.slice(1).join(" ");
  let karaliste =  db.set(`karaliste_`+ karalisteyealinan, "karalistede")
  
  if(!karalistesebebi) return message.channel.send(":no_entry: Lütfen karalisteye alma sebebinizi giriniz.");

  message.channel.send(`**${karalisteyealinan}** ID'li üye başarıyla karalisteye alındı.`);

const karalisteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField("Yasaklanan kullanıcının ID:", karalisteyealinan)
.addField("Karalisteye alınma sebebi:", karalistesebebi)
.setTimestamp()
.setFooter("Karalisteye alan yetkili: " + message.author.tag , message.author.avatarURL)
  
  client.channels.get("635391876547215390").send(karalisteembed); // Karaliste mesajının gönderileceği kanalın ID'sini yazınız.

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['karaliste'],
  permLevel: 0
};

exports.help = {
  name: 'karaliste',
  description: 'Belirtilen kullanıcıyı karalisteye alır.',
  usage: 'karaliste ID'
};