const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args,client) => {
let karaliste = db.fetch(`karaliste_${message.author.id}`);
 if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
let bug = args.join(" ").slice(0);
let user = message.author.username;
let guild = message.guild.name;
let guildid = message.guild.id;
let kanal = message.channel.name;
let channel = bot.channels.get("701798283747524608")//bug repot kanal id'i
let embed = new Discord.RichEmbed()

.setTitle("Bug Report")
.setThumbnail("https://cdn.discordapp.com/avatars/616519878962315284/06c66d90611d8c5b7e5db8f67e448ea4.png?size=128")
.addField("<a:ok1:700437338811007026>Bug", bug)
.addField("<a:ok1:700437338811007026>Report Eden", user, true)
.addField("<a:ok1:700437338811007026>Sunucu", guild, true)
.addField("<a:ok1:700437338811007026>Sunucu ID", guildid, true)
.addField("<a:ok1:700437338811007026>Kanal", kanal, true)
.setColor("#0x00000")

message.channel.send("<a:onay2:700672228622073987> **| Bug Report Başarı İle İletildi.**")
channel.send(embed).then(i => i.react("⏳"))

  


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bug-bildir"],
  permLevel: 0  
};

exports.help = {
  name: 'bug-bildir',
  description: 'Çalışıp para kazanırsınız.',
  usage: 'bug-bildir'
}