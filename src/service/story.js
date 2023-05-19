import api from "./api";

const getPostsByUserId = async (userId) => {
    let response = await api.get(`/api/v1/story/${userId}`);

    return response.data;
}

const attachPostToUser = async (userId, content) => {
    const body = {
        content: content,
        userId: userId
    }
    console.log(body)
    await api.post(`/api/v1/story`, body)
}

export {getPostsByUserId, attachPostToUser};
