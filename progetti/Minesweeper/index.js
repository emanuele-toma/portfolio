const Discord = require("discord.js");
const bot = new Discord.Client();
const prefix = "!";
var owners = {};

const settings = {
  size: 10,
  probability: 30,
  bombCount: false,
  bombCountTxt: "**Bomb count**: {0}",
  bomb: ":bomb:",
  one: ":one:",
  two: ":two:",
  three: ":three:",
  four: ":four:",
  five: ":five:",
  six: ":six:",
  seven: ":seven:",
  eight: ":eight:",
  nine: ":nine:",
  zero: ":zero:",
  returnObject: false,
  spoiler: true
};

bot.on("ready", () => {
  console.log("=====================================");
  console.log("=               Pronto              =");
  console.log("=====================================");
  console.log(
    `Invito: https://discord.com/oauth2/authorize?client_id=${bot.user.id}&scope=bot&permissions=8`
  );
});

bot.on("messageReactionAdd", async (reaction, user) => {
  if (user.id == bot.user.id) return;
  if (reaction.partial) {
    try {
      await reaction.fetch();
    } catch (error) {
      console.error("Something went wrong when fetching the message: ", error);
      return;
    }
  }

  if (reaction.message.author.id == bot.user.id) {
    if (reaction.emoji.name == "🔄" && reaction.message.channel.type != "dm") {
      if (owners[reaction.message.guild.id][reaction.message.id] == user.id) {
        reaction.message.edit(buildEmbed(user));
      } else if(msg.channel.type == "dm"){
      	reaction.message.edit(buildEmbed(user));
      }
    }

    if (reaction.emoji.name == "🚫") {
      if (reaction.message.channel.type == "dm" || owners[reaction.message.guild.id][reaction.message.id] == user.id || reaction.message.guild.member(user).hasPermission("MANAGE_MESSAGES")) {
        reaction.message.delete();
        if(reaction.message.channel.type != "dm") delete owners[reaction.message.guild.id][reaction.message.id];
      }
    }

    let userReactions = reaction.message.reactions.cache.filter(reaction =>
      reaction.users.cache.has(user.id)
    );
    try {
      	for (let reaction of userReactions.values()) {
      	  await reaction.users.remove(user.id);
      	}
    } catch (error) {
      console.error("Failed to remove reactions.");
    }
  }
});

bot.on("message", msg => {
  /*###################################
              Minesweeper
  ###################################*/
  if (msg.content.startsWith(prefix + "ms") || msg.content.startsWith(prefix + "minesweeper")) {
    msg.channel.send(buildEmbed(msg.author)).then(message => {
      if (msg.channel.type != "dm") {
        if(typeof owners[msg.guild.id] == "object"){
          owners[msg.guild.id][message.id] = msg.author.id;
        } else {
          owners[msg.guild.id] = {}
          owners[msg.guild.id][message.id] = msg.author.id;
        }
      }
      message.react("🔄").then(message.react("🚫"));
    });
    if (msg.channel.type != "dm") msg.delete({timeout: 300});
  }
  
  /*###################################
                Delete
  ###################################*/
  
  if (msg.content.startsWith(prefix + "del")) {
    if(msg.channel.type != "dm" && !msg.member.hasPermission("MANAGE_MESSAGES")){
      msg.delete({timeout: 300})
      msg.channel.send(":no_entry: Insufficient permissions").then(message => message.delete({timeout: 3000}))
      return
    }
    msg.channel.messages.fetch().then(messages => {
      let count = messages.filter(m => m.author.id === bot.user.id).size;
      count = count > 1 ? "**" + count + "** messages" : "**" + count + "** message";
      let botMessages = messages.filter(m => m.author.id === bot.user.id);
      for (let value of botMessages.values()) {
        value.delete();
      }
      msg.channel.send(`:recycle: Deleted ${count}!`).then(message => {
        message.delete({timeout: 3000})
      })
      if(msg.channel.type!="dm") owners[msg.guild.id] = {};
    })
      .catch(console.error);
  }
  
});

function buildEmbed(user) {
  var game = newGame(settings);
  var msgEmbed = new Discord.MessageEmbed()
    .setColor(Math.floor(Math.random() * 16777215).toString(16))
    .setTitle("Bombs: **" + game.bmbAmount + "**")
    .setDescription(game.table)
    .setFooter("@" + user.username, user.avatarURL())
  return msgEmbed;
}

function newGame(settings) {
  if (!settings) {
    return "Error: Settings missing";
  }
  let result = "";
  let table = {};

  for (let i = 1; i < settings.size * settings.size + 1; i++) {
    if (Math.floor(Math.random() * 99 + 0) < settings.probability) {
      result += settings.bomb + " ";
    } else {
      result += "- ";
    }
    if (i % settings.size == 0) result += "\n";
  }
  result = result.split("\n");
  result.splice(-1, 1);
  for (let e in result) {
    table["_" + e] = result[e].split(" ");
    table["_" + e].splice(-1, 1);
  }

  for (let i = 0; i < result.length; i++) {
    for (let b = 0; b < table["_" + i].length; b++) {
      var value = 0;
      if (table["_" + i][b] == settings.bomb) {
        value = settings.bomb;
      } else {
        try {
          if (table["_" + sum(i, -1)][b - 1] == settings.bomb) value++;
          if (table["_" + sum(i, -1)][b] == settings.bomb) value++;
          if (table["_" + sum(i, -1)][b + 1] == settings.bomb) value++;
        } catch (h) {}

        try {
          if (table["_" + sum(i, 1)][b - 1] == settings.bomb) value++;
          if (table["_" + sum(i, 1)][b] == settings.bomb) value++;
          if (table["_" + sum(i, 1)][b + 1] == settings.bomb) value++;
        } catch (h) {}

        if (table["_" + i][b - 1] == settings.bomb) value++;
        if (table["_" + i][b + 1] == settings.bomb) value++;
      }
      if (value == settings.bomb) {
        table["_" + i][b] = value;
      } else {
        value = value.toString().replace("1", settings.one);
        value = value.toString().replace("2", settings.two);
        value = value.toString().replace("3", settings.three);
        value = value.toString().replace("4", settings.four);
        value = value.toString().replace("5", settings.five);
        value = value.toString().replace("6", settings.six);
        value = value.toString().replace("7", settings.seven);
        value = value.toString().replace("8", settings.eight);
        value = value.toString().replace("9", settings.nine);
        value = value.toString().replace("0", settings.zero);
        table["_" + i][b] = value;
      }
    }
  }

  if (settings.returnObject == false) {
    let string = "";
    if (settings.bombCount == true) {
      string += settings.bombCountTxt + "\n";
    }

    for (let e in table) {
      for (let i = 0; i < table[e].length; i++) {
        if (settings.spoiler == true) {
          string += "||" + table[e][i] + "||";
        } else {
          string += table[e][i];
        }
      }
      string += "\n";
    }
    let amount = (string.match(new RegExp(settings.bomb, "g")) || []).length;
    return { table: string, bmbAmount: amount };
  } else {
    return table;
  }
}

function sum(a, b) {
  return +a + +b;
}

bot.login("NzQ0ODY4MDUwNjQxMjIzNzcx.Xzpebg.DPiKxaHUxecxwZxRdPTKI63JOfI");
