(function () {

    // Change this to your GitHub username so you don't have to modify so many things.
    var fork = "cziuwatis";

    // Define our function responsible for extending the bot.
    function extend() {
        // If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
          return setTimeout(extend, 1 * 1000);
        }

        // Precaution to make sure it is assigned properly.
        var bot = window.bot;

        // Load custom settings set below
        bot.retrieveSettings();

        //Extend the bot here, either by calling another function or here directly.

        // You can add more spam words to the bot.
        var spamWords = ['spam1', 'spam2', 'spam3', 'spam4'];
        for (var i = 0; i < spamWords.length; i++) {
          window.bot.chatUtilities.spam.push(spamWords[i]);
        }

        // Example code for a bot command:
        bot.commands.baconCommand = {
          command: 'bacon',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Bacon!!!");
            }
          }
        };
        
        bot.commands.tomasCommand = {
          command: 'tomas',  // The command to be called. With the standard command literal this would be: !bacon
          rank: 'user', // Minimum user permission to use the command
          type: 'exact', // Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
          functionality: function (chat, cmd) {
            if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
            if (!bot.commands.executable(this.rank, chat)) return void (0);
            else {
              API.sendChat("/me Tomas karalius ir kunigas duoda jums jo palaima");
            }
          }
        };

        // Load the chat package again to account for any changes
        bot.loadChat();

      }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: 'basicBot ltu-koleee edition',
        language: 'lithuanian',
        chatLink: 'https://rawgit.com/basicBot/source/master/lang/en.json',
        scriptLink: 'https://rawgit.com/basicBot/source/master/basicBot.js',
        roomLock: false, // Requires an extension to re-load the script
        startupCap: 200, // 1-200 (kiek avataru matos kai startuojas)
        startupVolume: 40, // 0-100 (koks volume kai startuojas botas)
        startupEmoji: true, // true or false
        autowoot: true,
        autoskip: false,
        smartSkip: true,
        cmdDeletion: true,
        maximumAfk: 120,
        afkRemoval: false,
        maximumDc: 10,
        bouncerPlus: true,
        blacklistEnabled: false,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: false,
        maximumCycletime: 10,
        voteSkip: false,
        voteSkipLimit: 10,
        historySkip: true,
        timeGuard: true,
        strictTimeGuard: true,
        maximumSongLength: 8,
        autodisable: false,
        commandCooldown: 10,
        usercommandsEnabled: true,
        thorCommand: false,
        thorCooldown: 10,
        skipPosition: 3,
        skipReasons: [
            ['theme', 'ne pagal tema daina wtf zmones '],
            ['op', 'sita daina ant kazkokio OP(overplayed) listo. '],
            ['history', 'Sita daina jau grojo haha '],
            ['mix', 'Mixu grot negalima iseina'],
            ['sound', 'Blogas sound quality brah (arba ner vapse soundo :D :D) '],
            ['nsfw', 'Kazkokia pornografija cia (NSFW)'],
            ['unavailable', 'Daina neprieinama vartotojams ;( ']
        ],
        afkpositionCheck: 15,
        afkRankCheck: 'user',
        motdEnabled: false,
        motdInterval: 5,
        motd: 'Temporary Message of the Day',
        filterChat: false,
        etaRestriction: true,
        welcome: true,
        opLink: null,
        rulesLink: null,
        themeLink: null,
        fbLink: null,
        youtubeLink: null,
        website: null,
        intervalMessages: ["Tomas labas", "Romualdai labas"],
        messageInterval: 15,
        songstats: false,
        commandLiteral: '!',
        blacklists: {
            NSFW: 'https://rawgit.com/basicBot/custom/master/blacklists/NSFWlist.json',
            OP: 'https://rawgit.com/basicBot/custom/master/blacklists/OPlist.json',
            BANNED: 'https://rawgit.com/basicBot/custom/master/blacklists/BANNEDlist.json'
        }
    }));

    // Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/basicBot/source/master/basicBot.js", extend);

}).call(this);
