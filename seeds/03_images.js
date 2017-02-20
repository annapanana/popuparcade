'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('images').del()
    .then(function () {
      return Promise.all([
        // Gathered Gardens
        knex('images').insert({
          project_id: 27,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Gathered_Gardens/gg_photo5_reformatted.png'
        }),
        knex('images').insert({
          project_id: 27,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Gathered_Gardens/gg_photo4_reformatted.png'
        }),
        knex('images').insert({
          project_id: 27,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Gathered_Gardens/gg_photo3_reformatted.png'
        }),
        knex('images').insert({
          project_id: 27,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Gathered_Gardens/gg_photo2_reformatted.png'
        }),
        knex('images').insert({
          project_id: 27,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Gathered_Gardens/gg_photo1_reformatted.png'
        }),
        // Fridge Face
        knex('images').insert({
          project_id: 26,
          image_url: 'http://res.cloudinary.com/dgt2xab7d/image/upload/v1481823491/rsxogqtay8rrchd8cv4e.jpg'
        }),
        // GFTI
        knex('images').insert({
          project_id: 25,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/Screen+Shot+2016-11-03+at+5.36.05+PM.png'
        }),
        knex('images').insert({
          project_id: 25,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/Screen+Shot+2016-11-03+at+5.44.38+PM.png'
        }),
        knex('images').insert({
          project_id: 25,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/post_card_01_example.png'
        }),
        knex('images').insert({
          project_id: 25,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GFTI_IMG/post_card_04_example.png'
        }),
        // The Greenhouse
        knex('images').insert({
          project_id: 24,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Greenhouse_IMG/TheGreenhouse_01.png'
        }),
        knex('images').insert({
          project_id: 24,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Greenhouse_IMG/TheGreenhouse_02.png'
        }),
        knex('images').insert({
          project_id: 24,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Greenhouse_IMG/TheGreenhouse_03.png'
        }),
        // The Vonk
        knex('images').insert({
          project_id: 23,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Vonk_IMG/Vonk+Deck+V7EC_Page_02.png'
        }),
        knex('images').insert({
          project_id: 23,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Vonk_IMG/Vonk+Deck+V7EC_Page_03.png'
        }),
        knex('images').insert({
          project_id: 23,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Vonk_IMG/Vonk+Deck+V7EC_Page_08.png'
        }),
        // The Lionguard
        knex('images').insert({
          project_id: 22,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0124.PNG'
        }),
        knex('images').insert({
          project_id: 22,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0127.PNG'
        }),
        knex('images').insert({
          project_id: 22,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0140.PNG'
        }),
        knex('images').insert({
          project_id: 22,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0149.PNG'
        }),
        knex('images').insert({
          project_id: 22,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0152.PNG'
        }),
        knex('images').insert({
          project_id: 22,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0156.PNG'
        }),
        knex('images').insert({
          project_id: 22,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0160.PNG'
        }),
        knex('images').insert({
          project_id: 22,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/Lionguard_IMG/IMG_0162.PNG'
        }),
        // Read with Doc 2
        knex('images').insert({
          project_id: 21,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.01.13+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.01.27+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.01.47+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.02.12+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.02.36+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.03.04+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.03.24+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: '	https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.03.44+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.04.04+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.09.41+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.10.08+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.11.09+AM.png'
        }),
        knex('images').insert({
          project_id: 21,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc2_IMG/Screen+Shot+2016-01-18+at+11.11.27+AM.png'
        }),
        // Read with Doc 1
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.57.21+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.58.05+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.58.26+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.58.50+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.59.06+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+10.59.41+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.00.15+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.00.49+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.12.18+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.12.58+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-01-18+at+11.13.35+AM.png'
        }),
        knex('images').insert({
          project_id: 20,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/ReadWithDoc1_IMG/Screen+Shot+2016-03-20+at+2.36.12+PM.png'
        }),
        // Frozen Early Science
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.12.40+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.13.35+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.13.51+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.14.05+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.14.25+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.15.08+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.15.21+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.15.46+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.15.55+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.16.15+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.16.30+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.17.38+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.18.08+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.18.49+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.19.07+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.19.46+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.21.13+AM.png'
        }),
        knex('images').insert({
          project_id: 19,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/FrozeScience_IMG/Screen+Shot+2015-10-27+at+9.21.33+AM.png'
        }),
        // Micky's Arts
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.22.45+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.23.04+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.23.25+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.24.21+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.24.34+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.25.08+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.25.20+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.25.48+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.26.14+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.26.24+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.27.25+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.27.48+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.28.02+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.28.35+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.28.46+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.29.30+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.29.49+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.30.16+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.30.37+AM.png'
        }),
        knex('images').insert({
          project_id: 18,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyArts_IMG/Screen+Shot+2015-10-27+at+9.31.13+AM.png'
        }),
        // Micky's Math
        knex('images').insert({
          project_id: 17,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_01.png'
        }),
        knex('images').insert({
          project_id: 17,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_02.png'
        }),
        knex('images').insert({
          project_id: 17,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_03.png'
        }),
        knex('images').insert({
          project_id: 17,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_04.png'
        }),
        knex('images').insert({
          project_id: 17,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_05.png'
        }),
        knex('images').insert({
          project_id: 17,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_06.png'
        }),
        knex('images').insert({
          project_id: 17,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_07.png'
        }),
        knex('images').insert({
          project_id: 17,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_08.png'
        }),
        knex('images').insert({
          project_id: 17,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MickeyMath_IMG/Portfolio_IMG_SpaceMath_09.png'
        }),
        // Gloobal Doomination
        knex('images').insert({
          project_id: 16,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob1.png'
        }),
        knex('images').insert({
          project_id: 16,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob2.png'
        }),
        knex('images').insert({
          project_id: 16,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob3.png'
        }),
        knex('images').insert({
          project_id: 16,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob4.png'
        }),
        knex('images').insert({
          project_id: 16,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob5.png'
        }),
        knex('images').insert({
          project_id: 16,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob6.png'
        }),
        knex('images').insert({
          project_id: 16,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GloobalDoomination_IMG/Gloob7.png'
        }),
        // Stone Soup
        knex('images').insert({
          project_id: 15,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/StoneSoup_IMG/IMG_2248.JPG'
        }),
        knex('images').insert({
          project_id: 15,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/StoneSoup_IMG/IMG_2291.JPG'
        }),
        knex('images').insert({
          project_id: 15,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/StoneSoup_IMG/IMG_2303.JPG'
        }),
        knex('images').insert({
          project_id: 15,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/StoneSoup_IMG/IMG_2318.JPG'
        }),
        knex('images').insert({
          project_id: 15,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/StoneSoup_IMG/UnityScreenSnapz025.png'
        }),
        knex('images').insert({
          project_id: 15,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/StoneSoup_IMG/UnityScreenSnapz026.png'
        }),
        knex('images').insert({
          project_id: 15,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/StoneSoup_IMG/UnityScreenSnapz029.png'
        }),
        // Eat a Game
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5915_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5916_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5917_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5918_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5919_Reduced.png'
        }),
        knex('images').insert({
          project_id: 13,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5920_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5921_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5922_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5923_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5924_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5925_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5926_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5927_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_5928_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_9597_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_9598_Reduced.jpg'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_9620_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_9621_Reduced.png'
        }),
        knex('images').insert({
          project_id: 14,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/EatAGame_IMG/IMG_9638_Reduced.png'
        }),
        // Graduate Strike Force
        knex('images').insert({
          project_id: 13,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GSF_IMG/Screen+Shot+2015-10-27+at+7.26.27+PM.png'
        }),
        knex('images').insert({
          project_id: 13,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GSF_IMG/Screen+Shot+2015-10-27+at+7.27.21+PM.png'
        }),
        knex('images').insert({
          project_id: 13,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GSF_IMG/Screen+Shot+2015-10-27+at+7.27.36+PM.png'
        }),
        knex('images').insert({
          project_id: 13,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GSF_IMG/Screen+Shot+2015-10-27+at+7.28.30+PM.png'
        }),
        knex('images').insert({
          project_id: 13,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GSF_IMG/Screen+Shot+2015-10-27+at+7.33.11+PM.png'
        }),
        knex('images').insert({
          project_id: 13,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/GSF_IMG/Screen+Shot+2015-10-27+at+7.33.49+PM.png'
        }),
        // Apathy Simulation
        knex('images').insert({
          project_id: 12,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Apathy_IMG/WildWestScreenSnapz002.png'
        }),
        knex('images').insert({
          project_id: 12,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Apathy_IMG/WildWestScreenSnapz003.png'
        }),
        knex('images').insert({
          project_id: 12,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Apathy_IMG/WildWestScreenSnapz004.png'
        }),
        // Futurebound
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_01.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_02.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_03.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_04.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_05.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_06.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_07.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_08.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_09.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_10.png'
        }),
        knex('images').insert({
          project_id: 11,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Futurebound_IMG/Portfolio_IMG_Collegeology_11.png'
        }),
        // Hedelby
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Hedelby_IMG/Portfolio_IMG_Hedelby_01.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Hedelby_IMG/Portfolio_IMG_Hedelby_02.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Hedelby_IMG/Portfolio_IMG_Hedelby_03.png'
        }),
        knex('images').insert({
          project_id: 10,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Hedelby_IMG/Portfolio_IMG_Hedelby_04.png'
        }),
        // Playcenta
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcenta_IMG/Portfolio_IMG_Playcenta_01.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcenta_IMG/Portfolio_IMG_Playcenta_02.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcenta_IMG/Portfolio_IMG_Playcenta_03.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcenta_IMG/Portfolio_IMG_Playcenta_04.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcenta_IMG/Portfolio_IMG_Playcenta_05.png'
        }),
        knex('images').insert({
          project_id: 9,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcenta_IMG/Portfolio_IMG_Playcenta_06.png'
        }),
        // Tormented Soles
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/TormentedSoles_IMG/Portfolio_IMG_TS_01.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/TormentedSoles_IMG/Portfolio_IMG_TS_02.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/TormentedSoles_IMG/Portfolio_IMG_TS_03.png'
        }),
        knex('images').insert({
          project_id: 8,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/TormentedSoles_IMG/Portfolio_IMG_TS_04.png'
        }),
        // Fishtank
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fishtank_IMG/Portfolio_IMG_FT_01.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fishtank_IMG/Portfolio_IMG_FT_02.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fishtank_IMG/Portfolio_IMG_FT_03.png'
        }),
        knex('images').insert({
          project_id: 7,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Fishtank_IMG/Portfolio_IMG_FT_04.png'
        }),
        // Nightmare Dollhouse
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/NightmareDollhouse_IMG/Portfolio_IMG_PTN_01.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/NightmareDollhouse_IMG/Portfolio_IMG_PTN_02.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/NightmareDollhouse_IMG/Portfolio_IMG_PTN_03.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/NightmareDollhouse_IMG/Portfolio_IMG_PTN_04.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/NightmareDollhouse_IMG/Portfolio_IMG_PTN_05.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/NightmareDollhouse_IMG/Portfolio_IMG_PTN_06.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/NightmareDollhouse_IMG/Portfolio_IMG_PTN_07.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/NightmareDollhouse_IMG/Portfolio_IMG_PTN_08.png'
        }),
        knex('images').insert({
          project_id: 6,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/NightmareDollhouse_IMG/Portfolio_IMG_PTN_09.png'
        }),
        // Reality Ends Here
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/RealityEndsHere_IMG/Portfolio_IMG_SCARG_01.png'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/RealityEndsHere_IMG/Portfolio_IMG_SCARG_02.png'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/RealityEndsHere_IMG/Portfolio_IMG_SCARG_03.png'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/RealityEndsHere_IMG/Portfolio_IMG_SCARG_04.png'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/RealityEndsHere_IMG/Portfolio_IMG_SCARG_05.png'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/RealityEndsHere_IMG/Portfolio_IMG_SCARG_06.png'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/RealityEndsHere_IMG/Portfolio_IMG_SCARG_07.png'
        }),
        knex('images').insert({
          project_id: 5,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/RealityEndsHere_IMG/Portfolio_IMG_SCARG_08.png'
        }),
        // The Playcube
        knex('images').insert({
          project_id: 4,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcube_IMG/Portfolio_IMG_PC_01.png'
        }),
        knex('images').insert({
          project_id: 4,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcube_IMG/Portfolio_IMG_PC_02.png'
        }),
        knex('images').insert({
          project_id: 4,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcube_IMG/Portfolio_IMG_PC_03.png'
        }),
        knex('images').insert({
          project_id: 4,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcube_IMG/Portfolio_IMG_PC_04.png'
        }),
        knex('images').insert({
          project_id: 4,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcube_IMG/Portfolio_IMG_PC_05.png'
        }),
        knex('images').insert({
          project_id: 4,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Playcube_IMG/Portfolio_IMG_PC_06.png'
        }),
        // The Source
        knex('images').insert({
          project_id: 3,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/TheSource_IMG/the_source_action_shot1.jpg'
        }),
        knex('images').insert({
          project_id: 3,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/TheSource_IMG/thumb-009.png'
        }),
        // MM Mushu
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MMMushu_IMG/Portfolio_IMG_Mushu_01.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MMMushu_IMG/Portfolio_IMG_Mushu_02.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MMMushu_IMG/Portfolio_IMG_Mushu_03.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MMMushu_IMG/Portfolio_IMG_Mushu_04.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MMMushu_IMG/Portfolio_IMG_Mushu_05.png'
        }),
        knex('images').insert({
          project_id: 2,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/MMMushu_IMG/Portfolio_IMG_Mushu_06.png'
        }),
        // Layoff
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Layoff_IMG/Portfolio_IMG_Layoff_01.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Layoff_IMG/Portfolio_IMG_Layoff_02.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Layoff_IMG/Portfolio_IMG_Layoff_03.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Layoff_IMG/Portfolio_IMG_Layoff_04.png'
        }),
        knex('images').insert({
          project_id: 1,
          image_url: 'https://s3-us-west-2.amazonaws.com/popuparcade.com/Layoff_IMG/Portfolio_IMG_Layoff_05.png'
        }),
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('images_id_seq', (SELECT MAX(id) FROM images))");
    });
};
