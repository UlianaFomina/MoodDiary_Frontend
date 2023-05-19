import jwt from "jsonwebtoken";

export const validate = (token) => {
    try {
        let jwtsecret = '4226452948404D635166546A576D5A7134743777217A25432A462D4A614E6452';
        jwt.verify(token, jwtsecret, {algorithms: ['HS256']});
        return true;
    } catch (error) {
        return false;
    }
}

export const extract = (token) => {
    try {
        const decodedToken = jwt.decode(token);
        const {iat, exp, sub, id} = decodedToken

        return {
            createdAt: iat,
            expiredAt: exp,
            username: sub,
            id: id
        }
    } catch (error) {
        return null;
    }
}
