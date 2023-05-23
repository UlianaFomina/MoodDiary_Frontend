import api from "./api";

export const getById = async (id) => {
    let response = await api.get(`/api/v1/user/${id}`);

    return {
        username: response.data.username,
        email: response.data.email,
        dateOfBirth: response.data.dateOfBirth,
        about: response.data.about,
        stories: response.data.stories,
        imageUrl: response.data.imageUrl
    };
}

export const attachAvatar = async (id, file) => {
    let formData = new FormData();
    formData.append('avatar', file);
    formData.append('id', id);

    return await api.post('/api/v1/user/avatar', formData);
}
