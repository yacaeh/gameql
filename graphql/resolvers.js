import {
    users,
    getUserById,
    getGames,
    getGameById,
    addGame,
    deleteGame,
    updateGame
} from "./db"

const resolvers = {
    Query: {
        users: () => users,
        user: (_, {id}) => getUserById(id),
        games: (_,{limit,rating}) => getGames(limit,rating),
        game: (_, {id}) => getGameById(id)
    },
    Mutation:{
        addGame: (_,{name,score})=> addGame(name, score),
        deleteGame:(_,{id})=> deleteGame(id),
        updateGame:(_,{id,name,score})=>updateGame(id,name,score)
    }
};

export default resolvers;