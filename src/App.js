import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Aos from "aos";

// Components:
import Navbar from "./Components/Global_C/Navbar/Navbar";
import Footer from "./Components/Global_C/Footer/Footer";
import ImagePreview from "./Components/Global_C/ImagePreview";

// Pages:
import Home from "./Pages/Home/Home";
import MoviesAndShows from "./Pages/MoviesAndShows/MoviesAndShows";
import Support from "./Pages/Support/Support";
import Subscriptions from "./Pages/Subscriptions/Subscriptions";
import Movie from "./Pages/Movie/Movie";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search";
import { GET_TRENDING_API } from "./Store/slices/trendingSlice";

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({
      easing: "ease",
      duration: 600,
      offset: 50,
      once: true
    })
  }, []);

  useEffect(() => {
    dispatch(GET_TRENDING_API());
  }, [dispatch]);

  return (
    <div className="App min-h-screen bg-body-color text-white">
      {/* Image Preview */}
      <ImagePreview />
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies-and-shows" element={<MoviesAndShows />} />
        <Route path="/movies-and-shows/movie/:movieId" element={<Movie />} />
        <Route path="/movies-and-shows/series/:seriesId" element={<Series />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;