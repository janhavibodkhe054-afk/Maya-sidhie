
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { AnimatePresence } from "framer-motion";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import ScrollToTop from "./components/ScrollToTop";
import LanguageSwitcher from "./components/LanguageSwitcher";

// Language Context
import { LanguageProvider } from "./context/LanguageContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Quality from "./pages/Quality";
import Bulk from "./pages/Bulk";

// Future Pages
// import Products from "./pages/Products";
// import Gallery from "./pages/Gallery";
// import Quality from "./pages/Quality";
// import BulkEnquiry from "./pages/BulkEnquiry";
// import Contact from "./pages/Contact";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/bulk-enquiry" element={<Bulk />} />
        {/* Future Routes */}
        {/* <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/bulk-enquiry" element={<BulkEnquiry />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

function AppLayout() {
  return (
    <SmoothScroll>
      <ScrollToTop />

      <Navbar />

      {/* Floating Language Switcher - All Pages */}
      <LanguageSwitcher />

      {/* All Pages */}
      <AnimatedRoutes />

      {/* Footer - All Pages */}
      <Footer />
    </SmoothScroll>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppLayout />
      </LanguageProvider>
    </BrowserRouter>
  );
}
