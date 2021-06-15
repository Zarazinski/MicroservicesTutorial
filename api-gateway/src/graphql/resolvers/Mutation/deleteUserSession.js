import UsersService from "../../../adapters/UsersService";

const deleteUserSessionResolver = async (obj, { sessionId }, context) => {
    const userSession = await UsersService.deleteUserSession({ sessionId });

    context.res.clearCookie("userSessionId")

    return userSession;
}

export default deleteUserSessionResolver;
