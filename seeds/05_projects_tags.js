'use strict';
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('projects_tags').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        // FRIDGE FACE
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 1 // JS
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 2 //HTML/CSS
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 3 //Galvanize
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 4 //Node
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 5 //PSQL
        }),
        knex('projects_tags').insert({
          project_id: 1,
          tag_id: 6 //Express
        }),

        //GFTI
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 7 // Digital/Physical
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 1 // JS
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 2 // HTML/CSS
        }),
        knex('projects_tags').insert({
          project_id: 2,
          tag_id: 3 // Galvanize
        }),

        // The Greenhouse
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 8 // Print
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 9 // Education
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 10 // Freelance
        }),
        knex('projects_tags').insert({
          project_id: 3,
          tag_id: 11 // Project Management
        }),

        // Vonk
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 12 // Connected Play
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 10 // Freelance
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 7 // Digital/Physical
        }),
        knex('projects_tags').insert({
          project_id: 4,
          tag_id: 11 // Project Management
        }),

        // The Lionguard
        knex('projects_tags').insert({
          project_id: 5,
          tag_id: 13 // Disney
        }),
        knex('projects_tags').insert({
          project_id: 5,
          tag_id: 14 // User Research
        }),

        // Read with Doc 2
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 13 // Disney
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 9 // Education
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 6,
          tag_id: 17 // Prototyping
        }),

        // Read with Doc 1
        knex('projects_tags').insert({
          project_id: 7,
          tag_id: 13 // Disney
        }),
        knex('projects_tags').insert({
          project_id: 7,
          tag_id: 9 // Education
        }),
        knex('projects_tags').insert({
          project_id: 7,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 7,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 7,
          tag_id: 17 // Prototyping
        }),

        // Frozen Early Science
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 13 // Disney
        }),
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 9 // Education
        }),
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 8,
          tag_id: 17 // Prototyping
        }),

        // Mickey's Magical Arts World
        knex('projects_tags').insert({
          project_id: 9,
          tag_id: 13 // Disney
        }),
        knex('projects_tags').insert({
          project_id: 9,
          tag_id: 9 // Education
        }),
        knex('projects_tags').insert({
          project_id: 9,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 9,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 9,
          tag_id: 17 // Prototyping
        }),

        // Mickey's Magical Math World
        knex('projects_tags').insert({
          project_id: 10,
          tag_id: 13 // Disney
        }),
        knex('projects_tags').insert({
          project_id: 10,
          tag_id: 9 // Education
        }),

        // Gloobal Doomination
        knex('projects_tags').insert({
          project_id: 11,
          tag_id: 13 // Disney
        }),
        knex('projects_tags').insert({
          project_id: 11,
          tag_id: 9 // Education
        }),
        knex('projects_tags').insert({
          project_id: 11,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 11,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 11,
          tag_id: 18 // Festival
        }),

        // Stone Soup
        knex('projects_tags').insert({
          project_id: 12,
          tag_id: 12 // Connected Play
        }),
        knex('projects_tags').insert({
          project_id: 12,
          tag_id: 22 // USC
        }),
        knex('projects_tags').insert({
          project_id: 12,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 12,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 12,
          tag_id: 20 // Narrative Design
        }),
        knex('projects_tags').insert({
          project_id: 12,
          tag_id: 11 // Project Management
        }),

        // Eat a Game
        knex('projects_tags').insert({
          project_id: 13,
          tag_id: 18 // Festival
        }),
        knex('projects_tags').insert({
          project_id: 13,
          tag_id: 21 // Performance Art
        }),

        // Graduate Strike Force
        knex('projects_tags').insert({
          project_id: 14,
          tag_id: 22 // USC
        }),
        knex('projects_tags').insert({
          project_id: 14,
          tag_id: 9 // Education
        }),
        knex('projects_tags').insert({
          project_id: 14,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 14,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 14,
          tag_id: 20 // Narrative Design
        }),

        // Apathy Simulation
        knex('projects_tags').insert({
          project_id: 15,
          tag_id: 23 // Serious Game
        }),
        knex('projects_tags').insert({
          project_id: 15,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 15,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 15,
          tag_id: 24 // Maya
        }),
        knex('projects_tags').insert({
          project_id: 15,
          tag_id: 22 // USC
        }),

        // Futurebound
        knex('projects_tags').insert({
          project_id: 16,
          tag_id: 22 // USC
        }),
        knex('projects_tags').insert({
          project_id: 16,
          tag_id: 9// Education
        }),
        knex('projects_tags').insert({
          project_id: 16,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 16,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 16,
          tag_id: 20 // Narrative Design
        }),

        // Hedelby: Hear your Fear
        knex('projects_tags').insert({
          project_id: 17,
          tag_id: 19 // Sound Design
        }),
        knex('projects_tags').insert({
          project_id: 17,
          tag_id: 22 // USC
        }),
        knex('projects_tags').insert({
          project_id: 17,
          tag_id: 15 // Untiy3D
        }),
        knex('projects_tags').insert({
          project_id: 17,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 17,
          tag_id: 20 // Narrative Design
        }),
        knex('projects_tags').insert({
          project_id: 17,
          tag_id: 11 // Project Management
        }),

        // Playcenta
        knex('projects_tags').insert({
          project_id: 18,
          tag_id: 25 // Arduino
        }),
        knex('projects_tags').insert({
          project_id: 18,
          tag_id: 26 // Processing
        }),
        knex('projects_tags').insert({
          project_id: 18,
          tag_id: 7 // Digital/Physical
        }),
        knex('projects_tags').insert({
          project_id: 18,
          tag_id: 22 // USC
        }),
        knex('projects_tags').insert({
          project_id: 18,
          tag_id: 27 // Java
        }),
        knex('projects_tags').insert({
          project_id: 18,
          tag_id: 21 // Performance Art
        }),

        // Tormented Soles
        knex('projects_tags').insert({
          project_id: 19,
          tag_id: 25 // Arduino
        }),
        knex('projects_tags').insert({
          project_id: 19,
          tag_id: 26 // Processing
        }),
        knex('projects_tags').insert({
          project_id: 19,
          tag_id: 18 // Festival
        }),
        knex('projects_tags').insert({
          project_id: 19,
          tag_id: 27 // Java
        }),

        // Fishtank
        knex('projects_tags').insert({
          project_id: 20,
          tag_id: 24 // Maya
        }),
        knex('projects_tags').insert({
          project_id: 20,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 20,
          tag_id: 16 // C#
        }),

        // Nightmare Dollhouse
        knex('projects_tags').insert({
          project_id: 21,
          tag_id: 24 // Maya
        }),
        knex('projects_tags').insert({
          project_id: 21,
          tag_id: 15 // Unity3D
        }),
        knex('projects_tags').insert({
          project_id: 21,
          tag_id: 16 // C#
        }),
        knex('projects_tags').insert({
          project_id: 21,
          tag_id: 22 // USC
        }),
        knex('projects_tags').insert({
          project_id: 21,
          tag_id: 28 // Kinect
        }),
        knex('projects_tags').insert({
          project_id: 21,
          tag_id: 20 // Narrative Design
        }),

        // Reality Ends Here
        knex('projects_tags').insert({
          project_id: 22,
          tag_id: 22 // Narrative Design
        }),
        knex('projects_tags').insert({
          project_id: 22,
          tag_id: 9 // Education
        }),
        knex('projects_tags').insert({
          project_id: 22,
          tag_id: 20 // Narrative Design
        }),
        knex('projects_tags').insert({
          project_id: 22,
          tag_id: 12 // Connected Play
        }),
        knex('projects_tags').insert({
          project_id: 22,
          tag_id: 18 // Festival
        }),

        // The Playcube
        knex('projects_tags').insert({
          project_id: 23,
          tag_id: 21 // Performance Art
        }),
        knex('projects_tags').insert({
          project_id: 23,
          tag_id: 29 // Dartmouth
        }),
        knex('projects_tags').insert({
          project_id: 23,
          tag_id: 11 // Project Management
        }),

        // The Source
        knex('projects_tags').insert({
          project_id: 24,
          tag_id: 8 // Project Management
        }),
        knex('projects_tags').insert({
          project_id: 24,
          tag_id: 29 // Dartmouth
        }),
        knex('projects_tags').insert({
          project_id: 24,
          tag_id: 23 // Serious Game
        }),

        // MM Mushu
        knex('projects_tags').insert({
          project_id: 25,
          tag_id: 18 // Festival
        }),
        knex('projects_tags').insert({
          project_id: 25,
          tag_id: 29 // Dartmouth
        }),
        knex('projects_tags').insert({
          project_id: 25,
          tag_id: 21 // Performance Art
        }),

        // Layoff
        knex('projects_tags').insert({
          project_id: 26,
          tag_id: 23 // Serious Game
        }),
        knex('projects_tags').insert({
          project_id: 26,
          tag_id: 29 // Dartmouth
        })
      ]);
    })
    .then(() => {
      return knex.raw("SELECT setval('projects_tags_id_seq', (SELECT MAX(id) FROM projects_tags))");
    });
};
