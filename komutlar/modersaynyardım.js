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
    .setDescription('**[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=616519878962315284&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2F%2FMTI4NzM0OjFpMmhuZToxMjMxMjM&scope=bot)!TIKLA!**')
    .addField('`g!sayaçyardım`','**Sayaç Komutlarını Gösterir**')
    .addField('`g!otoyardım`', '**Otorol Komutlarını Gösterir !!**').addField('`g!seviyeyardım`', '**Seviye Komutlarını Gösterir !!**')
    .addField('`g!istekyardım`', '**İstek Komutlarını Gösterir !!**')
    .addField('`g!banyardım`','**Ban Komutlarını Gösterir!!**').addField('`g!moddevam`','Mod Komutlarının Devamını Gösterir')
    .addField('`g!özelkomutyardım`','**Özel Komutları Gösterir**').addField('`g!kayıtyardım`','Kayıt Sistemi Komutlarını Gösterir')
    .setThumbnail('https://cdn.discordapp.com/attachments/702816660419248178/702825383703347200/XBOT_4.png')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["modyardım"],
    permLevel: 0
};

exports.help = {
    name: 'modyardım',
     category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
      usage: 'modyardım',
};
