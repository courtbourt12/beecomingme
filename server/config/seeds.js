const db = require("./connection");
const {User} = require("../models/User.js");

db.once("open", async () => {
  await User.deleteMany();

  await User.insertMany([
    {
      username: "Courtney",
      email: "courtney@example.com",
      first_name: "Courtney",
      last_name: "Test",
      dob: "2000-12-03T10:15:30Z",
      password: "$2b$10$LeR5etAASLdCTiNpdkGUR.OomCM2cQECVtjhAqgM.sN/I4FE4bTdm",
    },
    {
      username: "Preksha",
      email: "preksha@example.com",
      first_name: "Preksha",
      last_name: "Test",
      dob: "2000-12-04T10:15:30Z",
      password: "$2b$10$LeR5etAASLdCTiNpdkGUR.OomCM2cQECVtjhAqgM.sN/I4FE4bTdm",
      goals: [
        {
          title: "Project 3",
          description: "To finish and deploy our project 3 MVP",
          friends: [],
          steps: [
            {
              title: "step1",
              description: "Psuedocode",
              status: 1,
              comments: [
                {
                  description: "Psuedocode comment",
                  user: "Courtney",
                  created: "2020-12-03T10:15:30Z",
                },
              ],
              due: "2000-12-04T10:15:30Z",
            },
          ],
        },
        {
          title: "Second goal",
          description: "second goal description",
          friends: [],
          steps: [
            {
              title: "step1",
              description: "Psuedocode",
              status: 1,
              comments: [
                {
                  description: "Psuedocode comment",
                  user: "Courtney",
                  created: "2020-12-03T10:15:30Z",
                },
              ],
              due: "2000-12-04T10:15:30Z",
            },
            {
              title: "step2",
              description: "step 2 desc",
              status: 2,
              comments: [
                {
                  description: "step2 comment 1",
                  user: "Courtney",
                  created: "2020-12-03T10:15:30Z",
                },
                {
                  description: "step2 comment 2",
                  user: "Preksha",
                  created: "2020-12-03T10:15:30Z",
                },
              ],
              due: "2000-11-04T10:15:30Z",
            },
          ],
        },
      ],
    },
    {
      username: "Shaq",
      email: "shaq@example.com",
      first_name: "Shaquille",
      last_name: "O'Neil",
      dob: "1975-12-04T10:15:30Z",
      password: "$2b$10$LeR5etAASLdCTiNpdkGUR.OomCM2cQECVtjhAqgM.sN/I4FE4bTdm",
      goals: [
        {
          title: "Learn to make free throws",
          description: "practice more free throws",
          friends: [],
          steps: [
            {
              title: "step1",
              description: "Psuedocode",
              status: 1,
              comments: [
                {
                  description: "Psuedocode comment",
                  user: "Courtney",
                  created: "2020-12-03T10:15:30Z",
                },
              ],
              due: "2000-12-04T10:15:30Z",
            },
          ],
        },
        {
          title: "Second goal",
          description: "second goal description",
          friends: [],
          steps: [
            {
              title: "step1",
              description: "Psuedocode",
              status: 1,
              comments: [
                {
                  description: "Psuedocode comment",
                  user: "Courtney",
                  created: "2020-12-03T10:15:30Z",
                },
              ],
              due: "2000-12-04T10:15:30Z",
            },
            {
              title: "step2",
              description: "step 2 desc",
              status: 2,
              comments: [
                {
                  description: "step2 comment 1",
                  user: "Courtney",
                  created: "2020-12-03T10:15:30Z",
                },
                {
                  description: "step2 comment 2",
                  user: "Preksha",
                  created: "2020-12-03T10:15:30Z",
                },
              ],
              due: "2000-11-04T10:15:30Z",
            },
          ],
        },
      ],
    },
    // {
    //   username: "Courtney",
    //   email: "courtney@example.com",
    //   first_name: "Courtney",
    //   last_name: "Test",
    //   dob: "2000-12-03T10:15:30Z",
    //   password: "$2b$10$LeR5etAASLdCTiNpdkGUR.OomCM2cQECVtjhAqgM.sN/I4FE4bTdm",
    //   goals: [
    //     {
    //       title: "Project 3",
    //       description: "To finish and deploy our project 3 MVP",
    //       owner: "test1",
    //       steps: [
    //         {
    //           title: "step1",
    //           description: "Psuedocode",
    //           status: 1,
    //           comments: [
    //             {
    //               description: "Psuedocode comment",
    //               user: "test2",
    //               created: "2020-12-03T10:15:30Z",
    //             },
    //           ],
    //           due: "2028-12-03T10:15:30Z",
    //         },
    //       ],
    //       friends: [],
    //       encouragement: 4,
    //     },
    //   ],
    // },
  ]);
  console.log("users seeded");
  process.exit();
});
