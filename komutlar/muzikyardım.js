const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız."); 
    const juke = new Discord.RichEmbed()
    .setColor('0x00000')
    .setAuthor(`X-BOT | Bot Komutları`, client.user.avatarURL) 
      .setDescription('**[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=616519878962315284&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2F%2FMTI4NzM0OjFpMmhuZToxMjMxMjM&scope=bot)!TIKLA!**')
 .setThumbnail(client.user.avatarURL)
      .setTitle('**MÜZİK KOMUTLARI**')
      .addField('`g!çal`','İstediğiniz Müziği Çalar.')
      .addField('`g!durdur`','Çalan Müziği Durdurur..')
      .addField('`g!ses`','Müziğin Sesini Ayarlar.')
      .addField('`g!çalan`','Çalan Şarkıyı Gösterir.')
      .addField('`g!kuyruk`','Sıradaki Şarkıları Gösterir.')
      .addField('`g!geç`','`Sıradaki` Şarkıya Geçer.')
      .addField('`g!duraklat`','Şarkıyı Duraklatır.')
      .addField('`g!devam`','Şarkıyı Devam Ettirir.')
      
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'müzikyardım',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
      usage: 'müzikyardım',
};
