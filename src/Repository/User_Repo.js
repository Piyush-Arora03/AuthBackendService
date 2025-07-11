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
}
module.exports = UserRepository;