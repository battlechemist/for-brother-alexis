export function createServerError(error) {
    return {
        code: error.response.status,
        message: error.response.statusText,
    };
}