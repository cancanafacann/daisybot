const Discord = require('discord.js');
const db = require("quick.db");

exports.run = function(client, message) {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
    message.channel.send("Pingim **" + client.ping + "** ms!");
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['p'],
  permLevel: 2,
};

exports.help = {
  name: 'ping', 
  description: 'Botun pingini gösterir',
  usage: 'ping'
};