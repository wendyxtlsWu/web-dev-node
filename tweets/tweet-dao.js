const model = require('./tweet-model');

const findAllTweets = () => model.find();
const createTweet = (tweet) => model.create(tweet);
const deleteTweet = (id) => model.remove({_id: id});
const updateTweet = (id, tweet) => model.updateOne({_id: id},
    {$set: tweet});

module.exports = {
    findAllTweets, createTweet,
    deleteTweet, updateTweet
};

