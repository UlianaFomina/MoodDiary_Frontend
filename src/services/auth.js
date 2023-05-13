export const registrationApi = async (formData, method) => {
    formData.set('imageUrl', '');
    const formJson = Object.fromEntries(formData.entries());
    let response = await fetch("https://mooddiarybackend-production.up.railway.app/api/v1/auth/registration", {
        method: method,
        body: JSON.stringify(formJson),
        headers: {
            "Content-Type": "application/json",
        }
    });

    return await response.json();
}
export const authenticateApi = async (formData, method) => {
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson)
    let response = await fetch("https://mooddiarybackend-production.up.railway.app/api/v1/auth/authenticate", {
        method: method,
        body: JSON.stringify(formJson),
        headers: {
            "Content-Type": "application/json",
        }
    });

    return await response.json();
}
export const getErrMess = (response, setFunc) => {
    if (response !== undefined) {
        let mess
        if (response.error !== undefined) {
            mess = Object.values(response.error).join('')
            setFunc(mess)
        } else {
            mess = Object.values(response.errors[0].message).join('')
            setFunc(mess)
        }
    }

}
const demoRequestApi = async () => {
    let response = await fetch("https://mooddiarybackend-production.up.railway.app/api/v1/demo");

    return await response.json();
}

export {demoRequestApi};
