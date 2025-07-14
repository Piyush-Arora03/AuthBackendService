const { User, Role } = require("../Models/index");
const ValidationError = require('../Utils/ValidationError');

class UserRepository {
    async create(data) {
        try {
            const result = await User.create(data);
            console.log(result);
            return result;
        } catch (error) {
            if (error.name == 'SequelizeUniqueConstraintError') throw new ValidationError(error);
            throw error;
        }
    }

    async delete(UserId) {
        try {
            await User.destroy({
                where: {
                    id: UserId
                }
            });
            return true;
        } catch (error) {
            console.log(`something went wrong in user repo ${error}`);
            throw error;
        }
    }

    async getById(userId) {
        try {
            const result = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            return result;
        } catch (error) {
            console.log(`something went wrong in user repo ${error}`);
            throw { error };
        }
    }

    async getUserByEmail(userEmail) {
        try {
            const result = await User.findOne({
                where: {
                    email: userEmail
                }
            });
            return result;
        } catch (error) {
            console.log(`something went wrong in user repo ${error}`);
            throw { error };
        }
    }

    async isAdmin(userId) {
        try {
            console.log(userId);
            const user = await User.findByPk(userId);
            const role = await Role.findOne({
                where: {
                    name: 'ADMIN'
                }
            });
            return user.hasRole(role);
        } catch (error) {
            console.log(`something went wrong in user repo ${error}`);
            throw { error };
        }
    }
}

module.exports = UserRepository;