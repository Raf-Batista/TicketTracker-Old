const complete = async (params) => {
    const URL = `${process.env.REACT_APP_URL}/tasks/${params}`;

    const response = await fetch(URL, {
        credentials: 'include', 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        method: 'PATCH',
    }); 

    const result = await response.json(); 

    if(!result.errors) return true; 

    return false;
}

export default complete;