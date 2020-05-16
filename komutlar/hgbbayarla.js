const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, params, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Hoşgeldin kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
  let hgkanali = message.mentions.channels.first();
  if (!hgkanali) return message.channel.send(':no_entry: Hoşgeldin kanalı ayarlamak için bir kanal etiketlemeniz gerekli. `!hgbbkanalayarla #kanal`')
    db.set(`gcc_${message.guild.id}`, message.mentions.channels.first().id)
  let i = await db.fetch(`gcc_${message.guild.id}`)
  message.channel.send(`${process.env.basarili} Hoşgeldin kanalı, <#${i}> olarak ayarlandı.`)    
        
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'hgbbkanalayarla',
 description: 'Sunucunuza giren çıkan kişişileri gösterir',
 usage: 'hgbbkanalayarla'
};