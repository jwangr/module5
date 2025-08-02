import express from 'express';
import { Router } from 'express';
const router = Router();
import friends from '../models/friends.js';
import friends_Controllers from '../controllers/friends-controller.js';
const friendsControllers = new friends_Controllers();

// TODO - #1: Add support to the 'filter' endpoint for a new query parameter 'letter' which filters friends by starting letter

// default endpoint, gets all friends
router.get('/', (req, res) => {
    res.json(friends)
})

// filter endpoint, gets friends matching the gender from 'gender' query parameter ie. /friends/filter?gender=male
// 1. Add support to also filter by a starting 'letter' query parameter ie. /friends/filter?letter=R
router.get(`/filter`, (req, res) => {
    friendsControllers.filterFriends(req, res);
} )

// 2. Get information about this request from the headers
router.get('/info', (req, res) => {
    // Modify this response to just return info on the user-agent, content-type and accept headers
    friendsControllers.getHeaders(req, res);
})

// 3. Dynamic request param endpoint - get the friend matching the specific ID ie. /friends/3
router.get('/:id', (req, res, next) => {
    friendsControllers.getFriendById(req, res, next);
})

// a POST request with data sent in the body of the request, representing a new friend to add to our list
router.post('/', (req, res) => {
    friendsControllers.createFriend(req, res);
})

// 4. Complete this new route for a PUT request which will update data for an existing friend
router.put('/:id', (req, res) => {
    friendsControllers.updateFriendInfo(req, res);
})

export default router;