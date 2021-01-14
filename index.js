function submitData(name, email) {
    let formData = {
        name,
        email
    }

    let configObj = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    }
    
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        document.body.innerHTML = object["id"];
    })
    .catch(function(error) {
        alert("Error")
        document.body.innerHTML = error.message;
    })
}