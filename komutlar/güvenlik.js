const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {
 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");	
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu komutu kullanabilmek için yönetici yetkisine sahip olmalısın'")

	let chanel = message.mentions.channels.first()
	if(!chanel) return message.reply("Lütfen güvenlik mesajlarının gideceği kanalı etiketle")

		db.set(`güvenlik_${message.guild.id}`, chanel.id)
	 const basari = new Discord.RichEmbed()
	.setDescription(`Güvenlik kanalı başarıyla <${chanel}> olarak ayarlandı`)
	return message.channel.send(basari)
};

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permlevel: 0
};

exports.help = {
	name: "güvenlik",
  description: "Yeni hesap açan kullanıcıları belirlediğiniz kanala atar.",
  usage: "güvenlik #kanal"
}