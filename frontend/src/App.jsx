import "./App.css";

// React Router se BrowserRouter ko 'Router' naam se, aur Routes & Route ko import kar rahe hain
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// react-hot-toast se Toaster component import kar rahe hain (jo notifications dikhata hai)
import { Toaster } from "react-hot-toast";
import Home from "../pages/Home";
import Success from "../pages/Success";
import NotFound from "../pages/NotFound";

// App component define kar rahe hain (main component of the application)
const App = () => {
  return (
    // Router wrap karta hai poore app ko taaki routing enable ho
    <Router>

      {/* Routes ke andar hum saare Route define karte hain */}
      <Routes> {/* Routes — jisme aap app ke sare routes define karte hain.

Route — ek ek route ko define karta hai, jaise URL path aur uska component. */}

        {/* Ye ek route define karta hai "/" path ke liye.
            element={} ke andar wo component aata hai jo render hoga.
            Abhi yeh blank hai, aapko koi component pass karna hoga. */}
        <Route path="/" element={<Home/>} />
        <Route path="/success" element={<Success/>} />
        <Route path="*" element={<NotFound/>} /> {/* ka meanning hai ki agar koi page na mile to notFound wala page show krega */}

      </Routes>

      {/* Toaster component app me toast notifications show karne ke liye use hota hai */}
      <Toaster />

    </Router>
  );
}

// App component ko default export kar rahe hain taaki ise index.js ya kisi aur file me import kar sakein
export default App;
