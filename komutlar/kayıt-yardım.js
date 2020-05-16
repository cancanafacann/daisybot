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
    .setDescription('KAYIT KOMUTLARI')
    .addField('`g!kayıt-sistemi <aç/kapat>`', '**Kayıt Sistemini Açıp Kapatırsınız!!**').addField('`g!kayıt-rol @rol`', '**Kayıt Rolü Ayarlarsınız!!**')
    .addField('`g!kayıt-kanal #kanal `', '**Kayıt Kanalı Ayarlarsınız!!**').addField('`g!kayıtol`','**Kayıt Olursunuz**')
    
    
    .setThumbnail('https://cdn.discordapp.com/attachments/702816660419248178/702825383703347200/XBOT_4.png')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kayıtyardım"],
    permLevel: 0
};

exports.help = {
    name: 'kayıtyardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
      usage: 'kayıtyardım',
};
