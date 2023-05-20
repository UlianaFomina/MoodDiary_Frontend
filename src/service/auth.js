import api from "./api";

export const registrationApi = async (formData) => {
    formData.set('imageUrl', '');
    const formJson = Object.fromEntries(formData.entries());
    const response = await api.post("/api/v1/auth/registration", JSON.stringify(formJson), {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return await response.data;
}
export const authenticateApi = async (formData) => {
    const formJson = Object.fromEntries(formData.entries());
    const response = await api.post("/api/v1/auth/authenticate", JSON.stringify(formJson), {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    return await response.data;
}
export const getErrMess = (response, setFunc) => {
    let errorResponse;
    if (response !== undefined) {
        errorResponse = response.error || response.errors;
        if (errorResponse !== undefined) {
            setFunc(errorResponse[0].message || errorResponse)
        }
    }
    return errorResponse;
}
