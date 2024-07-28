console.log("Let's get this party started!");

document.getElementById('giphy-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const searchTerm = document.getElementById('search-term').value;
    const apiKey = 'MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym';
    const url = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`;

    axios.get(url)
        .then(response => {
            const gifs = response.data.data;
            const gifsContainer = document.getElementById('gifs-container');

            // Append a GIF to the container
            if (gifs.length > 0) {
                const gifUrl = gifs[0].images.fixed_height.url;
                const img = document.createElement('img');
                img.src = gifUrl;
                img.alt = 'GIF';
                gifsContainer.appendChild(img);
            } else {
                console.log('No GIFs found');
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

document.getElementById('clear-gifs').addEventListener('click', function() {
    const gifsContainer = document.getElementById('gifs-container');
    gifsContainer.innerHTML = ''; // Clears all GIFs
});