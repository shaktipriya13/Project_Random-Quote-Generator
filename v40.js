let quotesArray = [
    { quote: "Believe you can and you’re halfway there.", author: "Theodore Roosevelt" },
    { quote: "Life can only be understood backwards; but it must be lived forwards.", author: "Søren Kierkegaard" },
    { quote: "If you spend too much time thinking about a thing, you’ll never get it done.", author: "Bruce Lee" },
    { quote: "Life is like a box of chocolates. You never know what you’re going to get.", author: "Forrest Gump" },
    { quote: "The quality of your life is directly related to the amount of uncertainty you can comfortably handle.", author: "Tony Robbins" },
    { quote: "A happy life consists in the tranquility of mind.", author: "Marcus Tullius Cicero" },
    { quote: "Almost nothing material is needed for a happy life, for he who has understood existence.", author: "Marcus Aurelius" },
    { quote: "The realization that life is absurd cannot be an end, but only a beginning.", author: "Albert Camus" },
    { quote: "Not how long, but how well you have lived is the main thing.", author: "Seneca" },
    { quote: "Be happy for this moment. This moment is your life.", author: "Omar Khayyam" }
    // Add more quotes as needed
];

let backgroundsArray = [
    'https://wallup.net/wp-content/uploads/2016/05/24/361241-nature-landscape-trees-river-clouds-photography-grass-sunset.jpg',
    'http://www.pixelstalk.net/wp-content/uploads/2016/08/Cool-nature-backgrounds-hd-resolution-1920x1080.jpg',
    'https://cdn.geckoandfly.com/wp-content/uploads/2013/11/Dreams1.jpg',
    'http://i1.ytimg.com/vi/2unltS3XgGo/maxresdefault.jpg',
    'http://piximus.net/media/5851/inspirational-desktop-wallpapers-34.jpg',
    'http://www.designyourway.net/blog/wp-content/uploads/2016/07/Motivational-wallpaper-quotes-7.jpg',
    'https://hdqwalls.com/download/sea-shore-waves-at-night-time-4k-yr-2560x1440.jpg','https://wallpapercave.com/wp/t1ZMnHR.jpg',
    'https://www.traveldailymedia.com/assets/2018/09/Extreme-Adventure-Activity_Rock-Climbing.jpg',
    'https://www.aacle.org/wp-content/uploads/2018/07/adventure-mountain.jpg',
    'https://getwallpapers.com/wallpaper/full/5/7/0/188889.jpg',
    'http://www.pixelstalk.net/wp-content/uploads/2016/04/Photos-images-space-wallpaper-HD.jpg'
    // Add more image URLs as needed
];

function generateQuote() {
    const randomQuoteIndex = Math.floor(Math.random() * quotesArray.length);
    const randomQuote = quotesArray[randomQuoteIndex];
    
    const randomBackgroundIndex = Math.floor(Math.random() * backgroundsArray.length);
    const randomBackground = backgroundsArray[randomBackgroundIndex];
    
    document.getElementById('quote').innerHTML = `"${randomQuote.quote}"`;
    document.getElementById('author').innerHTML = `- ${randomQuote.author}`;
    
    document.body.style.backgroundImage = `url('${randomBackground}')`;
}

// Generate the first quote when the page loads
generateQuote();