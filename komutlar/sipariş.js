const Discord = require('discord.js');
const db = require("quick.db");
exports.run = async function(client, message, args) {
   let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  const kanalid = "KANALID"
  
  message.delete()
  const embed = new Discord.RichEmbed()
    .setTitle(`BozKurt Sipariş Menüsü`)
    .setDescription(":one: BozKurtBot Altyapı \n\n:two: BozKurt Bot")
    .setFooter(`BozKurt Sipariş Sistemi`)
    .setColor("BLUE")
  message.channel.send({embed: embed}).then(msg => {
    msg.react("1️⃣").then(() => {
      msg.react("2️⃣")
      const filter1 = (reaction, user) => {
        return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id == message.author.id;
      };
      msg.awaitReactions(filter1, {max: 1, time: 60000}).then(collected => {
        const reaction = collected.first();
        if(reaction.emoji.name == "1️⃣") {
          msg.delete()
          const embed = new Discord.RichEmbed()
            .setTitle("Başarılı")
            .setColor("GREEN")
            .setDescription(`**BozKurtBot** siparişiniz başarıyla alınmıştır.`)
            .setFooter("BozKurt Sipariş Sistemi")
          msg.channel.send({embed: embed}).then(mesaj => {
            mesaj.delete(150000)
          })
          const embed2 = new Discord.RichEmbed()
            .setTitle("Sipariş Var")
            .setColor("BLUE")
            .addField("Siparişi Veren Kişi", message.author.tag, true)
            .addField("Sipariş", "BozKurt Bot Altyapı", true)
            .setFooter("BozKurt Sipariş Sistemi")
            .setTimestamp()
          client.guilds.get(message.guild.id).channels.get(kanalid).send(embed2)
        }
        else if(reaction.emoji.name == "2️⃣") {
          msg.delete()
          const embed = new Discord.RichEmbed()
            .setTitle("Başarılı")
            .setColor("GREEN")
            .setDescription(`**BozKurt BOT** siparişiniz başarıyla alınmıştır.`)
            .setFooter("BozKurtSipariş Sistemi")
          msg.channel.send({embed: embed}).then(mesaj => {
            mesaj.delete(150000)
          })
          const embed2 = new Discord.RichEmbed()
            .setTitle("HEY!Sipariş Var")
            .setColor("BLUE")
            .addField("Siparişi Veren Kişi", message.author.tag)
            .addField("Sipariş", "BozKurt", true)
            .setFooter("BozKurt Sipariş Sistemi", true)
            .setTimestamp()
          client.guilds.get(message.guild.id).channels.get(kanalid).send(embed2)
        }
      })
      
    })
  })
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["sipariş-ver", "sipariş"]
};

exports.help = {
  name: 'siparişver',
  description: '',
  usage: 'siparişver'
};