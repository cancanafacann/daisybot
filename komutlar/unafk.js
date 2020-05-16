const discord = require('discord.js');
const client = new discord.Client();
const db = require("quick.db");
exports.run = (client, message) => {////HİPPERCOS ULEN
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
               var e = new discord.RichEmbed()
         
        .setColor("RANDOM")
        .setAuthor("AFK MODU!")
        .setDescription(`<@${message.author.id}> Başarı İle Afk Modundan Çıkış Yaptın! `)
       message.channel.send(e).then(message => message.delete(50000));

    message.member.setNickname(message.member.displayName.replace('[AFK]', ''))
  

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['afkkapat'],
  permLevel: 0,
    kategori:'kullanıcı'
};

exports.help = {
  name: 'unafk',
  description: 'Afk Tagınızı alır',
  usage: 'unafk'
}; 