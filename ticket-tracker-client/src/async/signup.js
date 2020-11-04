const URL = `${process.env.REACT_APP_URL}/users`;

const signup = async (params) => {
    console.log(params)

    try {
        const response = await fetch(URL, {
            credentials: 'include',
            headers: {
                "Content-Type": "application/json", 
                "Accept": "application/json",
            },
            method: "POST",
            body: JSON.stringify(params)
        });

        const result = await response.json();

        if(!result.errors) return result; 

        return result.errors;
    } catch (error) {
        console.log(error)
    }
};

export default signup;