const URL = `${process.env.REACT_APP_URL}/users`;
console.log(URL)

const signup = async (params) => {
    try {
        const response = await fetch(URL, {
            headers: {
                "Content-Type": "application/json"
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