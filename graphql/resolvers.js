import {
    users,
    games,
    playlist,
    getUserById,
    getGames,
    getGameById,
    addGame,
    deleteGame,
    updateGame,
    addPlay
} from "./db"

const resolvers = {
    Query: {
        users: () => users,
        user: (_, {id}) => getUserById(id),
        games: () => games,
        game: (_, {id}) => getGameById(id),
        playlist:(_,{limit}) => getPlaylist(limit),
        play:(_, {id}) => getPlayById(id)
    },
    Mutation:{
        addGame: (_,{title,summary,cover_images})=> addGame(title,summary,cover_images),
        deleteGame:(_,{id})=> deleteGame(id),
        updateGame:(_,{id,title,summary,cover_images})=>updateGame(id,title,summary,cover_images),
        addPlay: (_,{title,time})=> addPlay(title,time)
    }
};

export default resolvers;