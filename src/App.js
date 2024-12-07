import React from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";

// Components:
import Navbar from "./Components/Global_Components/Navbar/Navbar";
import StartToday from "./Components/Global_Components/StartToday";
import Footer from "./Components/Global_Components/Footer/Footer";
// Pages:
import Home from "./Pages/Home";
import Movies from "./Pages/Movies/Movies";
import Movie from "./Pages/Movies/Movie";
import Shows from "./Pages/Shows/Shows";
import Series from "./Pages/Shows/Series";
import Support from "./Pages/Support";
import Subscriptions from "./Pages/Subscriptions";
import Search from "./Pages/Search";

function App() {

  // React Aos Init:
  React.useEffect(() => {
    Aos.init({
      duration: 700,
      easing: "ease",
      once: true,
    })
  }, []);

  return (
    <div className="App min-h-screen bg-black-color-8 text-white">
      {/* Navbar */}
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movie />} />
        <Route path="/shows" element={<Shows />} />
        <Route path="/shows/:seriesId" element={<Series />} />
        <Route path="/support" element={<Support />} />
        <Route path="/subscriptions" element={<Subscriptions />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      {/* Start Today */}
      <StartToday />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
