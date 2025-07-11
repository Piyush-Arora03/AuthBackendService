const { UserRepository } = require("../Repository/index");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../Config/ServerConfig");

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

    async getById(userId) {
        try {
            const result = await userRepository.getById(userId);
            return result;
        } catch (error) {
            console.log("something went wrong in user service");
            throw { error };
        }
    }

    createToken(user) {
        try {
            const result = jwt.sign(user, JWT_KEY, { expiresIn: '1h' });
            return result;
        } catch (error) {
            console.log("something went wrong in user service");
            throw { error };
        }
    }

    verifyToken(token) {
        try {
            const result = jwt.verify(token, JWT_KEY);
            return result;
        } catch (error) {
            console.log("something went wrong in user service");
            throw { error };
        }
    }
}

module.exports = UserService;