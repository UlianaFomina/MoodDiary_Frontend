import api from "./api";

const getLastDays = async (userId, lastDays) => {
    let response = await api.get(`/api/v1/story/statistics/${userId}/${lastDays}/graph`);
    return response.data;
}

export {getLastDays}
