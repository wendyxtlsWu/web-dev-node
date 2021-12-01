const model = require('./profile-model');

const findProfileById = (id) => model.findById(id);
const findProfile = () => model.find();
const updateProfile = (id, profile) => model.updateOne({_id: id},
    {$set: profile});
const findAllProfile = () => model.find();

module.exports = {
    findProfileById, updateProfile, findProfile, findAllProfile
};
