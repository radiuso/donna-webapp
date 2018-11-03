const TOKEN_KEY = 'token';

export const setToken = async (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const getToken = async () => (
    localStorage.getItem(TOKEN_KEY)
)