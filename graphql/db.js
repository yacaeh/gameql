import fetch from 'node-fetch';
const API_URL = ""

export const getGames = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if(limit>0){
        REQUEST_URL += `limit=${limit}`;
    }
    if(rating > 0){
        REQUEST_URL += `&minimum_rating=${rating}`;
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
        id:0,
        name:"Game1",
        score:9
    },
    {
        id:1,
        name:"Game2",
        score:2
    },
    {
        id:2,
        name:"Game3",
        score:7
    },
    {
        id:3,
        name:"Game4",
        score:5
    },
    {
        id:4,
        name:"Game5",
        score:10
    }
];

export const getUserById = id => {
    const filteredUsers = users.filter(user => user.id === String(id) );
    return filteredUsers[0];
}

export const getGameById = id => {
    const filteredGames = games.filter(game => game.id === id );
    return filteredGames[0];
}


// export const getGames = () => games;

export const deleteGame = id => {
    const cleanGames = games.filter(game => game.id !== id);
    if(games.length>cleanGames.length){
            games = cleanGames;
            return true;
    }else{
        return false;
    }
}

export const addGame = (name, score)=>{
    const newGame = {
        id:`${games.length}`,
        name,
        score
    };
    games.push(newGame);
    return newGame;
}

export const updateGame = (id,name,score)=>{
    const currentGame = games.filter(game => game.id ===id);
    currentGame[0].name = name;
    currentGame[0].score = score;
    return currentGame[0];
}