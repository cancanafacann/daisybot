const Discord = require('discord.js');
const db = require("quick.db");
module.exports.run = async (bot,message,args) => {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  var options = {
        maxAge: 0
    };
    const useruser = "Oluşturan: " + message.author.username;
    const usermade = message.author;
    const userurl = message.author.avatarURL;
    let botembed = new Discord.RichEmbed()
        .setColor("0x00000")
        .setDescription(`:information_source:  ......Oluşturuluyor......`)
        .setTimestamp()
     message.channel.send(botembed).then(message => {
    message.channel.createInvite(options).then(i => {
        botembed.setColor("0x00000")
        botembed.setDescription(`İYİ GÜNLER !Buyrun Davet kodu ${usermade}. \n https://discord.gg/${i.code}`)
        botembed.setFooter(useruser, userurl)
        botembed.setTimestamp()
        message.edit(botembed)
        })
    })
}//EMBED YAPTIM SEN TAMAMLA AYQ//
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invite","davetoluştur","davet-oluştur"],
  permLevel: 0
};

module.exports.help = {
  name: "davet-oluştur",
  description: "Bulunduğunuz sunucunun davet linkini oluşturur.",
  usage: "davet-oluştur"
};