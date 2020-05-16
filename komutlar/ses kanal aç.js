const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  let kanal = args.slice(0).join(' ');
    let guild = message.guild;
    if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.reply('Bunun için gerekli iznin yok'); // Bunu Başkasıda Kullana Bilmesi İçin Kanalları Yönet Yetkisi Verin
    if (kanal.length < 1) return message.reply('Lütfen oluşturacağım kanalın adını yaz.');
  message.delete();
  guild.createChannel(kanal, 'voice');
  message.channel.send("Ses Kanalı Oluşturuldu");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ses-kanal-aç'],
  permLevel: 3
};

exports.help = {
  name: 'ses-kanal-aç',
  description: 'Bir ses kanalı açar',
  usage: 'ses-kanal-aç [açmak istediğiniz kanalın adı]'
};