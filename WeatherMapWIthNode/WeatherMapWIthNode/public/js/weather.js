weatherentry = document.querySelector('#weatherForm');
weatherentry.addEventListener('submit', async function(event){
    event.preventDefault();
    
    const zip = document.querySelector('#zip').value;
    const countryCode = document.querySelector('#countryCode').value;

    if (!zip || !countryCode) {
        document.querySelector('#results').textContent = 'Please provide both zip code and country code.';
        return; 
    }

    try{
        const response = await fetch('/', {
            method:'POST',
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                zip:zip,
                countryCode:countryCode
            })
        });
        const data = await response.json();

        const resultsDiv = document.querySelector('#results');
        resultsDiv.innerHTML = `
            <p>Weather in ${data.name} (${data.sys.country}):</p>
            <p>Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;

        const body = document.body;
        body.classList.remove('fade-in');

        const weatherCondition = data.weather[0].description.toLowerCase();
        let backgroundImage;

        if (weatherCondition.includes('clear')) {
            backgroundImage = "url('images/sunny-clear.jpg')";
        } else if (weatherCondition.includes('clouds')) {
            backgroundImage = "url('images/cloudy.jpg')";
        } else if (weatherCondition.includes('rain')) {
            backgroundImage = "url('images/rain.jpg')";
        } else if (weatherCondition.includes('snow')) {
            backgroundImage = "url('images/snow.jpg')";
        } else if (weatherCondition.includes('thunderstorm')) {
            backgroundImage = "url('images/thunderstorm.jpg')";
        } else {
            backgroundImage = "url('images/default.jpg')";
        } 

        body.style.backgroundImage = backgroundImage;
        
        setTimeout(() => {
            body.classList.add('fade-in');
        }, 1000);

        // Apply fade-in effect to the results div
        resultsDiv.classList.remove('fade-in');
        setTimeout(() => {
            resultsDiv.classList.add('fade-in');
        }, 100); // Shorter delay for smooth effect

    } catch (error){
        console.error('Error fetching weather data: ', error);
        document.querySelector('#results').textContent = 'Error fetching weather data';
    }

});