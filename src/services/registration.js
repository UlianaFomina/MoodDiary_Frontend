const registrationApi = async (formJson, method) => {
    let response = await fetch("https://mooddiarybackend-production.up.railway.app/api/v1/auth/registration", {
        method: method,
        body: JSON.stringify(formJson),
        headers: {
            "Content-Type": "application/json",
        }
    });

    return await response.json();
}

const demoRequestApi = async () => {
    let response = await fetch("https://mooddiarybackend-production.up.railway.app/api/v1/demo");

    return await response.json();
}

export {demoRequestApi, registrationApi};
