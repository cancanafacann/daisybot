const Discord = require('discord.js');

let botid = ('689358367608799245') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`İLETİŞİM ADRESLERİ`)
  
    .addField(`<a:ok1:700437338811007026> Linkler`, `[Bot Davet Linki](https://discordapp.com/api/oauth2/authorize?client_id=616519878962315284&permissions=8&redirect_uri=https%3A%2F%2Fdiscordapp.com%2F%2FMTI4NzM0OjFpMmhuZToxMjMxMjM&scope=bot)
    **|** [DirilişSunucum](https://discord.gg/XqKsUxf) **|** [NOT](Seviliyorsunuz.`)
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davetet',
  description: 'bot hakkında bilgi',
  usage: 'davetet'
};