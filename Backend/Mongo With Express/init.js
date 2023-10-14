//used to initialise that data in db for once

const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
      from: "kul",
      to: "riya",
      msg: "send notes",
      created_at: new Date(), //creates random date
    },
    {
      from: "rahul",
      to: "priya",
      msg: "call me back asap",
      created_at: new Date(),
    },
    {
        from: "raju",
        to: "sneha",
        msg: "missing you",
        created_at: new Date(),
      },
      {
        from: "mohan",
        to: "ayush",
        msg: "whats up?",
        created_at: new Date(),
      },
      {
          from: "ayushi",
          to: "astha",
          msg: "coming soon",
          created_at: new Date(),
        },
  ]

Chat.insertMany(allChats);