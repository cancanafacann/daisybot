const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db");
exports.run = (client, message, args) => {
     let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  message.channel.send({embed: {
      color: 0xD97634,
      description: "Fixlenmek üzere fırına yollandı , token çalım ihtimaline karşı bir süreliğine devre dışı."
    }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kodtest',
  description: 'Kod denemek için kullanılır.',
  usage: 'kodtest [kod]'
};