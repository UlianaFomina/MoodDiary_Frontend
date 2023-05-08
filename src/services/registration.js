export const registrationApi = async (formJson, method) => {
    return await fetch('https://mooddiarybackend-production.up.railway.app/api/v1/auth/registration', {
        method: method,
        body: JSON.stringify(formJson),
        headers: {
            "Content-Type": "application/json",
        }
    });
}