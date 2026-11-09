const express = request('express');
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});              
console.log('Server started successfully');
console.log('Listening on http://localhost:3000');
console.log('Press Ctrl+C to stop the server');
console.log('Server is ready to accept requests');
console.log('Server is running in development mode');
console.log('Server is running in production mode');

document.getElementById('startButton').addEventListener('click', () => {
    fetch('http://localhost:3000/start')
        .then(response => response.json())  
        .then(data => { 
            console.log('Server started successfully');
            console.log('Listening on http://localhost:3000');
            console.log('Press Ctrl+C to stop the server'); 
            console.log('Server is ready to accept requests');
            console.log('Server is running in development mode');
            console.log('Server is running in production mode');
        };
    }    
}