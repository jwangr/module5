import { ValidationError } from "./validation-error.js";

export default class FriendValidator {
    validateId(id) {
        if (typeof id !== 'Number') {throw new ValidationError('ID must be a number');}
    }

    validateFilter(category, option) {
        if (category == 'gender') {
            const options = ["male", "female"]
            if (!options.includes(option)) {throw new ValidationError("Please specify male or female.")}
        }
        else if (category == "letter") {
            if (typeof option != "string" || option.length != 1) {throw new ValidationError("Please specify ONE (1) valid letter to be filtered.")}
        };
    }

    validateCreateFriend(newFriend) {
         if (!newFriend.name || !newFriend.gender) { throw new ValidationError("Friend object must contain a name and gender")}
            
    }
}