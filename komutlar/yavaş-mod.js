const Discord = require('discord.js');
const db = require("quick.db");
exports.run = async(client, message, args) => {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(`Bu komutu kullanman için \`Kanalları Yönet\` Yetkisine sahip olan gerek!`);

if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {

            message.channel.send(`Örnek kullanım: \`?yavaş-mod 3\``)
            return
          }
if (limit > 100) {
    return message.channel.send("Süre limiti maksimum **100** saniye olabilir.")
}
    message.channel.send(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`)
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
      kategori: "Yetkili",

  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 2,
};

exports.help = {
  name: 'yavaş-mod',
  usage: 'yavaş-mod [1/10]',
};