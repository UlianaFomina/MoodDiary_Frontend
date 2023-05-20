export const handleException = (response, setFunc) => {
    let errorResponse;
    if (response !== undefined) {
        errorResponse = response.error || response.errors;
        if (errorResponse !== undefined) {
            setFunc(errorResponse[0].message || errorResponse)
        }
    }
    return errorResponse;
}
