const Discord = require('discord.js');
	const db = require("quick.db");
exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars

  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
    let member = args[0];
	if (isNaN(member)) return message.reply('Doğru ID girmelisiniz.');

	const sebep = args.splice(1, args.length).join(' ') || `Sebep belirtilmemiş.`;

	message.guild.ban(member, sebep+" | Yetkili: "+message.author.tag).then(() => {
		message.channel.send(`\`${member}\`, Sebep: ${sebep}`);
		    
  })
			.catch((err) => {
				console.log(err);
			});
	

};

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: [],
	permLevel: 2
};

exports.help = {
	name: 'forceban',
	category: '',
	description: 'id ile ban atarsınız',
	usage: 'forceban '
};