import {
    users,
    games,
    playlist,
    getUsers,
    getUserById,
    updateUser,
    deleteUser,
    getGames,
    getGameById,
    addUser,
    addGame,
    deleteGame,
    updateGame,
    addPlay
} from "./db"

const resolvers = {
    Query: {
        users: () => getUsers(),
        user: (_, {_id}) => getUserById(_id),
        games: () => getGames(),
        game: (_, {_id}) => getGameById(_id),
        playlist:(_,{limit}) => getPlaylist(limit),
        play:(_, {_id}) => getPlayById(_id)
    },
    Mutation:{
        addUser: (_,{name,age,gender})=> addUser(name,age,gender),
        updateUser:(_,{name})=> updateUser(name),
        deleteUser:(_,{_id})=> deleteUser(_id),
        addGame: (_,{title,summary,cover_images})=> addGame(title,summary,cover_images),
        deleteGame:(_,{_id})=> deleteGame(_id),
        updateGame:(_,{_id,title,summary,cover_images})=>updateGame(_id,title,summary,cover_images),
        addPlay: (_,{title,time})=> addPlay(title,time)
    }
};

export default resolvers;