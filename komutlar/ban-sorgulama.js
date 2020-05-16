const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry: Yeterli yetkiniz yok");
    let kullanici = args[0];
    if (!kullanici) return message.channel.send("Bir kullanıcı ID girmen gerek")
    message.guild.fetchBans()
        .then(bans => {
            if (!bans.has(kullanici)) {
                return message.channel.send(`<a:duyur:700437578750361610> Bu kullanıcı banlanmamış.`)
            }
        })
    message.guild.fetchBan(kullanici).then(({ user, reason }) => {
        message.channel.send(`${user.tag} adlı kullanıcının ban nedeni: **${reason}**`)

    })
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['bansorgulama'],
    permLevel: 0
};

exports.help = {
    name: 'bansorgulama',
    description: 'banlanan birisinin ban sebebini atar.',
    usage: 'bansorgulama'
};