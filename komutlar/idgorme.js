const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  let kişi = message.mentions.members.first() || message.author;
  message.channel.send(`**İstediğiniz Kişinin ID Numarası:** **${kişi.id}**`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Id", "ıd", "ID"],
  permLevel: 1
};

exports.help = {
  name: "id",
  description: "Belirtilen Kişinin ID'sini Atar!",
  usage: "id @kişi"
};