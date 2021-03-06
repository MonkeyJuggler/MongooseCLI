require("./db/connection");
const mongoose = require("mongoose");
const yargs = require("yargs");
const { addMovie, list } = require("./movie/functions");

const app = async (yargsObj) => {
    try {
        if (yargsObj.add) {
            console.log(await addMovie(yargsObj.title, yargsObj.actor));
            //add functionality
        } else if (yargsObj.list) {
            console.log(await list());
            //list functionality
        } else {
            console.log("Incorrect command")
        }
        await mongoose.disconnect();
    } catch (error) {
        console.log(error)
    }
}

app(yargs.argv);