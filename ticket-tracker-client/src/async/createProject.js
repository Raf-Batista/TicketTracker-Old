const createProject = async (userId, params) => {
    const URL = `${process.env.REACT_APP_URL}/users/${userId}/projects`;

    const response = await fetch(URL, {
        credentials: 'include', 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        method: 'POST',
        body: JSON.stringify(params)
    }); 

    const result = await response.json(); 

    if(!result.errors) return true; 

    return false;
}

export default createProject;