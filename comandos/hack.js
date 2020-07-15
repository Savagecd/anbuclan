const Discord = require('discord.js');
module.exports = (client, message, args) => { 
let persona = message.mentions.users.first();
    if (!persona) persona = message.author;
let usuario = message.mentions.members.first() 
  if (!usuario) return message.channel.send(`Debes mencionar a alguien para hackearlo.`);
	   const correos = [
"gmail.com",
"yahoo.com",
"discordapp.com"
       ];
  
   const añadibles = [
"43242",
"938475"
     ]; 


let correosresult = Math.floor((Math.random() * correos.length)); 
  let añadiblesresult = Math.floor((Math.random() * añadibles.length)); 

  
  
  
  const agregablescontraseñas = [
"4TeRDZ",
"tY9Rs",
"xxx666g"
  ]; 

  let agregablescontraseñasresult = Math.floor((Math.random() * agregablescontraseñas.length)); 
  
  const contraseñas = [
    `${usuario.user.username}${agregablescontraseñas[agregablescontraseñasresult]}`,
    `${agregablescontraseñas[agregablescontraseñasresult]}${usuario.user.username}`
  
  ]; 
  
   let contraseñasresult = Math.floor((Math.random() * contraseñas.length)); 



  
  message.channel.send( new Discord.RichEmbed()
                      .setTitle(`Hackeando a ${usuario.user.tag}`)
                      .setImage('https://images-ext-2.discordapp.net/external/k6ev29K0GW8b2LmyEI4AHk3uO6a8SFcSH_lUBa7C78Y/https/cdn.vox-cdn.com/thumbor/oQ4iz3pyOZkivTL8H1iBj0efmR0%3D/0x0%3A2040x1360/1200x800/filters%3Afocal%28857x517%3A1183x843%29/cdn.vox-cdn.com/uploads/chorus_image/image/56805221/acastro_170629_1777_0008.0.jpg?width=840&height=560') 
                       .setColor('#8892fd')
                      ).then(m => {

const embed2 = new Discord.RichEmbed()
.setTitle(`Cuenta de ${usuario.user.tag}`)
.addField("Correo:", usuario.user.username + añadibles[añadiblesresult] + "@" + correos[correosresult])
.addField("Contraseña:", contraseñas[contraseñasresult])
.setColor('#40c452')
setTimeout(()=> {
m.edit(embed2);
  }, 1000)
} 
                             )
}