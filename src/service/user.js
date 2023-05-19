import api from "./api";

export const getById = async (id) => {
    let response = await api.get(`/api/v1/user/${id}`);

    return {
        username: response.data.username,
        email: response.data.email,
        dateOfBirth: response.data.dateOfBirth,
        about: response.data.about
    };
}
