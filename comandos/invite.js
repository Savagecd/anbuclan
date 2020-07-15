module.exports = async (client, message, args) => { 
  const Discord = require('discord.js');
    client
      .generateInvite([
        "ADMINISTRATOR",
        "BAN_MEMBERS"
      ])
      .then(link => {
       message.channel.send("Link de invitación: " + link);
      });
  }
