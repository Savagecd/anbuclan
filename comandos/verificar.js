
  module.exports = async (client, message, args) => { 
 let rol= message.guild.roles.find(r => r.name === "Comunidad");
  const Discord = require('discord.js');
    if (message.channel.id !== "732720212729790465") return;
const emoji = "✅";

let embed = new Discord.RichEmbed()
.setDescription('**Reacciona con un ✅ para terminar la verificacion**')
.setColor('RANDOM')
.setTimestamp()
  let msg = await message.author.send(embed)
  
msg.react("✅")
  const filtro = (reaction, user) => reaction.emoji.name === "✅" && user.id === message.author.id;
msg.awaitReactions(filtro , {max:1, time:30000}).then(col => {
  
  if (col.first().emoji.name === "✅"){
  message.member.addRole(rol)
  }
  if (col.first().emoji.name === "✅"){
   const embed2 = new Discord.RichEmbed()
    .setDescription('**Bienvenido al servidor de Anbu ! **👏')
   .setImage('https://cdn.discordapp.com/attachments/708579023390769212/716191172007297056/fondo-1.png')
   .setFooter('Necesitas ayuda? Contacta con Savage♡#8344')
   .setTimestamp()
  .setColor('RANDOM')
msg.edit(embed2)}
  
  

}
)}
  