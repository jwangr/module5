import friends from '../models/friends.js';
import friend_Validator from '../validation/friends-validator.js';
const friendValidator = new friend_Validator();

export default class FriendsController {
    filterFriends(req, res) {

        let filterLetter = req.query.letter;
        let filterGender = req.query.gender;
        let matchingFriends = [...friends];
        const filter = []

        if (filterGender) {
            matchingFriends = matchingFriends.filter(friend => friend.gender == filterGender);
            filter.push(filterGender);
        }

        if (filterLetter) {
            matchingFriends = matchingFriends.filter(friend => friend.name.toLowerCase().includes(filterLetter.toLowerCase()));
            filter.push(filterLetter);
        }

        if (matchingFriends.length > 0) {
            // return valid data when the gender matches 
            res.status(200).json(matchingFriends)
        } else {
            // and an error response when there are no matches
            res.status(404).json({ error: "No friends matching the filter " + filter.toString() })
        }
    }

    getHeaders(req, res) {
        res.json(
            {
                'user-agent': req.headers['user-agent'],
                'content-type': req.headers['content-type'] || 'undefined',
                'accept': req.headers['accept']
            }
        )
    }

    getFriendById(req, res, next) {
        try {
            friendValidator.validateId(req.params.id);

            let friendId = Number(req.params.id); // 'id' here will be a value matching anything after the / in the request path

            // Modify this function to find and return the friend matching the given ID, or a 404 if not found
            const index = friends.find(friend => friend.id === friendId);

            index ? res.status(200).json(index) : res.status(404).send('User not found');
        }
        catch (err) { next(err) }
    }

    createFriend(req, res) {
        let newFriend = req.body; // FIRST add this line to index.js: app.use(express.json());
        console.log(newFriend) // 'body' will now be an object containing data sent via the request body

        // we can add some validation here to make sure the new friend object matches the right pattern
        if (!newFriend.name || !newFriend.gender) {
            res.status(500).json({ error: 'Friend object must contain a name and gender' });
            return;
        }
        else if (!newFriend.id) {
            newFriend.id = friends.length + 1; // generate an ID if one is not present
        }

        // if the new friend is valid, add them to the list and return the successfully added object
        friends.push(newFriend)
        res.status(200).json(newFriend)
    }

    updateFriendInfo(req, res) {
        let friendId = Number(req.params.id);
        let updatedFriend = req.body;

        // Replace the old friend data for friendId with the new data from updatedFriend
        const index = friends.findIndex(friend => friend.id === friendId);
        if (index == -1) { return res.json({ error: `Friend's ID not found.` }) }
        friends[index] = { ...friends[index], ...updatedFriend }
        // Modify this response with the updated friend, or a 404 if not found
        res.json({ result: 'Updated friend with ID ' + friendId, data: updatedFriend })
    }
}
