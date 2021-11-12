let profile = require('../data/profile.json');

module.exports = (app) => {

    const getCurrentProfile = (req, res) => {
        console.log(profile);
        res.json(profile);
    }

    app.get('/api/profile', getCurrentProfile);


    const updateCurrentProfile = (req, res) => {
        console.log(req.body);
        const location = req.body.location;
        const website = req.body.website;
        const dateofBirth = req.body.dateOfBirth;
        const bio = req.body.bio;
        const firstname = req.body.firstName;
        const lastname = req.body.lastName;
        const newProfile = {
            ...profile,
            firstName: firstname,
            lastName: lastname,
            bio: bio,
            website: website,
            location: location,
            dateOfBirth: dateofBirth,
        }
        profile = newProfile;
        res.json(profile);
    }
    app.put('/api/profile', updateCurrentProfile);
}
