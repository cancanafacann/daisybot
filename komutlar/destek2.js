const Discord = require('discord.js')
const db = require ('quick.db')

exports.run = async(client, message, args) => {
  let karaliste = db.fetch(`karaliste_${message.author.id}`);
  if (karaliste) return message.channel.send(":no_entry: Kara listede bulunduğunuzdan dolayı bu komutu kullanamazsınız.");
  
const emoji1 = message.client.emojis.get('📞');
const emoji2 = message.client.emojis.get('📞');
const emoji3 = message.client.emojis.get('📞');
const emoji4 = message.client.emojis.get('📞');
const emoji5 = message.client.emojis.get('📞');
const emoji6 = message.client.emojis.get('📞');
const emoji7 = message.client.emojis.get('📞');
      let isEnabled;
      message.reply("Canlı Destek Komutunu Kullandığınız İçin Teşekkürler. Birazdan Yetkili Ekibimiz sizinle ilgilenicektir.");
      let devtrmesaj = args.slice(0).join(' ');
      let channelsdevtr = message.channel;
      let destekKanal = "701798283747524608";
      const embed = new Discord.RichEmbed()
        .addField('Uyarı', `📞 Canlı Destek Çağrısı`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${devtrmesaj}`)
        .setFooter("Canlı Destek")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('📞 Destek çagrısı bağlanmak için `katıl` yazınız. İptal Etmek İçin `kapat` yazınız.')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katıl') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('📞 Çagrı zaman aşımına uğradı.')
      if (reason === 'aborted') {
        message.reply('Çağrı reddedildi.')
        client.channels.get(destekKanal).send('📞 Başarıyla çağrı reddedildi.')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('📞 Destek çagrısı alındı!')
        client.channels.get(destekKanal).send('📞 Destek çağrısını kapatmak için `kapat` yazınız.')
        channelsdevtr.send(`${message.author}`)
        channelsdevtr.send('Çağrınız bir destek yetkili tarafından alındı!')
        channelsdevtr.send('En Yakın Zamanda Size Yardımcı Olacagız.')
        channelsdevtr.send('Destek çagrısı kapatmak için `kapat` yazınız.')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('📞 Çağrı Kapatıldı.')
              if (message.channel.id === channelsdevtr.id) client.channels.get(destekKanal).send('📞 Çağrı karşı taraftan kapatıldı.')
              if (message.channel.id === destekKanal) channelsdevtr.send('📞 Çağrı karşı taraftan kapatıldı.')

              return isEnabled = false
            }
            if (message.channel.id === channelsdevtr.id) client.channels.get(destekKanal).send(`📞 **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) channelsdevtr.send(`📞 **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}

  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['cdestek','canlıdestek','cdstk'],
  permLevel: 0
};

exports.help = {
  name: 'destek',
  description: 'Canlı Destek ile kolayca yardım alırsınız.',
  usage: 'destek'
};