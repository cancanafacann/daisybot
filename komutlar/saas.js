const db = require('quick.db')
const Discord = require('discord.js')

var pref = "g!"

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send(`${process.env.basarisiz} Aç yada kapat yazmalısın!! Örnek: ${pref}sa-as aç`)
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('`MESAJLARI_YÖNET` yetkisine sahip olmalısın!')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'acik').then(i => {
      message.channel.send(`${process.env.basarili} Artık biri sa diyince otomatik olarak Aleyküm Selam diyecek.`)
    })
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send(`${process.env.basarili} Artık biri sa diyince cevap vermicek...`)
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sa-as',
  description: 'Botun pingini gösterir.',
  usage: 'sa-as'
};