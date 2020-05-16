const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {
 let kullanıcı = await db.fetch(`gold_${message.author.id}`);

  if( kullanıcı == undefined){
message.reply("**Maalesef bu komutu kullanamazsın gold üye değilsin :(**")
  }else{
      if( kullanıcı == "gold"){
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
  if (message.author.id !== ayarlar.sahip) return message.channel.send(`Capslock engelleme adlı komutu kullanabilmek için, siteyi ziyaret ediniz.`)
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`:fire: Yeterli yetki, bulunmamakta!`)
  
  let capslock = await db.fetch(`capslock_${message.guild.id}`)
  if (capslock) {
    db.delete(`capslock_${message.guild.id}`)
    message.channel.send(`:fire: Capslock engelleme sistemi, kapatıldı!`)
  }
 
  if (!capslock) {
    db.set(`capslock_${message.guild.id}`, 'acik')
    message.channel.send(`:fire: Capslock engelleme sistemi, aktif!`)
  }
}
      
  }

   };
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['capslockengel'],
  permLevel: 0
};
exports.help = {
  name: 'capslock-engelleme [#kanal] ',
  category: 'Moderasyon komutları!',
  description: 'Capslock kullanımını engeller.',
  usage: 'capslockengel [#kanal]'
};