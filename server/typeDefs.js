const {  gql } = require('apollo-server-express');

const typeDefs = gql`
    type Post {
        id: ID
        title: String
        description: String
    }

    type MagicItem {
        id: ID
        table: String
        item: String
        lowProbability: Int
        highProbability: Int
    }

    type Coin {
        id: ID
        type: String
        diceSize: Int
        diceNumber: Int
    }

    type Item {
        id: ID
        type: String
        value: Int
        diceSize: Int
        diceNumber: Int
    }

    type MagicItemTable {
        id: ID
        type: String
        diceSize: Int
        diceNumber: Int
    }

    type Treasure {
        id: ID
        challenge: String
        type: String
        coin: Coin
        item: Item
        magicItemTable: MagicItemTable
        lowProbability: Int
        highProbability: Int
    }

    type Query {
        hello: String
        getAllPosts: [Post]
        getPost(id: ID): Post
        getMagicItem(id:ID): MagicItem 
        getAllMagicItems: [MagicItem]
        rollMagicItem(table: String, roll:Int): MagicItem
        getTreasure(id:ID): Treasure 
        getAllTreasure: [Treasure]
        rollTreasure(challenge: String, roll:Int): Treasure
    }

    input MagicItemInput {
        table: String
        item: String
        lowProbability: Int
        highProbability: Int
    }

    input CoinInput {
        type: String
        diceSize: Int
        diceNumber: Int
    }

    input ItemInput {
        type: String
        value: Int
        diceSize: Int
        diceNumber: Int
    }

    input MagicItemTableInput {
        type: String
        diceSize: Int
        diceNumber: Int
    }

    input TreasureInput {
        challenge: String
        type: String
        coin: CoinInput
        item: ItemInput
        magicItemTable: MagicItemTableInput
        lowProbability: Int
        highProbability: Int
    }

    

    input PostInput {
        title: String
        description: String
    }

    type Mutation {
        createPost(post: PostInput): Post
        createMagicItem(magicItem: MagicItemInput): MagicItem
        createTreasure(treasure: TreasureInput): Treasure
        deleteTreasure(id: ID): String
        updateTreasure(id: ID, treasure: TreasureInput): Treasure
        deletePost(id: ID): String
        updatePost(id: ID, post: PostInput): Post
    }
`;

module.exports = typeDefs;