const Discord = require('discord.js');
const db = require("quick.db");
exports.run = (client,message,args) => {
  
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  message.channel.send(`Ben şu an **${client.guilds.size}** sunucuda **${client.users.size}** kullanıcı ile sana hizmet veriyorum!`)   
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sunucular',
  description: 'Botun bulunduğu sunucuları gösterir.',
  usage: 'sunucular'
};
