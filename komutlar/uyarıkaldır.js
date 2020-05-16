const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = (client, message, args) => {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.channel.send(client.emojis.get("701105000398585897") + '| Uyarılarını kaldıracağın kişiyi etiketlemelisin!');
  
  if (db.has(`uyarılar_${user.id}`) === false) return message.channel.send(client.emojis.get("622384793191055370") + "| Bu kullanıcının hiç uyarısı bulunmuyor!")
  
  db.delete(`uyarılar_${user.id}`)
  
  const embed = new Discord.RichEmbed()
.setColor(client.ayarlar.renk)
  .setAuthor(`${user.username} - Uyarı Bilgisi`, user.avatarURL)
  .setDescription(`<@${user.id}> adlı kullanıcının başarıyla uyarıları kaldırıldı!`)
  .setFooter(`${client.user.username} - Uyarı Sistemi`, client.user.avatarURL)
  message.channel.send({embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warn-delete", "uyarı-sil"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyarı-kaldır',
  category: 'moderasyon',
  description: 'İstediğiniz kişinin uyarılarını kaldırır.',
  usage: 'uyarı-kaldır <@kullanıcı>'
};