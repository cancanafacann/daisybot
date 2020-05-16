
const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setFooter('X-BOT  \'BOT İSTATİSTİĞİ', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "<@689100411348582461>")
  .addField("»  **Geliştirici** ","<@366188491199086594>")
  .addField("» **Bellek Kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma Süresi**", seksizaman)
  .addField("» **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("» **Discord.JS Sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS Sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Davet**", " [Davet Et](https://discordapp.com/api/oauth2/authorize?client_id=616519878962315284&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2F%2FMTI4NzM0OjFpMmhuZToxMjMxMjM&scope=bot)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](https://discord.gg/rM6Mx3)", )
  .addField("**» Voteleme sayfası**", " [Botu Oyla](DBL ONAYI BEKLİYOR !!)", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'YEDEK KOMUT2'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};