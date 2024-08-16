function getApiData (){

    // Get the <ul> tag
    const ul = document.getElementById("list");
    
    // fetch data from API
    fetch("https://jsonplaceholder.typicode.com/users")

    .then(response => response.json())

    
    .then(res => {

        // LOOP through the API response
        
        res.forEach((user) => {

            // Create a new <li> tag
            const li = document.createElement('li');

            // Create a new <div> tag
            const div = document.createElement('div');

            // Add API data to the <div>
            div.innerHTML =
            `
            <h1>${user.id}</h1>
            <h3>${user.name}</h3>
            <small>${user.email}</small>
            `;

            li.appendChild(div);
            ul.appendChild(li);

        });
    })

    // Catch and display possible errors.
    
    .catch(error => {
        console.error('Error fetching data:', error);
    });
}

// Call the function
getApiData();