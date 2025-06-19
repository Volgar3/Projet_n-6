export function getBestFilms() {
    fetch('http://localhost:8000/api/v1/titles/?page_size=6&sort_by=-avg_vote') // change to your actual local URL and port
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // or response.text(), depending on what your server returns
        })
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
            document.getElementById('output').textContent += "=========== DETAIL ===========";
            fetch('http://localhost:8000/api/v1/titles/7822474') // change to your actual local URL and port
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.json(); // or response.text(), depending on what your server returns
                })
                .then(data => {
                    document.getElementById('output').textContent += JSON.stringify(data, null, 2);
                })
                .catch(error => {
                    document.getElementById('output').textContent = 'Error: ' + error;
                });
        })
        .catch(error => {
            document.getElementById('output').textContent = 'Error: ' + error;
        });
}