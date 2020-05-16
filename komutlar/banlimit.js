const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Görünmüyorsun! ')
   if(!args[0] || isNaN(args[0])) return message.channel.send(`Ayarlamam İçin Bir Sayı Yazmalısın`);
  await db.set(`banlimit_${message.guild.id}`, args[0])
  message.reply(`Ban Hassasiyeti **${args[0]}** Rakamına Ayarlanmıştır. Bu Rakamı Kimseyle Paylaşmayın`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["banlimit"],
  permLevel: 0
};

exports.help = {
  name: 'banlimit',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};