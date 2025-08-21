document.addEventListener('DOMContentLoaded', async () => {
    const url = 'http://192.168.x.x/path'; // Replace with the actual path
    const username = 'admin';
    const password = 'salla';

    // Encode the username and password to Base64
    const headers = new Headers();
    const encodedCredentials = btoa(`${username}:${password}`);
    headers.set('Authorization', 'Basic ' + encodedCredentials);

    try {
        const response = await fetch(url, { method: 'GET', headers: headers });

        if (response.ok) {
            const data = await response.text();
            document.getElementById('result').innerText = data;
        } else {
            document.getElementById('result').innerText = 'Failed to fetch data: ' + response.status;
        }
    } catch (error) {
        document.getElementById('result').innerText = 'Error: ' + error.message;
    }
});
