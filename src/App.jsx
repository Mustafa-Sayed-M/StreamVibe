import Aos from "aos";
import React from "react";
import { Route, Routes } from "react-router-dom";
// Components:
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import Subscribe from "./Components/Sections/Subscribe";
import StartFromTop from "./Pages/StartFromTop.jsx";
// Pages:
import Home from "./Pages/Home.jsx";
import Movies from "./Pages/Movies/Movies";
import Movie from "./Pages/Movies/Movie/Movie";
import Shows from "./Pages/Shows/Shows";
import Show from "./Pages/Shows/Show/Show";
import Support from "./Pages/Support";
import Subscription from "./Pages/Subscription";
import Search from "./Pages/Search.jsx";
// Context:
import { NavContextProvider } from "./Context/NavContext";
import { ImagePreviewContextProvider } from "./Context/ImagePreviewContext.jsx";

function App() {

  React.useEffect(() => { // Initialize React Aos:
    Aos.init({
      duration: 500,
      easing: "ease-in",
      once: true
    })
  }, []);

  return (
    <div className="App bg-black-color-8 text-white min-h-screen">
      <ImagePreviewContextProvider>
        <NavContextProvider>
          {/* Nav */}
          <Nav />
        </NavContextProvider>
        {/* Start From Top */}
        <StartFromTop />
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<Movie />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="/shows/:showId" element={<Show />} />
          <Route path="/support" element={<Support />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        {/* Subscribe */}
        <Subscribe />
        {/* Footer */}
        <Footer />
      </ImagePreviewContextProvider>
    </div>
  )
}

export default App;