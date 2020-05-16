const fs = require('fs')
const Discord =  require ('discord.js')//ben embedi yapıyom sen yap burayı oky tm
const db = require("quick.db");
exports.run = (client, message, args) => {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
        if (!message.member.hasPermission('ADMINISTRATOR'))
        return message.channel.send(':carpi: Yetersiz **yetki!**')


  var list = [];
message.guild.channels.forEach(kan => {
let parent;
if(kan.parent) parent = kan.parent.name
else parent = "Yok"
list.push({ 
"tip": `${kan.type}`,"isim": `${kan.name}`,"parentname": `${parent}`
})
})
fs.writeFile("././sunucuyedekle.json", JSON.stringify(list)) 
const embed = new Discord.RichEmbed() 
.setColor('BLACK') 
.setDescription ('** :tada: Sunucu Yedeği Başarıyla Alındı !**')
message.channel.send(embed)
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["yedek-al"],
    permLevel: 0
}

exports.help = {
    name: 'sunucu-yedek-al',
    description: 'Sunucu Yedek almanızı sağlar.',
    usage: "sunucu-yedek-al"
}