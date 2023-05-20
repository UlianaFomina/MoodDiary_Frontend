import api from "./api";

const attachStory = async (userId, content) => {
    const body = {
        content: content,
        userId: userId
    }
    console.log(body)
    await api.post(`/api/v1/story`, body)
}

export {attachStory};
