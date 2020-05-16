const Discord = require('discord.js');
const ms = require('parse-ms');

exports.run = async(client, message, args) => {
  let okul = new Date('2020-05-31:9:00')
    let zaman = ms(okul - Date.now())
    message.channel.send(`<a:duyur:700437578750361610> Okulun Açılmasına __**${zaman.days}**__ gün __**${zaman.hours}**__ saat __**${zaman.minutes}**__ dakika kaldı! <a:tac:700677021793124442>`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["okul"],
  permLevel: 0
};

exports.help = {
  name: 'okul',
  description: 'Ananızı öper',
usage: "okul"
};