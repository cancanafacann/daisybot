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
      .setTitle('**MOD KOMUTLARI**')
      .addField('`g!afk`','Belirtilen Sebeple Afk Olursunuz.')
      .addField('`g!duyuru`','Duyuru Yaparsınız.')
      .addField('`g!giriş-izni`','Botun Giriş İznini Alırsınız (İd İle).')
      .addField('`g!hgbbkanalayarla#kanal`','Hg BB Kanallarını Ayarlar.')
      .addField('`g!sunucu-sıfırla`','Sunucunuzu Sıfırlar.')
      .addField('`g!modlog #kanal`','`Botun Mod Log Kanalını Ayarlar.')
      .addField('`g!reklam-kick-aç`','Reklam Kick Sistemini Açar.')
      .addField('`g!covid`','Covid Bilgilerini Atar.')
      .addField('`g!kanalbilgi #kanal`','Kanal Hakkında Bilgi Verir.')
      .addField('`g!sunucuinfo`','Sunucu Bilgilerini Verir.')
      .addField('`g!sunucu-yedek`','Sunucu Yedek Bilgilerini Atar.')
      .addField('`g!uyar`','Kişiyi Uyarır.')
      .addField('`g!mute`','Belirtilen Kişiyi Muteler.')
      .addField('`g!uyarı-kaldır`','Belirtilen Kişinin Uyarısını Kaldırır.')
      .addField('`g!küfür-engelle <aç/kapat>`','Küfür Engeli Aktif Eder Veya Deaktif Eder.')
      .addField('`g!capslockengel #kanal`','Belirtilen Kanalda Caps Lock Engelini Aktif Eder.')
      .addField('`g!eh-engel <aç/kapat>`','Sunucuda Everyone Here Engeli Açıp Kapamanızı Sağlar.')
      .addField('`g!snipe`','**Silinen Mesajı Gösterir**')
      .addField('`g!kanal-aç `','Belirtilen Kişiyle Size Özel Oda Açar')
    .setFooter(``, client.user.avatarURL)
    .setTimestamp()
    message.channel.send(juke).catch()

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["moddevam"],
    permLevel: 0
};

exports.help = {
    name: 'moddevam',
      category: 'Yardım',
      description: 'Yardım kategorilerini gösteir.',
      usage: 'moddevam',
};
