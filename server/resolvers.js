//rollMagicItem: async (parent, )

const Post = require('./models/Post.model');
const MagicItem = require('./models/MagicItem.model');
const Treasure = require('./models/Treasure.model');
const resolvers = {
    Query: {
        hello: () => {
            return "Hello World";
        },
        getAllPosts: async () => {
            return await Post.find();
        },
        getPost: async (parent, {id}, context, info) => {
            return await Post.findById(id);
        },

        getAllMagicItems: async () => {
            return await MagicItem.find();
        },
        getMagicItem: async (parent, {id}, context, info) => {
            return await MagicItem.findById(id);
        },
        rollMagicItem: async (parent, args, context, info) => {
            return await MagicItem.findOne( { 
                table: args.table, 
                lowProbability: { $lte: args.roll }, 
                highProbability: { $gte: args.roll } 
            }); 
        },

        getAllTreasure: async () => {
            return await Treasure.find();
        },
        getTreasure: async (parent, {id}, context, info) => {
            return await Treasure.findById(id);
        },
        rollTreasure: async (parent, args, context, info) => {
            return await Treasure.findOne( { 
                challenge: args.challenge, 
                lowProbability: { $lte: args.roll }, 
                highProbability: { $gte: args.roll } 
            }); 
        },
        
    },
    Mutation: {
        createPost: async (parent, args, context, info) => {
            const { title, description } = args.post;
            const post = new Post({ title, description })
            await post.save();
            return post;
        },
        deletePost: async (parent, args, context, info) => {
            const { id } = args;
            await Post.findByIdAndDelete(id);
            return 'Ok, post deleted';
        },
        updatePost: async (parent, args, context, info) => {
            const { id } = args;
            const { title, description } = args.post;
            const updates = {}
            if (title !== undefined) {
                updates.title = title
            };
            if (description !== undefined) {
                updates.description = description
            };
            const post = await Post.findByIdAndUpdate(
                id, 
                updates,
                {new: true}
            );
            return post;
        },

        createMagicItem: async (parent, args, context, info) => {
            const { table, item, lowProbability, highProbability } = args.magicItem;
            const magicItem = new MagicItem({ table, item, lowProbability, highProbability })
            await magicItem.save();
            return magicItem;
        },
        createTreasure: async (parent, args, context, info) => {
            const { 
                challenge, 
                type,
                coin, 
                item, 
                magicItemTable,
                lowProbability, highProbability 
            } = args.treasure;
            const treasure = new Treasure({ 
                challenge, 
                type,
                coin, 
                item, 
                magicItemTable,
                lowProbability, highProbability 
            })
            await treasure.save();
            return treasure;
        },
        deleteTreasure: async (parent, args, context, info) => {
            const { id } = args;
            await Treasure.findByIdAndDelete(id);
            return 'Treasure deleted';
        },
        updateTreasure: async (parent, args, context, info) => {
            const { id } = args;
            const { 
                challenge, 
                type,
                coin, 
                item, 
                magicItemTable,
                lowProbability, highProbability 
            } = args.treasure;
            const updates = {}
            if (challenge !== undefined) {
                updates.challenge = challenge
            };
            if (type !== undefined) {
                updates.type = type
            };
            if (coin !== undefined) {
                updates.coin = coin
            };
            if (item !== undefined) {
                updates.item = item
            };
            if (magicItemTable !== undefined) {
                updates.magicItemTable = magicItemTable
            };
            if (lowProbability !== undefined) {
                updates.lowProbability = lowProbability
            };
            if (highProbability !== undefined) {
                updates.highProbability = highProbability
            };
            const treasure = await Treasure.findByIdAndUpdate(
                id, 
                updates,
                {new: true}
            );
            return treasure;
        },
        
    },
};

module.exports = resolvers;