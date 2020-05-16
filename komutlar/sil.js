const Discord = require('discord.js');
const db = require("quick.db");
exports.run = function(client, message, args) {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if (!message.guild) {
    return message.author.send('`temizle` komutu sadece sunucularda kullanılabilir.');
  }
  let mesajsayisi = parseInt(args.join(' '));
  if (mesajsayisi.length < 1) return message.channel.send('Kaç mesaj silmem gerektiğini belirtmedin.')
  if (mesajsayisi > 100) return message.channel.send('100 adetden fazla mesaj silemem!');
  message.channel.bulkDelete(mesajsayisi + 1);
  message.channel.send(mesajsayisi +' adet mesaj sildim!:white_check_mark:')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktar mesajı siler.',
  usage: 'sil <silinecek mesaj sayısı>'
};
