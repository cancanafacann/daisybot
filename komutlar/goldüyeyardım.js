const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
var prefix = ayarlar.prefix;
exports.run = (client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız."); 
    const juke = new Discord.RichEmbed()
    .setColor('0x00000')
    .setAuthor(`X-BOT |  Gold Üye Komutları`, client.user.avatarURL) 
    .setDescription('**[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=616519878962315284&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2F%2FMTI4NzM0OjFpMmhuZToxMjMxMjM&scope=bot)!TIKLA!**')
    .addField('<a:9961_Pin332:702042637171163246>`g!kanal-koruma`','**Kanal Korumayı Aktif Eder**')
    .addField('<a:9961_Pin332:702042637171163246>`g!rol-koruma`', '**Rol Korumayı Aktif Eder!!**')
    .addField('<a:9961_Pin332:702042637171163246>`g!capslockengel`', '**Sunucunuzda Büyük Harf Kullanımını Engeller!!**')
    .addField('<a:9961_Pin332:702042637171163246>`g!davetyardım`', '**Davet Sisteminin Komutlarını Gösterir !!**')
    .addField('<a:9961_Pin332:702042637171163246>Eğer Gold Üye Almak İstiyorsanız 𝒮 ↑ 𝘔𝘶𝘴𝘵𝘢𝘧𝘢#8170 Ya Ulaşmanız Yeterli Olacaktır!','İyi Günler')
    .setThumbnail('https://cdn.discordapp.com/attachments/702816660419248178/702825383703347200/XBOT_4.png')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["goldyardım"],
    permLevel: 0
};

exports.help = {
    name: 'goldyardım',
     category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
      usage: 'goldyardım',
};
