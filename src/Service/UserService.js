const { UserRepository } = require("../Repository/index");

const userRepository = new UserRepository();

class UserService {
    async create(data) {
        try {
            const result = await userRepository.create(data);
            return result;
        } catch (error) {
            console.log("something went wrong in user service");
            throw { error };
        }
    }
    
    async destroy(userId) {
        try {
            const result = await userRepository.destroy(userId);
            return result;
        } catch (error) {
            console.log("something went wrong in user service");
            throw { error };
        }
    }
}

module.exports = UserService;