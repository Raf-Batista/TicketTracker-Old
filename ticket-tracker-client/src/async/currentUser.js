const URL = `${process.env.REACT_APP_URL}/current_user`;

const currentUser = async () => {
    try {
        const response = await fetch(URL, {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
        });

        const result = await response.json();

        if(!result.errors) return result; 

        return false;

    } catch (error) {
        console.log(error)
    }
};

export default currentUser;