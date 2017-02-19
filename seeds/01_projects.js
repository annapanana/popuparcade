'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('projects').insert({
          id: 27,
          name: 'Gathered Gardens',
          brief: 'Gathered Gardens is a data visualization and community development site for members of the Growing Gardens organization in Boulder.',
          description: 'Gathered Gardens makes putting down roots easier than ever before! Gardeners can visualize the fruits of their labor with interactive graphics, connect to their fellow members through intuitive communication features, and cultivate kinship between gardens throughout the Growing Gardens organization. This project was an exploration in data visualiziation, making use of the Javascrip D3 library and dynamic manipulation of SVG maps. I created the maps in Illustrator then manipulated them with AngularJS to reflect produce that was logged in a database. Users can select a community garden and click on various plots to see what has been planted. To view the site functionality, click the project link below.',
          type: 'web',
          role: 'Designer / Developer',
          date: 'January, 2017',
          live_link: 'https://gathered-gardens.herokuapp.com',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/gg_thumb.png',
          featured_state: 'gatheredGardens',
          banner_feature: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/gathered_gardens_feature_1.png'
        }),
        knex('projects').insert({
          id: 26,
          name: 'Fridge Face',
          brief: 'Fridge Face is a friendly inventory management system for communal refrigerators. Community members can register food items via an animated interface and view shared fridge contents.',
          description: 'Fridge Face is a friendly inventory management system for communal refrigerators. The app enables community members to view fridge contents, filter food by categories, check expiration dates and receive announcements. Users are greeted with an animated interface to build a sense of community and humor around the fridge utility. The project is a a full CRUD app that uses front end technologies such as HTML/CSS/JS as well as a Node.JS server with Express routes. The backend makes use of a PostgreSQL database that is queried using Knex.JS from the node server. The project is hosted on Heroku. Click the link below to register and view the live project.',
          type: 'web',
          role: 'Designer / Developer',
          date: 'December, 2016',
          live_link: 'https://fridge-face.herokuapp.com',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/FridgeFace_Thumb.png',
          featured_state: 'fridgeFace',
          banner_feature: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_01.jpg'
        }),
        knex('projects').insert({
          id: 25,
          name: 'Greetings from the Internet',
          brief: 'GFTI is a web-based postcard creation tool that uses the Flickr API for collage-composition. GFTI was my first project for the Galvanize full-stack web immersive program.',
          description: 'Greetings from the Internet (gfti) is a web-based postcard creation tool that allows users to select a greeting, search for images, compose postcard graphics and include a custom message. The aesthetic of gfti is an homage to Teich greetings postcards. Gfti uses the Flickr API to supply users with images and the Lob API to send postcards. The project is a client-side website that I created as my first project for the Galvanize Web Immersive program. The project was completed in 5-days after only several weeks of web-development instruction. Click the link below to fiew the live site.',
          type: 'web',
          role: 'Designer / Developer',
          date: 'November, 2016',
          featured_state: 'gfti',
          live_link: 'http://greetingsfromtheinternet.surge.sh/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/gfti_thumb.png',
          banner_feature: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_04.png'
        }),
        knex('projects').insert({
          id: 24,
          name: 'The Greenhouse',
          brief: 'The Greenhouse is a board game about greenhouse gas and our atmosphere that I designed and produced in conjunction with the National Center of Atmospheric Research.',
          description: 'I designed and produced a board game about greenhouse gas in conjunction with the National Center of Atmospheric Research. The game seeks to teach 3rd graders - 5th graders who visit the NCAR Mesa Lab about the influence that greenhouse gases have on our atmosphere. I worked directly with experts and researchers to ensure that the educational outcomes of the boardgame were accurate and accessible for the target audience. I playtested the board game with local students in a classroom setting to ensure the game would fit the needs of the instructors at the Mesa Lab.',
          type: 'game',
          role: 'Designer / Project Manager',
          date: 'October, 2016',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/TheGreenhouse.png'
        }),
        knex('projects').insert({
          id: 23,
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
          id: 22,
          name: 'The Lionguard',
          brief: 'ROAR! Inspired by the all-new Disney Junior series, join Kion and the Lion Guard on an action packed adventure to protect the Pride Lands!',
          description: `ROAR! Inspired by the all-new Disney Junior series, join Kion and the Lion Guard on an action packed adventure to protect the Pride Lands! Race Kion through 5 challenging and beautiful locations: the Grasslands, Big Springs, the Canyons, Hakuna Matata Falls, and the Outlands. Call on individual guard members, each with different strengths, to help Kion overcome hazardous obstacles. Collect tokens, unleash Kion’s powerful “Roar of the Elders”, and complete lifesaving missions before the sun sets!`,
          type: 'game',
          role: 'User Research / Design Consulting',
          date: 'February, 2016',
          live_link: 'https://itunes.apple.com/us/app/the-lion-guard/id1030522460?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/LionGuard_Thumb.png'
        }),
        knex('projects').insert({
          id: 21,
          name: 'Read with Doc: Word Building',
          brief: 'Learn all about word building with the second in the series of Read with Doc McStuffins apps.',
          description: 'Read with Doc McStuffins was featured in the App Store under "Best New Apps." It was also the top paid app in Education. Players can learn all about world building with undreds of little lessons. Young readers can join the Disney Junior character, Doc McStuffins, to explore 5 engaging chapters of this app. Each chapter focuses on a different skill including, blending and decoding, site words and sentence formation. As  the game design lead on this series of games, my responsibilties included rapid prototyping, curriculum design, liaising with external developers, narrative design and more.',
          type: 'game',
          role: 'Game Design / Prototype Developer / Early Concepting',
          date: 'January, 2016',
          live_link: 'https://itunes.apple.com/us/app/read-doc-mcstuffins-word-building/id1053294286?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Doc_LTR2_Thumb.png'
        }),
        knex('projects').insert({
          id: 20,
          name: 'Read with Doc: Letters and Sounds',
          brief: 'Play along with Doc and friends as you explore 5 fun-filled worlds of letters and sounds to practice early reading skills.',
          description: 'This is the first of two apps that comprise a 10-step learn to read program with the Disney Junion Doc McStuffins franchise. The app is targeted at 3 - 5 year old players each game (in a set of 10 games) enables the player to execise a different skill that is essential to the process of learning to read. These skills include rhyming and alliteration, letter sounds, phonemes, syllables and letter tracings. As  the game design lead on this series of games, my responsibilties included rapid prototyping, curriculum design, liaising with external developers, narrative design and more.',
          type: 'game',
          role: 'Game Design / Prototype Developer / Early Concepting',
          date: 'January, 2016',
          live_link: 'https://itunes.apple.com/us/app/read-doc-mcstuffins-letters/id1053294297?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Doc_LTR1_Thumb.png'
        }),
        knex('projects').insert({
          id: 19,
          name: 'Frozen Early Science',
          brief: 'Join Elsa, Anna, Olaf, and your favorite friends from Frozen as you run the new Nature Park in Arendelle.',
          description: 'Players can join Elsa, Anna, Olaf and other friends from Frozen as they run a Nature Park in the fictional land of Arendelle. The app includes two games that focus on early science curriciulum for 3-5 year olds. Players can experiment with state change in a cooking simulation and learn about health and hygine in a baby reindeer park. As a designer on this app, I met with Disney Animation Studio representatives to ensure that the gameplay and narrative construction aligned with franchise goals. I prototyped playful, tablet-based science experiments to include in the app and provided design documentation for external developers.',
          type: 'game',
          role: 'Game Design / Prototype Developer / Early Concepting',
          date: 'April, 2015',
          live_link: 'https://itunes.apple.com/us/app/frozen-early-science-cooking/id976351888?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Frozen_Thumb.png'
        }),
        knex('projects').insert({
          id: 18,
          name: "Mickey's Magical Arts World",
          brief: "Players can create an entire world of their own with creative tools such as drawing, film-making, painting and architecture.",
          description: "Players can create an entire world of their own with creative tools such as drawing, film-making, painting and architecture. The artifacts that players create with Mickey Mouse and his pals come to life in a silly cartoon-filled world. Players can also make music with Mickey and watch a marching band of animated characters parade through the streets of the cartoon town. The app includes five different games, each of which are tailored to specific creative arts curriculum. As the game designer on this app, I worked with external developers to execute on project objectives, crafted wireframes and other design documentation and ran playtesting sessions with 3 - 5 year old kids.",
          type: 'game',
          role: 'Game Design / Early Concepting',
          date: 'February, 2015',
          live_link: 'https://itunes.apple.com/us/app/mickeys-magical-arts-world/id932511798?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Cartooniverse_Thumb.png'
        }),
        knex('projects').insert({
          id: 17,
          name: "Mickey's Magical Math World",
          brief: "Mickey’s Magical Math World explores 5 fun different games that help children practice early math skills.",
          description: "Players can join Mickey and friends on a math-filled space adventure. The app includes five games that enable children to practice early math skills. Players practice geometry and shape recognition by building rockets, explore the number line with Donald Duck, use spatial problem sovling skills with Daisy, practice counting with Minnie Mouse and sort colors and shapes with Goofy. As a designer on this suite of 5-games, I prototyped gameplay, constructed puzzle-levels, provided build feedback to developers and ran playtesting sessions.",
          type: 'game',
          role: 'Game Design',
          date: 'November, 2014',
          live_link: 'https://itunes.apple.com/us/app/mickeys-magical-math-world/id925134465?mt=8',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Space_Math_Thumb.png'
        }),
        knex('projects').insert({
          id: 16,
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
          id: 15,
          name: 'Stone Soup',
          brief: 'Stone Soup is a networked, digital storybook. Each page includes a novel cross-device interaction that lets readers enact narrative events or role-play with characters.',
          description: 'Stone Soup is a classic folktale that has been adapted to my unique StoryPops format. Each page of the story includes a novel cross-device interaction that lets readers enact narrative events or role-play with characters. StoryPops empower young readers with a smartphone as a dynamic prop to PLAY with their favorite stories. Stone Soup was my graduate thesis project and the culmination of my degree in Interactive Media from USC’s School of Cinematic Arts. A small team joined me to develop the project over the course of 6 months. The format of play includes an iPad and a smartphone. This cross-device, networked experiences bring an original adaptation of Stone Soup to life. To better understand this new format of narrative play—a StoryPop—check out a few of the demo videos.',
          type: 'game',
          role: 'Designer / Developer / Project Lead',
          date: 'June, 2014',
          live_link: '',
          featured_state: 'stoneSoup',
          banner_feature: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Featured/Banners/banner-features_03.jpg',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/StoneSoup_Thumb.png'
        }),
        knex('projects').insert({
          id: 14,
          name: 'Eat a Game',
          brief: 'Eat a Game was a series of edible “big game” projects for various urban festivals.',
          description: 'Eat a Game was a series of edible “big game” projects that I created for festivals. For the 2013 IndieCade festival, I designed and ran Cookie Bingo, a delicious game. Players grab a cookie, select a challenge category and compete in that category with other players. When players complete a challenge for one of their cookie quadrant categories, they must eat part of the cookie. The first person to complete a challenge for all four of their cookie quadrants wins. For the 2013 Come Out and Play Festival, I designed and ran Eat the Flag. Eat the Flag is just like capture the flag but you only get 3 lives… of chocolate! Two cupcake flags are set up on either ends of the playing field and the game objective is to “eat the flag.” This game was sponsored by Dandelion Chocolate in San Francisco.',
          type: 'game',
          role: 'Designer / Game Runner',
          date: 'September, 2013',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/EatAGame_Thumb.png'
        }),
        knex('projects').insert({
          id: 13,
          name: 'Graduate Strike Force',
          brief: 'Graduate Strike Force is an strategic action game for high-schoolers about the basics of college financial aid.',
          description: "Graduate Strike Force is an strategic action game for desktop and mobile devices. The game challenges players to understand the basics of financial aid and how to choose the best college for them... and it involves fighting giant monsters. I designed, developed and tested the game with a small team in the University of Southern California's Game Innovation Lab. As a team member, I protoyped game mechanics, wrote game content, built visual effects and programmed game logic using C#. This project was funded by the Bill and Melinda Gates Foundation.",
          type: 'game',
          role: 'Game Design / Development',
          date: 'June, 2013',
          live_link: 'http://www.gameinnovationlab.com/projects/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/GSF_Thumb.png'
        }),
        knex('projects').insert({
          id: 12,
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
          id: 11,
          name: 'Futurebound',
          brief: 'Futurebound encourages students to explore the relationships between ambitions, passion, and career aspirations through gameplay.',
          description: 'Futurebound is an iOS (iPod/iPhone) and downloadable PC game that encourages middle school students to explore the relationships between ambitions, passion, and career aspirations as they relate to a college degree. Throughout the game, players battle doubts with their ambitions, which are guised as super powers. Players must collect passion around the world to fuel their ambitions and help other characters along the way. The game was developed in Unity3D for distribution on the web and on the AppStore. The game was created within the Game Innovation Lab at the University of Southern California. As a team member, I created narrative quests, wrote dialogue, scripted quests using XML and created visual effects associated with different super-powers. This project was funded by the Bill and Melinda Gates Foundation.',
          type: 'game',
          role: 'Designer / Developer',
          date: 'December, 2012',
          live_link: 'http://www.gameinnovationlab.com/projects/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Futurebound_Thumb.png'
        }),
        knex('projects').insert({
          id: 10,
          name: 'Hedelby: Hear your Fear',
          brief: 'A binaural soundscape and series of visual mini-games that challenge players to navigate a narrative sound environment and enter the minds of various characters.',
          description: 'Hedelby is a binaural soundscape and series of visual mini-games that challenge players to navigate a narrative sound environment. Gameplay is comprised of various story interlueds, mixed-in with audio-directional challenges. Hedelby was developed as a research project within the Interactive Media Division of USC’s School of Cinematic Arts. The game was developed in conjunction with USC’s Viterbi School of Engineering. The fictional setting of the soundscape is a prison (Hedelby) that housed notoriously dangerous criminals. It served as a last ditch placement for society’s most dangerous defects. As the project leader, I organized a team, recuited actors, worked with a screenwriter, recorded and edited audio and programmed in C#. For this project, I built DYI binural recording device from a maniquin head, directional microphones and silicone ears.',
          type: 'sandbox',
          role: 'Project Director / Developer',
          date: 'November, 2012',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Hedelby_Thumb.png'
        }),
        knex('projects').insert({
          id: 9,
          name: 'Playcenta',
          brief: 'It’s part sound design and part whack-a-mole gameplay within a soft tent that glows and responds to touch input.',
          description: 'The Playcenta part sound design and part whack-a-mole gameplay within a soft tent that glows and responds to touch input. The Playcenta is a performative audio/visual/tactile exprerience. For the project I learned to work with the arduino circuitboard. I also created custom pressure sensors using anti-static fabric, sandwiched between conductive fabric. The user enters the Playcenta and is met with a series of LED lights that glow until they are touched. Interacting with the lights generates a pleasant soundscape that is emitted for the audience to hear.',
          type: 'sandbox',
          role: 'Designer / Seamstress / Programmer',
          date: 'May, 2012',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Playcenta_Thumb.png'
        }),
        knex('projects').insert({
          id: 8,
          name: 'Tormented Soles',
          brief: 'What is the scariest part of bowing? … The shoes of course!',
          description: 'What is the scariest part of bowing? … The shoes of course! As part of the 2012 What Would MolyDeux Game Jam, Andrea Benavides and I collaborated on a pair of screaming shoes. Our intention was to modify the game of bowling…. by giving it a horrific spin. The game jam prompted participants to take one of Peter Molydeux’s eccentric tweets as inspiration for an original game.  The tweet was about a horror game of bolwing. Because everyone knows that the shoes are the most horrific part of bowling, we were inspired to make the bowler aware of his or her shoes during gameplay. This project was made over the course of a weekend.',
          type: 'sandbox',
          role: 'Designer / Developer / Engineer',
          date: 'April, 2012',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/TormentedSoles_Thumb.png'
        }),
        knex('projects').insert({
          id: 7,
          name: 'Fishtank',
          brief: 'Have you ever wondered what it would be like to be a crustacean?',
          description: "Have you ever wondered what it would be like to be a crustacean? I did, so I made Fishtank: a crustacean simulator. The controls are slow, which I imagine reflect the reality of a crustacean's mobility. The controls for fishtank are simple: WASD to move, mouse to look. If you get a chance to download the build and play, you’ll notice how much effort it takes to look around. This was a deliberate detail, which contributes to the feeling of living in a fishtank. I made fishtank entirely on my own in several hours. The original intention of the project was to learn basic animation with May.",
          type: 'sandbox',
          role: 'Designer / Developer',
          date: 'January, 2012',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Fishtank_Thumb.png'
        }),
        knex('projects').insert({
          id: 6,
          name: 'Nightmare Dollhouse',
          brief: 'Players enter the nightmare of a child and must battle her fears in order escape a strange dollhouse universe.',
          description: 'Players enter the nightmare of a child and must battle her fears in order escape a strange dollhouse universe. Escape from Nightmare Dollhouse was designed and developed by four USC graduat students as part of an intro to game design class. The gameplay is simple: take on the perspective of a little girl and avoid the malicious forces of her nightmare. The player is presented with various methods for overcoming nightmare challenges. The game uses the Microsoft Kinect to put the player in the perspective of the child player character. Navigation is controlled by a Nintendo Wiimote. I worked with two other students to complete this project in a week.',
          type: 'game',
          role: 'Designer / Developer',
          date: 'January, 2011',
          live_link: '',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/PlaytimeNightmare_Thumb.png'
        }),
        knex('projects').insert({
          id: 5,
          name: 'Reality Ends Here',
          brief: 'A creative prompting system and collaborative card game, intended to “reboot” the freshman experience at USC’s School of Cinematic Arts.',
          description: 'Reality Ends Here is creative prompting system and collaborative card game, intended to “reboot” the freshman experience at USC’s School of Cinematic Arts.  Players are lured into the game via a series of mysterious communications from the “Reality Committee.” When they find their way to a secret office, where they swear an oath of DIY media-making, they are given a set of game cards that can be used to generate creative prompts.  As an essential member of the game-launch team in 2011, I helped run Game Office operations, design weekly experience challenge for “deep” players, organize players and many other game-runner tasks. In 2012, SCA Reality won IndieCade’s Impact Award. It was also featured in IndieCade’s Big Games Festival in 2011.',
          type: 'game',
          role: 'Lead Game Runner / Experience Design',
          date: 'Fall, 2011',
          live_link: 'http://reality.usc.edu/about/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/SCARG_Thumb.png'
        }),
        knex('projects').insert({
          id: 4,
          name: 'The Playcube',
          brief: 'What is the Playcube? …a flexible, impromptu, waterproof, mobile public venue to show off local ideas and innovations.',
          description: 'What is the Playcube? …a flexible, impromptu, waterproof, mobile public venue to show off local ideas and innovations. Dartmouth’s PLAYCUBE is home for experimental new media work, unique performances, design charrettes, and demos by students, faculty, and visitors. The Playcube is located at Dartmouth College and hosted by Mary Flanagan’s game lab, Tiltfactor. As an undergraduate student employee, I worked for Tiltfactor on game and video projects in addition to curating and managing the Playcube. Under my management, the Playcube hosted a silent disco, a collaborate digital arts event with the Dartmouth AREA student art space, and performative sculpture and many other events.',
          type: 'sandbox',
          role: 'Curator / Project Manager',
          date: '2009 / 2010',
          live_link: 'http://www.tiltfactor.org/playcube',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Playcube_Thumb.png'
        }),
        knex('projects').insert({
          id: 3,
          name: 'The Source',
          brief: 'What is the Playcube? …a flexible, impromptu, waterproof, mobile public venue to show off local ideas and innovations.',
          description: 'Dr. John Snow traced the source of cholera to water in the London Epidemic of 1849 by connecting the sick to common fountains. The Source recreates this case through gameplay. Cards are dealt into stacks, which serve as wells. Each stack contains pure water, infected water, and electrolytes. Players must draw water from three wells each round but they must keep an eye on who draws from which well. At the end of a round, the players who are infected die and cannot contribute to discussion. Living players must use a process of elimination to determine which wells are infected. Download the game via Dartmouth’s Tiltfactor Lab website.',
          type: 'sandbox',
          role: 'Designer',
          date: 'February, 2010',
          live_link: 'http://www.tiltfactor.org/game/the-source/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/TheSource_Thumb.png'
        }),
        knex('projects').insert({
          id: 2,
          name: 'Massively Multiplayer Mushu',
          brief: 'Grab some friends and traverse Hell’s Kitchen (NYC) in a team-based urban game focused on culture, food and language.',
          description: 'Make NYC your playground! Grab some friends and traverse Hell’s Kitchen in a team-based urban game focused on culture, food and language. Massively Multiplayer Mushu combines play with opportunities to descover new places in a city, creating unexpected encounters with residents, while challenging concepts of culture and language through storytelling and discovery. Higher points are rewarded for longer, more in depth exchanges. In 2009, I assisted Tiltfactor in running their Mushu urban game at the Come Out and Play Festival in Hell’s Kitchen, NYC. To get a better sense of gameplay check out the Massively Multiplayer Mushu or Massively Multiplayer Soba videos that I created for the Tiltfactor Game Lab.',
          type: 'sandbox',
          role: 'Game Runner / Video Production',
          date: 'February, 2010',
          live_link: 'http://www.tiltfactor.org/game/massively-multiplayer-urban-games/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Mushu_Thumb.png'
        }),
        knex('projects').insert({
          id: 1,
          name: 'Layoff',
          brief: 'A game used to study empathy, with the financial crisis as a background context.',
          description: 'Layoff is a game used to study empathy, with the financial crisis as a background context. Layoff mods Bejeweled mechanics and includes personal stories about each character. Developed by members of the Tiltfactor Lab and the Rochester Institute of Technology (RIT) Game Design and Development program, LAYOFF is an examinaton of the 2009 financial crisis. In addition to designing the gameplay tutorial, I researched and co-published a paper for the Digital Games Research Association (DiGRA) with Professor Mary Flanagan. The paper, Anxiety, Openness, and Activist Games: A Case Study for Critical Play, explores the boundaries of social issues or “activist” games with a case study on LAYOFF (2009), which fostered a critical type of play among the audience. In the paper, we assess the game’s public reception to better understand how contradictory play elements led to an anxiety of ambiguity during open play. To play the game, visit Tiltfactor’s website.',
          type: 'sandbox',
          role: 'Tutorial / Post Production Research',
          date: 'March, 2009',
          live_link: 'http://www.tiltfactor.org/game/layoff/',
          thumbnail: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Thumbs/Layoff_Thumb.png'
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_id_seq', (SELECT MAX(id) FROM projects))");
    });
};
