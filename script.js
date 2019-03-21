const Discord = require('discord.js');
const client = new Discord.Client();
var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jQuery')(window);
var token = require('./token.json');

const trigger = ';';

try {
    client.login(token.secret);
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
                    msg.channel.send(
                        {
                            "embed": {
                              "color": 3447003,
                              "footer": {
                                "text": "F1-Bot by Ivo van der Bruggen"
                              },
                              "fields": [
                                {
                                  "name": "Next race",
                                  "value": "Next race will take place in: " + data.MRData.RaceTable.Races[0].Circuit.Location.country,
                                  "inline": true
                                },
                                {
                                  "name": "Time",
                                  "value": "The race will take place at: " + data.MRData.RaceTable.Races[0].time,
                                  "inline": true
                                },
                                {
                                  "name": "Round",
                                  "value": "It's gonna be round number " + data.MRData.RaceTable.Races[0].round + " of the F1 World Championship 2019!"
                                }
                              ]
                            }
                        }
                    );
                }
            }
        );
    }
});