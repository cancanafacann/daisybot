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
    .setDescription('OTOROL KOMUTLARI')
    .addField('`g!otorol @rol`', '**Otorol Ayarlarsınız !!**').addField('`g!otorolsıfırla`', '**Otorol Sıfırlar Yani Kapatır!!**')
    .addField('`g!otomesajkapat `', '**Otorol Mesajlarını Kapatır !!**')
    
    
    .setThumbnail('https://cdn.discordapp.com/attachments/702816660419248178/702825383703347200/XBOT_4.png')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["otoyardım"],
    permLevel: 0
};

exports.help = {
    name: 'otoyardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
      usage: 'otoyardım',
};
