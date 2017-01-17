'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Fridge Face
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/Screen+Shot+2017-01-03+at+12.54.44+PM.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/Screen+Shot+2017-01-03+at+12.55.15+PM.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fridge_Face_IMG/fridge_face.png'
        }),
        // GFTI
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/Screen+Shot+2016-11-03+at+5.36.05+PM.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/Screen+Shot+2016-11-03+at+5.44.38+PM.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/post_card_01_example.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/post_card_04_example.png'
        }),
        // The Greenhouse
        knex('images').insert({
          project_id: 3,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Greenhouse_IMG/TheGreenhouse_01.png'
        }),
        knex('images').insert({
          project_id: 3,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Greenhouse_IMG/TheGreenhouse_02.png'
        }),
        knex('images').insert({
          project_id: 3,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Greenhouse_IMG/TheGreenhouse_03.png'
        }),
        // The Vonk
        knex('images').insert({
          project_id: 4,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Vonk_IMG/Vonk+Deck+V7EC_Page_02.png'
        }),
        knex('images').insert({
          project_id: 4,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Vonk_IMG/Vonk+Deck+V7EC_Page_03.png'
        }),
        knex('images').insert({
          project_id: 4,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Vonk_IMG/Vonk+Deck+V7EC_Page_08.png'
        }),
        // The Lionguard
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0124.PNG'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0127.PNG'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0140.PNG'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0149.PNG'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0152.PNG'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0156.PNG'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0160.PNG'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0162.PNG'
        }),
        // Read with Doc 2
        knex('images').insert({
          project_id: 6,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.01.13+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.01.27+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.01.47+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.02.12+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.02.36+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.03.04+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.03.24+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.03.44+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.04.04+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.09.41+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.10.08+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.11.09+AM.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.11.27+AM.png'
        }),
        // Read with Doc 1
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.57.21+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.58.05+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.58.26+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.58.50+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.59.06+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.59.41+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.00.15+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.00.49+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.12.18+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.12.58+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.13.35+AM.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-03-20+at+2.36.12+PM.png'
        }),
        // Frozen Early Science
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.12.40+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.13.35+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.13.51+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.14.05+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.14.25+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.15.08+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.15.21+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.15.46+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.15.55+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.16.15+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.16.30+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.17.38+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.18.08+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.18.49+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.19.07+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.19.46+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.21.13+AM.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.21.33+AM.png'
        }),
        // Micky's Arts
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.22.45+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.23.04+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.23.25+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.24.21+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.24.34+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.25.08+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.25.20+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.25.48+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.26.14+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.26.24+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.27.25+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.27.48+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.28.02+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.28.35+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.28.46+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.29.30+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.29.49+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.30.16+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.30.37+AM.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.31.13+AM.png'
        }),
        // Micky's Math
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_01.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_02.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_03.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_04.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_05.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_06.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_07.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_08.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_09.png'
        }),
        // Gloobal Doomination
        knex('images').insert({
          project_id: 11,
          image_url: ''
        }),
        // Stone Soup
        knex('images').insert({
          project_id: 12,
          image_url: ''
        }),
        // Eat a Game
        knex('images').insert({
          project_id: 13,
          image_url: ''
        }),
        // Graduate Strike Force
        knex('images').insert({
          project_id: 14,
          image_url: ''
        }),
        // Apathy Simulation
        knex('images').insert({
          project_id: 15,
          image_url: ''
        }),
        // Futurebound
        knex('images').insert({
          project_id: 16,
          image_url: ''
        }),
        // Hedelby
        knex('images').insert({
          project_id: 17,
          image_url: ''
        }),
        // Playcenta
        knex('images').insert({
          project_id: 18,
          image_url: ''
        }),
        // Tormented Soles
        knex('images').insert({
          project_id: 19,
          image_url: ''
        }),
        // Fishtank
        knex('images').insert({
          project_id: 20,
          image_url: ''
        }),
        // Nightmare Dollhouse
        knex('images').insert({
          project_id: 21,
          image_url: ''
        }),
        // Reality Ends Here
        knex('images').insert({
          project_id: 22,
          image_url: ''
        }),
        // The Playcube
        knex('images').insert({
          project_id: 23,
          image_url: ''
        }),
        // The Source
        knex('images').insert({
          project_id: 24,
          image_url: ''
        }),
        // MM Mushu
        knex('images').insert({
          project_id: 25,
          image_url: ''
        }),
        // Layoff
        knex('images').insert({
          project_id: 26,
          image_url: ''
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('images_id_seq', (SELECT MAX(id) FROM images))");
    });
};
