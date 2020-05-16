const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {
     let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok');
    if (kanal.length < 1) return message.reply('Lütfen Oluşturacağım Kanalın Adını Yaz.!!');
  message.delete();
  guild.createChannel(kanal, 'text');
  message.channel.send("**Yazı Kanalı Oluşturuldu!**");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-kanal-aç'],
  permLevel: 3
};

exports.help = {
  name: 'yazı-kanal-aç',
  description: 'Bir ses kanalı açar',
  usage: 'yazı-kanal-aç [açmak istediğiniz kanalın adı]'
};