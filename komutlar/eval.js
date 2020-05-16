const Discord = require('discord.js');
const client = new Discord.Client();
const db = require("quick.db");
exports.run = (client, message, args) => {
	 let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  if (message.author.id === "608343719032389634") {
		try {
		  var code = args.join(" ");
		  var evaled = eval(code);

		  if (typeof evaled !== "string")
			evaled = require("util").inspect(evaled);

		  message.channel.send("xl", clean(evaled), {code:true});
		} catch (err) {
		  message.channel.send(`\`HATA\` \`\`\`xl\n${clean(err)}\n\`\`\``);
		}
		function clean(text) {
		  if (typeof(text) === "string")
			return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
		  else
			  return text;
		}
	} else {
		message.reply('Bu komutu kullanmak için gerekli izine sahip değilsin. (BozKurtBot)')
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'eval',
  description: 'Kod denemek için kullanılır.',
  usage: 'eval [kod]'
};
