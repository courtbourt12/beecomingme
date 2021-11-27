const db = require("./connection");
const User = require("../models/User.js");

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
          owner: "test1",
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
