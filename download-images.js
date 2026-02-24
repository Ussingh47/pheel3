const fs = require('fs');
const https = require('https');

const downloads = [
    // Red Sea Film (New Candidate)
    {
        url: 'https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=1200',
        dest: 'public/assets/red-sea-film.jpg'
    },
    // Diriyah Season (New Candidate)
    {
        url: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200',
        dest: 'public/assets/diriyah-season.jpg'
    }
];

const downloadImage = (url, dest) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
        if (response.statusCode === 200) {
            response.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log(`Downloaded ${dest}`);
            });
        } else if (response.statusCode === 302 || response.statusCode === 301) {
            if (response.headers.location) {
                console.log(`Redirecting...`);
                downloadImage(response.headers.location, dest);
            }
        } else {
            console.error(`Failed to download ${dest}: Status Code ${response.statusCode}`);
            if (response.headers.location) {
                console.log(`Attempting redirect manually to ${response.headers.location}`);
                downloadImage(response.headers.location, dest);
            }
        }
    }).on('error', (err) => {
        fs.unlink(dest, () => { });
        console.error(`Error downloading ${dest}: ${err.message}`);
    });
};

downloads.forEach(item => downloadImage(item.url, item.dest));
