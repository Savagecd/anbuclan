module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
  if(!args[0])
  {
    let embed = new Discord.RichEmbed()
    .setColor(client.config.color_rojo)
    .setTitle('**__Mis Comandos🔨__**')
    .setThumbnail(message.guild.me.user.displayAvatarURL)
    .setFooter('Escribe .helpall para ayuda detallada | Creador por Swiftx#9999')
    .addField("🔰 | Comandos Admin",'`ban` `banid` `kick` `lock` `mute` `purge` `tempmute` `unban` `unlock` `unmute` `warn` `mover`')
    .setFooter('Escribe .helpall para ayuda detallada | Creador por Swiftx#9999')
    .addField("🔰 | Comandos Admin",'`ban` `banid` `kick` `lock` `mute` `purge` `tempmute` `unban` `unlock` `unmute` `warn` `setanuncio` `mover`')
    .addField("🎉 | Comandos Divertidos",'`8ball` `amor` `gif` `hack` `klk` `rps` `say` `trump` `chiste` `img` `dick`')
    .addField("🌐 | Comandos Utiles",'`avatar` `covid` `help` `helpall` `infoserver` `infouser` `translate` `youtube` `calculadora` `ping` `votar` `poll` `feed` `infobot` `invite`')
    .addField("⚙️ | Comandos Interaccion",'`azar` `contagiar` `hi` `hug` `kill` `kiss` `md` `pat` `quest` `random` `slap` `embed` `cry` `bored` `google` `jump`')
    .addField(':computer: | Enlaces','[Servidor de Discord](https://discord.gg/nyhVdaN)')
    .addField("🌐 | Comandos Utiles",'`avatar` `covid` `help` `helpall` `infoserver` `infouser` `translate` `tryout` `verificar` `youtube` `neo` `calc` `ping` `votar` `poll` `feed` `infobot` `invite`')
    .addField("⚙️ | Comandos Interaccion",'`azar` `contagiar` `hi` `hug` `kill` `kiss` `md` `pat` `quest` `random` `slap` `embed` `cry` `bored` `google`')
    .addField(':computer: | Enlaces','[Servidor de Discord](https://discord.gg/gRGpPCG)')
    .setImage(`https://cdn.discordapp.com/attachments/708579023390769212/716191172007297056/fondo-1.png`)
    message.author.send(embed)
    message.channel.send(new Discord.RichEmbed()
                         .setAuthor('Ayuda enviada al privado') 
                         .setColor('RANDOM')
    )}
}
