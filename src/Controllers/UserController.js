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

const signIn = async (req, res) => {
    try {
        const result = await userService.signIn(req.body.email, req.body.password);
        return res.status(OK).json({
            data: result,
            err: {},
            success: true,
            message: "User signedIn successfully"
        });
    } catch (error) {
        console.log(`something went wrong in controller ${error}`);
        return res.status(INTERNAL_SERVER_ERROR).json({
            data: {},
            err: { error },
            success: false,
            message: "Can not signIn"
        });
    }
}

const isAuthenticated = async (req, res) => {
    try {
        const token = req.headers['x-access-token'];
        const result = await userService.isAuthenticated(token);
        return res.status(OK).json({
            data: result,
            err: {},
            success: true,
            message: "User is authenticated and token is valid"
        });
    } catch (error) {
        console.log(`something went wrong in controller ${error}`);
        return res.status(INTERNAL_SERVER_ERROR).json({
            data: {},
            err: { error },
            success: false,
            message: "Can not signIn"
        });
    }
}

const isAdmin = async (req, res) => {
    try {
        const result = await userService.isAdmin(req.body.id);
        if (result) return res.status(OK).json({
            data: result,
            err: {},
            success: true,
            message: "User authenticated"
        });
        return res.status(OK).json({
            data: result,
            err: {},
            success: true,
            message: "User not authenticated"
        });
    } catch (error) {
        console.log(`something went wrong in controller ${error}`);
        return res.status(INTERNAL_SERVER_ERROR).json({
            data: {},
            err: { error },
            success: false,
            message: "can not authenticated user"
        });
    }
}

module.exports = {
    create,
    destroy,
    getById,
    signIn,
    isAuthenticated,
    isAdmin
}