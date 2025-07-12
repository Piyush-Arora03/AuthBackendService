const { canTreatArrayAsAnd } = require("sequelize/lib/utils");
const { User } = require("../Models/index");

class UserRepository {
    async create(data) {
        try {
            console.log(User);
            console.log(data);
            const result = await User.create(data);
            return result;
        } catch (error) {
            console.log(`something went wrong in user repo ${error}`);
            throw { error };
        }
    }

    async delete(UserId) {
        try {
            const result = await User.destroy({
                where: {
                    id: UserId
                }
            });
            return true;
        } catch (error) {
            console.log(`something went wrong in user repo ${error}`);
            throw { error };
        }
    }

    async getById(userId) {
        try {
            const result = await User.findByPk(userId, {
                attributes: ['email', 'id']
            });
            console.log(result);
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
}
module.exports = UserRepository;