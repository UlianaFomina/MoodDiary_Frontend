import api from "./api";

export const verifyEmail = async (token) => {
    let response = await api.get(`/api/v1/auth/confirm?token=${token}`);
    return response.data;
}