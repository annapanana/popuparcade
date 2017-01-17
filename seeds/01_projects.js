'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          name: 'Fridge Face',
          brief: 'Fridge Face is a friendly inventory management system for communal refrigerators.',
          description: 'Fridge Face is a friendly inventory management system for communal refrigerators. The app enables community members to view all fridge contents, filter food by categories, check expiration dates and receive announcements. Register to get started with Fridge Face for your community refrigerator, today!',
          type: 'web',
          role: 'Designer / Developer',
          date: 'December, 2016',
          live_link: 'https://fridge-face.herokuapp.com',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/FridgeFace_Thumb.png',
          is_featured: true,
          banner_feature: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_01.jpg'
        }),
        knex('projects').insert({
          id: 2,
          name: 'GFTI',
          brief: 'GFTI is a web-based postcard making tool.',
          description: 'Greetings from the Internet (gfti) is a web-based postcard making tool that allows users to search for an image, modify a greetings graphic and include a custom message. The aesthetic of gfti is an homage to Teich greetings postcards. Gfti uses the Flickr API to supply users with images and the Lob API to send postcards.',
          type: 'web',
          role: 'Designer / Developer',
          date: 'November, 2016',
          is_featured: true,
          live_link: 'http://greetingsfromtheinternet.surge.sh/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Vonk_Thumb.png',
          banner_feature: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_04.png'
        }),
        knex('projects').insert({
          id: 3,
          name: 'The Greenhouse',
          brief: 'The Greenhouse is a board game about greenhouse gas and our atmosphere that I designed and produced in conjunction with the National Center of Atmospheric Research.',
          description: 'I designed and produced a board game about greenhouse gas in conjunction with the National Center of Atmospheric Research. The game seeks to teach 3rd graders - 5th graders who visit the NCAR Mesa Lab about the influence that greenhouse gases have on our atmosphere. I worked directly with experts and researchers to ensure that the educational outcomes of the boardgame were accurate and accessible for the target audience. I playtested the board game with local students in a classroom setting to ensure the game would fit the needs of the instructors at the Mesa Lab. The game underwent multiple revisions to simplify its mechanics due to the constraints of the play-setting.',
          type: 'game',
          role: 'Designer / Project Manager',
          date: 'October, 2016',
          live_link: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/TheGreenhouse.png',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png'
        }),
        knex('projects').insert({
          id: 4,
          name: 'Vonk',
          brief: 'Somewhere between cardboard boxes and Minecraft there is an unexplored space for play. VONK is real play for the mobile world.',
          description: 'Somewhere between cardboard boxes and Minecraft there is an unexplored space for play. VONK is real play for the mobile world. VONK is an offline game delivered via a mobile platform such that families and friends who live in different places can connect and collaborate asynchronously or in real-time. VONK allows players to choose a challenge, create something fun, capture the results, share results with family and friends and collectively celebrate this new form of connected-play. The digital component of VONK is also a publishing platform for players to share playful prompts within a controlled social network.',
          type: 'game',
          role: 'Design Lead',
          date: 'TBD',
          live_link: 'http://www.playvonk.com/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Vonk_Thumb.png'
        }),
        knex('projects').insert({
          id: 5,
          name: 'The Lionguard',
          brief: 'ROAR! Inspired by the all-new Disney Junior series, join Kion and the Lion Guard on an action packed adventure to protect the Pride Lands!',
          description: 'ROAR! Inspired by the all-new Disney Junior series, join Kion and the Lion Guard on an action packed adventure to protect the Pride Lands! • Race Kion through 5 challenging and beautiful locations: the Grasslands, Big Springs, the Canyons, Hakuna Matata Falls, and the Outlands. • Call on individual guard members, each with different strengths, to help Kion overcome hazardous obstacles. • Collect tokens, unleash Kion’s powerful “Roar of the Elders”, and complete lifesaving missions before the sun sets!',
          type: 'game',
          role: 'User Research / Design Consulting',
          date: 'February, 2016',
          live_link: 'https://itunes.apple.com/us/app/the-lion-guard/id1030522460?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/LionGuard_Thumb.png'
        }),
        knex('projects').insert({
          id: 6,
          name: 'Read with Doc McStuffins: Word Building',
          brief: 'Learn all about word building with the second in the series of Read with Doc McStuffins apps.',
          description: 'Featured in the App Store under “Best New Apps” /br #5 Top Paid App in Education /b Learn all about word building with the second in the series of Read with Doc McStuffins apps! With hundreds of little lessons to learn, you can join Doc and her friends as you explore 5 magical and engaging worlds of word building skills: /br 1. Practice reading simple words and short vowels on a royal train ride /br 2. Help Doc find the most common sight words in the night sky! /br 3. Splash alongside Melinda as she helps you read words with long vowels! /br4. Explore putting together long and short vowel words with Chilly in the snow! /br 5. Create sentences with adjectives, verbs, nouns to build your own stories!',
          type: 'game',
          role: 'Game Design / Prototype Developer / Early Concepting',
          date: 'January, 2016',
          live_link: 'https://itunes.apple.com/us/app/read-doc-mcstuffins-word-building/id1053294286?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Doc_LTR2_Thumb.png'
        }),
        knex('projects').insert({
          id: 7,
          name: 'Read with Doc McStuffins: Letters and Sounds',
          brief: 'Play along with Doc and friends as you explore 5 fun-filled worlds of letters and sounds to practice early reading skills.',
          description: 'Learning all about letters and sounds has never been more fun! Now, with hundreds of little lessons to learn, you can read and play along with Doc and friends as you explore 5 fun-filled worlds of letters and sounds to practice these early reading skills: /br 1. Trace and match upper- and lowercase letters with Bubble Monkey! /br 2. Name and recognize letters and letter sounds with Bronty and his magical blocks! /br 3. Search and find as you listen and match rhymes! /br 4. Create your own syllable symphony with Millie and Doc! /br 5. Help Stuffy hear beginning, middle, and ending sounds in words!',
          type: 'game',
          role: 'Game Design / Prototype Developer / Early Concepting',
          date: 'January, 2016',
          live_link: 'https://itunes.apple.com/us/app/read-doc-mcstuffins-letters/id1053294297?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Doc_LTR1_Thumb.png'
        }),
        knex('projects').insert({
          id: 8,
          name: 'Frozen Early Science',
          brief: 'Join Elsa, Anna, Olaf, and your favorite friends from Frozen as you run the new Nature Park in Arendelle.',
          description: 'Join Elsa, Anna, Olaf, and your favourite friends from Frozen as you run the new Nature Park in Arendelle. Whether you’re experimenting with different foods, ingredients and tools to help set the menu at the Park Café or hand feeding, grooming, training and even practising first aid skills with baby reindeer, you’ll discover countless ways to get closer to nature and early science concepts! /br Reindeer Care: /br Use observation skills to diagnose and tend to 15+ reindeer ailments. Help Anna and Kristoff keep the baby reindeer healthy and happy! /br Cooking Creations: /br Experiment with 35+ ingredients and lots of preparation tools to create a delicious, healthy menu for the Nature Park. Be inspired by Oaken’s recipes, or use your creativity to cook original dishes that will impress Queen Elsa!',
          type: 'game',
          role: 'Game Design / Prototype Developer / Early Concepting',
          date: 'April, 2015',
          live_link: 'https://itunes.apple.com/us/app/frozen-early-science-cooking/id976351888?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Frozen_Thumb.png'
        }),
        knex('projects').insert({
          id: 9,
          name: "Micky's Magical Arts World",
          brief: "Join Elsa, Anna, Olaf, and your favorite friends from Frozen as you run the new Nature Park in Arendelle.",
          description: "You can create an entire world of your own—from trees to cars to the rainbows—that comes to life right on Mickey’s Main Street hub. Then, make music with Mickey, design buildings with Minnie, and craft the craziest toys with Goofy—the possibilities for fun and imagination are endless! /n Mickey's Sketch Artist: Experiment with color, line, shape, and visual texture as you hone fine motor skills and practice drawing. /n Donald's Costume Play: Explore improvisation, storytelling, costume design, and character development through role-play. /n Pluto's Crafty Creator: Explore how materials work together while playing with virtual art materials, tools, and processes. /n Mickey's Music Maker: Play with the musical concepts of tempo and pitch. /n Minnie's Art-chitect: Examine symmetry, balance, proportion, harmony, texture, and hue through designing an original building. /n Developed for Disney’s Imagicademy, a division of Disney Publishing Worldwide.",
          type: 'game',
          role: 'Game Design / Early Concepting',
          date: 'February, 2015',
          live_link: 'https://itunes.apple.com/us/app/mickeys-magical-arts-world/id932511798?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Cartooniverse_Thumb.png'
        }),
        knex('projects').insert({
          id: 10,
          name: "Mickey's Magical Math World",
          brief: "Mickey’s Magical Math World explores 5 fun different games that help children practice early math skills.",
          description: "Join Mickey and friends on an amazing space adventure where you can help Mickey build rockets while working with shapes, practice counting skills with Minnie, explore the number line with Donald, problem solve with Daisy, and sort by color and shape with Goofy! /n Mickey’s Magical Math World explores 5 fun different fun-filled worlds that help children practice these early math skills: /n · Recognize the defining attributes of a variety of shapes. /n · Count forward to 10, and count backward from 10. /n · Explore early addition and subtraction. /n · Use reasoning and logic to solve problems. n/ · Sort objects by color and shape.",
          type: 'game',
          role: 'Game Design',
          date: 'November, 2014',
          live_link: 'https://itunes.apple.com/us/app/mickeys-magical-math-world/id925134465?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Space_Math_Thumb.png'
        }),
        knex('projects').insert({
          id: 11,
          name: 'Gloobal Dooination',
          brief: 'In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them.',
          description: 'In Gloobal Doomination, you control a population of Gloobs—friendly but ultimately doomed creatures that have no idea what kind of horrible disaster awaits them. Thankfully they can mutate and every so often new traits can help them survive a near constant apocalypse. Your goal is to create a stable, biologically diverse population that is resilient to the pressures of tsunami, volcanoes, asteroids, fungal infection and the highly deadly smooth jazz. Gloobal Doomination was created as part of the White House Education Game Jam hosted by the White House Office of Science and Technology Policy on September 6-8, 2014.',
          type: 'game',
          role: 'Designer / Developer',
          date: 'September, 2014',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Gloobs_Thumb.png'
        }),
        knex('projects').insert({
          id: 12,
          name: 'Stone Soup',
          brief: 'Stone Soup is a classic folktale that has been adapted to my unique StoryPops format. Each page of the story includes a novel cross-device interaction that lets readers enact narrative events or role-play with characters.',
          description: 'StoryPops empower young readers with a smartphone as a dynamic prop to PLAY with their favorite stories. Stone Soup is a classic folktale that has been adapted to my unique StoryPops format. Each page of the story includes a novel cross-device interaction that lets readers enact narrative events or role-play with characters. /n Stone Soup was my graduate thesis project and the culmination of my degree in Interactive Media from USC’s School of Cinematic Arts. A small team joined me to develop the project over the course of 6 months. The format of play includes an iPad and a smartphone. This cross-device, networked experiences bring an original adaptation of Stone Soup to life. To better understand this new format of narrative play—a StoryPop—check out a few of the demo videos below.',
          type: 'game',
          role: 'Designer / Developer / Project Lead',
          date: 'June, 2014',
          live_link: '',
          is_featured: true,
          banner_feature: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_03.jpg',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/StoneSoup_Thumb.png'
        }),
        knex('projects').insert({
          id: 13,
          name: 'Eat a Game',
          brief: 'Eat a Game was a series of edible “big game” projects for various urban festivals.',
          description: 'Eat a Game was a series of edible “big game” projects: /n For the 2013 IndieCade festival, I designed and ran Cookie Bingo: /n Cookie Bingo is a delicious game by Anna and John. Grab a cookie, select a challenge category and GO! A Cookie Bingo cookie includes four quadrants, each of which is specific to a challenge category. When you complete a challenge for one of your cookie quadrant categories, eat that quadrant of your cookie. The first person to complete a challenge for all four of their cookie quadrants wins. Cookies Bingo cookies are custom made and provided by Isabella’s Cookie Company: www.isabellascookies.com /n For the 2013 Come Out and Play Festival, I designed and ran Eat the Flag: /n Eat the Flag is just like capture the flag but you only get 3 lives… of chocolate! Each player is given 3 bites of chocolate. Two cupcake flags are set up on either ends of the playing field and the game objective is to “eat the flag.” When a players are tagged in pursuit of the flag, they must eat a life and return to their respective sides of the playing field. When a player from one team takes a bite of the opposing team’s cupcake, the game is over. Sponsored by Dandelion Chocolate.',
          type: 'game',
          role: 'Designer / Game Runner',
          date: 'September, 2013',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/EatAGame_Thumb.png'
        }),
        knex('projects').insert({
          id: 14,
          name: 'Graduate Strike Force',
          brief: 'Graduate Strike Force is an strategic action game for high-schoolers about the basics of college financial aid.',
          description: 'Graduate Strike Force is an strategic action game for computers and mobile devices. It’s about understanding the basics of financial aid and how to choose the best college for you, and it involves fighting giant monsters. /n The game was developed in Unity3D for distribution on the web and on the AppStore. The game was created within the Game Innovation Lab at USC.',
          type: 'game',
          role: 'Game Design / Development',
          date: 'June, 2013',
          live_link: 'http://www.gameinnovationlab.com/projects/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/GSF_Thumb.png'
        }),
        knex('projects').insert({
          id: 15,
          name: 'Apathy Simulation',
          brief: 'The Apathy Simulation enables the player to re-live a detaches experience of viewing the 2003 “Shock and Awe” invasion of Iraq.',
          description: 'The Apathy Simulation enables the player to re-live a detaches experience of viewing the 2003 “Shock and Awe” invasion of Iraq. Borrowing from the clumsy controls of games like Surgeon Simulator, the player has but one possible futile action to perform: Interact with a hamburger. The primary action of the scene takes place on a TV screen and the player is neither encouraged nor able to interact with the screen. The juxtaposition of a clumsy, albeit humorous, interaction and a gravely serious moment in global history makes The Apathy Simulation a truly unsettling experience.',
          type: 'sandbox',
          role: 'Designer / Developer',
          date: 'Spring, 2013',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Apathy_Thumb.png'
        }),
        knex('projects').insert({
          id: 16,
          name: 'Futurebound',
          brief: 'Futurebound is an iOS (iPod/iPhone) and downloadable PC game that encourages middle school students to explore the relationships between ambitions, passion, and career aspirations as they relate to a college degree.',
          description: 'Futurebound is an iOS (iPod/iPhone) and downloadable PC game that encourages middle school students to explore the relationships between ambitions, passion, and career aspirations as they relate to a college degree. Throughout the game, players battle doubts with their ambitions, which are guised as super powers. Players must collect passion around the world to fuel their ambitions and help NPCs along the way. \n Futurebound will be released in the spring of 2013. The game was developed in Unity3D for distribution on the web and on the AppStore. The game was created within theGame Innovation Lab at USC.',
          type: 'game',
          role: 'Designer / Developer',
          date: 'December, 2012',
          live_link: 'http://www.gameinnovationlab.com/projects/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Futurebound_Thumb.png'
        }),
        knex('projects').insert({
          id: 17,
          name: 'Hedelby: Hear your Fear',
          brief: 'A binaural soundscape and series of visual mini-games that challenge players to navigate a narrative sound environment and enter the minds of various characters.',
          description: 'A binaural soundscape and series of visual mini-games that challenge players to navigate a narrative sound environment and enter the minds of various characters. \n Gameplay is comprised of various story interlueds, mixed in with audio-directional challenges and visual minigames. Hedelby was developed as a research project within the Interactive Media Division of USC’s School of Cinematic Arts. The game was developed in conjunction with USC’s Viterbi School of Engineering. \n Setting: Hedelby prison is small, by modern standards. Housing criminals that have failed to respond to conventiona rehabilitative therapy, it serves as a last ditch placement for society’s most dangerous defects. Aside from a brief yet violent riot that took place two years ago, Hedelby has a flawless record, with strict protocol and disciplinary action overseen personally by The Warden.',
          type: 'sandbox',
          role: 'Project Director / Developer',
          date: 'November, 2012',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Hedelby_Thumb.png'
        }),
        knex('projects').insert({
          id: 18,
          name: 'Playcenta',
          brief: 'It’s part sound design and part whack-a-mole gameplay within a soft tent that glows and responds to touch input.',
          description: 'It’s part sound design and part whack-a-mole gameplay within a soft tent that glows and responds to touch input. The Playcenta is a performative audio/visual/tactile exprerience.',
          type: 'sandbox',
          role: 'Designer / Seamstress / Programmer',
          date: 'May, 2012',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Playcenta_Thumb.png'
        }),
        knex('projects').insert({
          id: 19,
          name: 'Tormented Soles',
          brief: 'What is the scariest part of bowing?',
          description: 'What is the scariest part of bowing? \n … \n The shoes of course! \n As part of the 2012 What Would MolyDeux Game Jam, Andrea Benavides and I collaborated on a pair of screaming shoes.  Our intention was to modify the game of bowling…. by giving it a horrific spin. \n The game jam prompted participants to take one of Peter Molydeux’s eccentric tweets as inspiration for an original game.  The specific tweet that we selected went something like this: \n “bit.ly/zMqfua Survival Horror combined with Bowling (The tweet was missing for this old classic)” – @PeterMolydeux \n Because everyone knows that the shoes are the most horrific part of bowling, we were inspired to make the bowler aware of his or her shoes during gameplay.',
          type: 'sandbox',
          role: 'Designer / Developer / Engineer',
          date: 'April, 2012',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/TormentedSoles_Thumb.png'
        }),
        knex('projects').insert({
          id: 20,
          name: 'Fishtank',
          brief: 'Have you ever wondered what it would be like to be a crustacean?',
          description: 'Have you ever wondered what it would be like to be a crustacean? I did, so I made Fishtank: a crustacean simulator. The controls are slow, which I imagine reflect reality is some way. \n The controls for fishtank are simple: WASD to move, mouse to look. If you get a chance to download the build and play, you’ll notice how much effort it takes to look around. This was a deliberate detail, which contributes to the feeling of living in a fishtank. \n Download the Unity build here: download',
          type: 'sandbox',
          role: 'Designer / Developer',
          date: 'January, 2012',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Fishtank_Thumb.png'
        }),
        knex('projects').insert({
          id: 21,
          name: 'Nightmare Dollhouse',
          brief: 'Players enter the nightmare of a child and must battle her fears in order escape a strange dollhouse universe.',
          description: 'Players enter the nightmare of a child and must battle her fears in order escape a strange dollhouse universe. \n Escape from Nightmare Dollhouse was designed and developed by four USC graduat students as part of an intro to game design class. The gameplay is simple: take on the perspective of a little girl and avoid the malicious forces of her nightmare. The player is presented with various methods for overcoming nightmare challenges. Depending on the players actions, the pictures on the walls of the dollhouse change in a recombinate manner. \n The game uses the Microsoft Kinect to put the player in the perspective of the child player character. Navigation is controlled by a Nintendo Wiimote.',
          type: 'game',
          role: 'Designer / Developer',
          date: 'January, 2011',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/PlaytimeNightmare_Thumb.png'
        }),
        knex('projects').insert({
          id: 22,
          name: 'Reality Ends Here',
          brief: 'A creative prompting system and collaborative card game, intended to “reboot” the freshman experience at USC’s School of Cinematic Arts.',
          description: 'A creative prompting system and collaborative card game, intended to “reboot” the freshman experience at USC’s School of Cinematic Arts. \n About the game: Players are lured into the game via a series of mysterious communications from the “Reality Committee,” finding their way to a secret office, where they swear an oath of DIY media-making and are given a set of game cards that can be used to generate creative prompts. Players combine their card prompts into multifaceted “deals” that challenge them to collaborate in the production of media projects. Active participants are recognized by the Reality Committee with special serendipitous mentorships opportunities– meetups and encounters with alumni, artists, and other industry professionals. \n As an essential member of the game-launch team in 2011, I helped run Game Office operations, design weekly experience challenge for “deep” players, organize players and many other game-runner tasks. In 2012, SCA Reality won IndieCade’s Impact Award. It was also featured in IndieCade’s Big Games 2011.',
          type: 'game',
          role: 'Lead Game Runner / Experience Design',
          date: 'Fall, 2011',
          live_link: 'http://reality.usc.edu/about/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/SCARG_Thumb.png'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects))");
    });
};
