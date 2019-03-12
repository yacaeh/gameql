import fetch from 'node-fetch';
//const mongoose = require('../config/mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const API_URL = "";

export const getGames = (limit) => {
    console.log("Getting users!");
    try {
        const results = users.find({});
        console.log(results);
        return results;
      } catch (err) {
        throw err;
      }
    // let REQUEST_URL = API_URL;
    // if(limit>0){
    //     REQUEST_URL += `limit=${limit}`;
    // }
    // return fetch(`${REQUEST_URL}`)
    // .then(res => res.json())
    // .then(json => json.data.games);
}

export const userSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true},
    name: {type:String,required:true},
    age:{type:Number, required:true},
    gender:{type:String, required:true}
}, {collection:"users"}); // Defining the collection is redundant in this case. 

export const gameSchema = new Schema({
    _id:{type: Schema.ObjectId, auto: true},
    title: {type:String,required:true},
    summary: {type:String,required:true},
    cover_images:[String]
}, {collection:"games"}); // Defining the collection is redundant in this case. 


export let users = mongoose.model('users', userSchema);
export let games = mongoose.model('games',gameSchema);
// export const users = [
//     {
//         id:"0",
//         name: "zombie",
//         age: 29,
//         gender: "male"
//     },
//     {
//         id:"1",
//         name: "zombie2",
//         age: 329,
//         gender: "male"
//     },
//     {
//         id:"2",
//         name: "zombie3",
//         age: 229,
//         gender: "male"
//     },
//     {
//         id:"3",
//         name: "zombie4",
//         age: 429,
//         gender: "male"
//     },
//     {
//         id:"4",
//         name: "zombie5",
//         age: 219,
//         gender: "male"
//     },
//     {
//         id:"5",
//         name: "zombie6",
//         age: 212,
//         gender: "male"
//     },
// ];

// export let games = [
//     {
//         id:"0",
//         title:"Game1"
//     },
//     {
//         id:"1",
//         title:"Game2"
//     },
//     {
//         id:"2",
//         title:"Game3"
//     },
//     {
//         id:"3",
//         title:"Game4"
//     },
//     {
//         id:"4",
//         title:"Game5"
//     }
// ];

export let playlist =[];

export const getUsers = () => {
    console.log("Getting users!");
    try {
        const results = users.find({});
        console.log(results);
        return results;
      } catch (err) {
        throw err;
      }
      
    // users.find({}, function(err, docs) {
    //     if (!err){ 
    //         console.log(docs);
    //         process.exit();
    //         return docs;
    //     } else {throw err;}
    // });
}

export const getUserById = id => {
    try {
        const results = users.findById(id);
        console.log(results);
        return results;
      } catch (err) {
        throw err;
      }

    // const filteredUsers = users.filter(user => user.id === String(id) );
    // return filteredUsers[0];
}

export const addUser = (name,age,gender)=>{
    let newUser = new users({
        name,
        age,
        gender
    })

    newUser.save().then(function(err, result) {
        console.log('User Created');
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            return result;
        }
    });
    return newUser;
}

export const deleteUser = (id) =>{
    users.findByIdAndDelete(id, function(err, result) {
        if (err) {
            console.log("err");
            return false;
        }
        else{
            console.log("result");
            return true;
        }
    });
}

export const updateUser = (id,name,age,gender) =>{
    console.log("search for ID: "+id+name+age+gender);
    //missing variable handle
        return users.findByIdAndUpdate(id, {"name":name,"age":age,"gender":gender}, function(err, result) {
            if (err) {
                console.log(err);
                return;
            }
            else{
                console.log(result);
                return result;
            }
        });
}

export const getGameById = _id => {
    const filteredGames = games.filter(game => game._id === String(_id) );
    return filteredGames[0];
}

export const getPlayById = _id => {
    const filteredPlaylist = playlist.filter(play => play._id === String(_id) );
    return filteredPlaylist[0];
}
// export const getGames = () => games;

export const deleteGame = _id => {
    const cleanGames = games.filter(game => game._id !== String(_id));
    if(games.length>cleanGames.length){
            games = cleanGames;
            return true;
    }else{
        return false;
    }
}

export const addGame = (title,summary,cover_images)=>{
    const newGame = {
        _id:`${games.length}`,
        title,
        summary,
        cover_images
    };
    games.push(newGame);
    return newGame;
}

export const updateGame = (_id,newtitle,summary,cover_images)=>{
    let currentGame = games.filter(game => game._id === String(_id));
    currentGame[0].title = newtitle;
    currentGame[0].summary = summary;
    currentGame[0].cover_images = cover_images;
    return currentGame[0];
}


export const addPlay = (title, time)=>{
    const newPlay = {
        _id:`${playlist.length}`,
        title,
        time
    };
    playlist.push(newPlay);
    return newPlay;
}
