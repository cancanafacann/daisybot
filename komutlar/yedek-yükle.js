const Discord = require ('discord.js')
const fs = require('fs')
var a = require('../sunucuyedekle.json')

exports.run = (client, message, args) => {

        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(':carpi: Yetersiz **yetki!**')
  
message.guild.channels.forEach(a =>{
a.delete()
})

a.some(b => {

message.guild.createChannel(b.isim, b.tip).then(kan => {
setTimeout(c => {
if(b.parentname === "Yok") return;
else {
var p = message.guild.channels.find(a => a.name === b.parentname)
kan.setParent(p)
}
}, 10000)
  
})
})};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yedek-yükle", "yedek-load"],
    permLevel: 0
}

exports.help = {
    name: 'sunucu-yedek-yükle',
    description: 'Sunucunun yedeğini yükler',
    usage: "sunucu-yedek-yükle"
}