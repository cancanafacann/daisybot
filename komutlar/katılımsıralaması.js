const Discord = require("discord.js")
const db = require("quick.db");
exports.run = (client, message, args) => {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  let arr = message.guild.members.filter(a => !a.user.bot).array().sort((b, a) => b.joinedTimestamp - a.joinedTimestamp)
    let map = arr.map(a => "[" + (arr.indexOf(a) + 1) + "]: " + a.user.tag).join("\n")
    message.channel.send(`\`\`\`js\n${map}\n\`\`\``)
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["katılım"],
    permLevel: 0
}

exports.help = {
    name: 'katılımsıralaması',
    description: 'Üyeleri katıldığı tarihe göre sıralar',
    usage: 'katılımsıralaması'
}