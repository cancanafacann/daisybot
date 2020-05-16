const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız."); 
    const juke = new Discord.RichEmbed()
    .setColor('0x00000')
    .setAuthor(`X-BOT |  Mod Komutları`, client.user.avatarURL) 
    .setDescription('SAYAC KOMUTLARI')
    .addField('`g!sayaç-ayarla`', '**Sayaç Ayarlamanızı Sağlar**').addField('`g!sayac-bb-msg`', '**Sayac Görüşürüz Mesajını Ayarlarsınız**') 
    .addField('`g!sayac-hg-msg `', '**Sayac Hoşgeldin Mesajını Ayarlarsınız**')
   .setThumbnail('https://cdn.discordapp.com/attachments/702816660419248178/702825383703347200/XBOT_4.png')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["sayaçyardım"],
    permLevel: 0
};

exports.help = {
    name: 'sayaçyardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
      usage: 'sayaçyardım',
};
