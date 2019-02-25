import fetch from 'node-fetch';
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const API_URL = ""

export const getGames = (limit) => {
    let REQUEST_URL = API_URL;
    if(limit>0){
        REQUEST_URL += `limit=${limit}`;
    }
    return fetch(`${REQUEST_URL}`)
    .then(res => res.json())
    .then(json => json.data.games);
}

export const users = [
    {
        id:"0",
        name: "zombie",
        age: 29,
        gender: "male"
    },
    {
        id:"1",
        name: "zombie2",
        age: 329,
        gender: "male"
    },
    {
        id:"2",
        name: "zombie3",
        age: 229,
        gender: "male"
    },
    {
        id:"3",
        name: "zombie4",
        age: 429,
        gender: "male"
    },
    {
        id:"4",
        name: "zombie5",
        age: 219,
        gender: "male"
    },
    {
        id:"5",
        name: "zombie6",
        age: 212,
        gender: "male"
    },
];

export let games = [
    {
        id:"0",
        title:"Game1"
    },
    {
        id:"1",
        title:"Game2"
    },
    {
        id:"2",
        title:"Game3"
    },
    {
        id:"3",
        title:"Game4"
    },
    {
        id:"4",
        title:"Game5"
    }
];

export let playlist =[];

export const getUserById = id => {
    const filteredUsers = users.filter(user => user.id === String(id) );
    return filteredUsers[0];
}

export const getGameById = id => {
    const filteredGames = games.filter(game => game.id === String(id) );
    return filteredGames[0];
}

export const getPlayById = id => {
    const filteredPlaylist = playlist.filter(play => play.id === String(id) );
    return filteredPlaylist[0];
}
// export const getGames = () => games;

export const deleteGame = id => {
    const cleanGames = games.filter(game => game.id !== String(id));
    if(games.length>cleanGames.length){
            games = cleanGames;
            return true;
    }else{
        return false;
    }
}

export const addGame = (title,summary,cover_images)=>{
    const newGame = {
        id:`${games.length}`,
        title,
        summary,
        cover_images
    };
    games.push(newGame);
    return newGame;
}

export const updateGame = (id,newtitle,summary,cover_images)=>{
    let currentGame = games.filter(game => game.id === String(id));
    currentGame[0].title = newtitle;
    currentGame[0].summary = summary;
    currentGame[0].cover_images = cover_images;
    return currentGame[0];
}


export const addPlay = (title, time)=>{
    const newPlay = {
        id:`${playlist.length}`,
        title,
        time
    };
    playlist.push(newPlay);
    return newPlay;
}
