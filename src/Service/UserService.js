const { UserRepository } = require("../Repository/index");
const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../Config/ServerConfig");
const bcrypt = require("bcrypt");
const ValidationError = require('../Utils/ValidationError');

const userRepository = new UserRepository();

class UserService {
    async create(data) {
        try {
            const result = await userRepository.create(data);
            return result;
        } catch (error) {
            console.log(error);
            // let validationError = new ValidationError(error);
            // console.log(validationError);
            console.log("something went wrong in user service");
            throw error;
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

    async signIn(email, plainPassword) {
        const userObj = await userRepository.getUserByEmail(email);
        const hashPassword = userObj.password;
        console.log(userObj.password, plainPassword);
        if (!this.comparePassword(hashPassword, plainPassword)) {
            console.log("Incorrect password");
            throw { error: "Incorrect password" };
        }
        const newJWT = this.createToken({ email: email, id: userObj.id });
        return newJWT;
    }

    async isAuthenticated(token) {
        try {
            const response = this.verifyToken(token);
            if (!response) {
                throw { error: "invalid token" };
            }
            const user = await userRepository.getById(response.id);
            if (!user) {
                throw { error: "user does not exist anymore" };
            }
            return user.id;
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

    comparePassword(hashPassword, plainPassword) {
        try {
            const result = bcrypt.compareSync(plainPassword, hashPassword);
            return result;
        } catch (error) {
            console.log(`something went wrong in password comparision ${error}`);
            throw { error };
        }
    }

    async isAdmin(userId) {
        try {
            const response = await userRepository.isAdmin(userId);
            return response;
        } catch (error) {
            console.log(`something went wrong in password comparision ${error}`);
            throw { error };
        }
    }
}

module.exports = UserService;