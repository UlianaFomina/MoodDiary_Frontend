import api from "./api";

const attachStory = async (userId, content) => {
    await api.post(`/api/v1/story`, {
        content: content,
        userId: userId
    })
}

export {attachStory};
