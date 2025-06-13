const API_KEY = '8b729bb439ba4a32babfd791266d31d5';
const API_URL = `https://api.rawg.io/api/games?key=${API_KEY}&ordering=-released&page_size=6`;

async function fetchGameNews() 
{
    try 
    {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayGameNews(data.results);
    } catch (error) 
      {
        console.error('Error fetching game news:', error);
      }
}

function displayGameNews(games) 
{
    const newsContainer = document.getElementById('news-container');
    games.forEach(game => 
        {
            const newsCard = document.createElement('div');
            newsCard.classList.add('News-Card');

            newsCard.innerHTML = `
            <img src="${game.background_image}" alt="${game.name}" class="responsive-img">
            <h3>${game.name}</h3>
            <p>Released: ${game.released}</p>
            <a href="https://rawg.io/games/${game.slug}" target="_blank" class="read-more">Read More</a>`;

            newsContainer.appendChild(newsCard);
        });
}
fetchGameNews();