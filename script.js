const Discord = require('discord.js');
const client = new Discord.Client();

const trigger = ';';

try {
    client.login('NDUxODE5NDk2MjYxMjg3OTM3.D3UYDw.hJGv2nRxWau4OH_grFGoFboZwLM');
} catch(err) {
    console.log(err);
}

client.on('ready', () => {
    console.log('Logged in as ' + client.user.tag + '!');
});


client.on('message', msg => {
    if(msg.content.startsWith(trigger)) {
        $.getJSON(
            "http://ergast.com/api/f1/current/next.json",
            (data) => {
                if(msg.content === ';next race') {
                    
                }
            }
        );
    }
});


client.on('message', msg => {
    if(msg.content === 'ping') {
        msg.reply('pong');
    }
});