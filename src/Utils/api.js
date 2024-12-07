const baseUrl = `https://api.themoviedb.org/3`;

// Fetch Discover Media:
export const fetchDiscoverMedia = async (mediaType, mediaGenre) => { // Expected ["movie", "tv"] and Media Genre
    let url = `${baseUrl}/discover/${mediaType}?`;
    if (mediaGenre) url += `with_genres=${mediaGenre}&`;
    const response = await fetch(`${url}api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Fetch Single Media:
export const fetchSingleMedia = async (mediaType, mediaId) => { // Expected ["movie", "tv"] and Media Id => "12345"
    const response = await fetch(`${baseUrl}/${mediaType}/${mediaId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Fetch Media Genres List:
export const fetchMediaGenresList = async (mediaType) => { // Expected ["movie", "tv"]
    const response = await fetch(`${baseUrl}/genre/${mediaType}/list?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Fetch Media Trending Day:
export const fetchMediaTrendingDay = async (mediaType) => { // Expected ["movie", "tv"]
    const response = await fetch(`${baseUrl}/trending/${mediaType}/day?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Fetch Media Top Rated:
export const fetchMediaTopRated = async (mediaType) => { // Expected ["movie", "tv"]
    const response = await fetch(`${baseUrl}/${mediaType}/top_rated?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Fetch Media Popular:
export const fetchMediaPopular = async (mediaType) => { // Expected ["movie", "tv"]
    const response = await fetch(`${baseUrl}/${mediaType}/popular?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Fetch Media Recommendations:
export const fetchMediaRecommendations = async (mediaType, mediaId) => { // Expected ["movie", "tv"] and Media Id => 12345
    const response = await fetch(`${baseUrl}/${mediaType}/${mediaId}/recommendations?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Fetch Media Images:
export const fetchMediaImages = async (mediaType, mediaId) => { // Expected ["movie", "tv"] and Media Id => 12345
    const response = await fetch(`${baseUrl}/${mediaType}/${mediaId}/images?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Fetch Media Reviews:
export const fetchMediaReviews = async (mediaType, mediaId) => { // Expected ["movie", "tv"] and Media Id => 12345
    const response = await fetch(`${baseUrl}/${mediaType}/${mediaId}/reviews?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};
// Search Media:
export const searchMedia = async (query, type, year, language) => {
    let url = `${baseUrl}/search/${type}?`;
    if (type !== 'multi') {
        url += `&year=${year}&`;
    }

    const response = await fetch(`${url}language=${language}&query=${query}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();

};