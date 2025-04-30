const baseApi = `https://api.themoviedb.org/3`;
export const imageApi = {
    baseEndpoint: `https://image.tmdb.org/t/p`,
    posterUrl: '/original/',
    backdropUrl: '/w500/',
};
const apiKey = import.meta.env.VITE_API_KEY;

const fetchData = async (endpoint) => {
    try {
        const res = await fetch(endpoint);
        return await res.json();
    } catch (e) {
        console.log(e);
    }
}

export const discoverMedia = async (mediaType, genres) => {
    let url = `${baseApi}/discover/${mediaType}?api_key=${apiKey}`;
    if (genres) url += `&with_genres=${genres}`;
    return await fetchData(url);
};
export const fetchSingleMedia = async (mediaType, mediaId) => {
    return await fetchData(`${baseApi}/${mediaType}/${mediaId}?api_key=${apiKey}`);
};
export const fetchGenres = async (mediaType) => {
    return await fetchData(`${baseApi}/genre/${mediaType}/list?api_key=${apiKey}`);
};
export const fetchTopRated = async (mediaType) => {
    return await fetchData(`${baseApi}/${mediaType}/top_rated?api_key=${apiKey}`);
};
export const fetchPopular = async (mediaType) => {
    return await fetchData(`${baseApi}/${mediaType}/popular?api_key=${apiKey}`);
};
export const fetchUpcoming = async (mediaType) => {
    return await fetchData(`${baseApi}/${mediaType}/upcoming?api_key=${apiKey}`);
};
export const fetchOnAir = async (mediaType) => {
    return await fetchData(`${baseApi}/${mediaType}/on_the_air?api_key=${apiKey}`);
};
export const fetchRecommendations = async (mediaType, mediaId) => {
    return await fetchData(`${baseApi}/${mediaType}/${mediaId}/recommendations?api_key=${apiKey}`);
};
export const fetchImages = async (mediaType, mediaId) => {
    return await fetchData(`${baseApi}/${mediaType}/${mediaId}/images?api_key=${apiKey}`);
};
export const fetchVideos = async (mediaType, mediaId) => {
    return await fetchData(`${baseApi}/${mediaType}/${mediaId}/videos?api_key=${apiKey}`);
};
export const fetchReviews = async (mediaType, mediaId) => {
    return await fetchData(`${baseApi}/${mediaType}/${mediaId}/reviews?api_key=${apiKey}`);
};
export const fetchTrending = async (mediaType, trendingTime = 'day') => {
    return await fetchData(`${baseApi}/trending/${mediaType}/${trendingTime}?api_key=${apiKey}`);
};
export const fetchSeasonEpisodes = async (seriesId, seasonNum) => {
    return await fetchData(`${baseApi}/tv/${seriesId}/season/${seasonNum}?api_key=${apiKey}`);
};