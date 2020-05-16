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
    .setDescription('DAVET KOMUTLARI')
    .addField('`g!davet-ekle`', '**Belirtilen Sayıda Davet Ekler**').addField('`g!davet-sil`', '**Belirtilen Sayıda Davet Siler**') 
    .addField('`g!davet-takip #kanal`', '**Davet Takip Kanalını Belirler**').addField('`g!davetler`','**Yapılan Davet Sayısını Gösterir**') 
   .addField('`g!davet-sıralaması`','**Sunucuda Davet Sıralamasını Gösterir!**').addField('`g!rank-ekle`','Belirtilen Rolu Belirtilen Davette Verir')
    .addField('`g!rank-sil`','**Belirtilen Rankı Siler!**').addField('`g!rank-liste`','Ayarlanmış Rankları Gösterir Gösterir')
    .setThumbnail('https://cdn.discordapp.com/attachments/702816660419248178/702825383703347200/XBOT_4.png')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["davetyardım"],
    permLevel: 0
};

exports.help = {
    name: 'davetyardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
      usage: 'davetyardım',
};
