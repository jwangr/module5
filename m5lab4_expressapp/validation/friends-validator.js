import { ValidationError } from "./validation-error.js";

export default class FriendValidator {
    validateId(id) {
        if (typeof id !== 'Number') {throw new ValidationError('ID must be a number');}
    }

    validateFilter(req, res) {}
}