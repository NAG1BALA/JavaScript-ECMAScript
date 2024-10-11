async function getUserData(id) {
    try {
        const promise = await fetch(`https://api.example.com/users'${id}`);
        if (!response.ok) {
            throw new Error('User not found')
        }
        const UserData = await response.json();
        return UserData;
    } catch (error) {
        return Promise.reject(error.message);
    }
}



getUserData(1)
