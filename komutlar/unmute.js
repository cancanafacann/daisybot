
const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (client, message, args) => {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
    var rol = message.guild.roles.find(e => e.name === "Susturulmuş");
    var kisi = message.mentions.members.first()

    kisi.removeRole(rol)
    
    await kisi.removeRole(rol)
 message.channel.send(` Belirttiğiniz kişinin susturmasını başarıyla **kaldırdım**.`)

} 

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['sustur-kaldır'],
 permLevel: 4
};

exports.help = {
 name: 'unmute',
 description: '',
 usage: 'unmute'
};