const { UserService } = require("../Service/index");
const { OK, INTERNAL_SERVER_ERROR } = require("../Utils/Response");

const userService = new UserService();

const create = async (req, res) => {
    try {
        console.log(req.body);
        const result = await userService.create(req.body);
        return res.status(OK).json({
            data: result,
            err: {},
            success: true,
            message: "User created successfully"
        });
    } catch (error) {
        console.log(`something went wrong in controller ${error}`);
        return res.status(INTERNAL_SERVER_ERROR).json({
            data: {},
            err: { error },
            success: false,
            message: "Can not create user"
        });
    }
}

const destroy = async (req, res) => {
    try {
        const result = await userService.destroy(req.params.id);
        return res.status(OK).json({
            data: result,
            err: {},
            success: true,
            message: "User deleted successfully"
        });
    } catch (error) {
        console.log(`something went wrong in controller ${error}`);
        return res.status(INTERNAL_SERVER_ERROR).json({
            data: {},
            err: { error },
            success: false,
            message: "Can not delete user"
        });
    }
}

const getById = async (req, res) => {
    try {
        console.log(req.query.id);
        const result = await userService.getById(req.query.id);
        return res.status(OK).json({
            data: result,
            err: {},
            success: true,
            message: "User fetched successfully"
        });
    } catch (error) {
        console.log(`something went wrong in controller ${error}`);
        return res.status(INTERNAL_SERVER_ERROR).json({
            data: {},
            err: { error },
            success: false,
            message: "Can not delete user"
        });
    }
}

module.exports = {
    create,
    destroy,
    getById
}