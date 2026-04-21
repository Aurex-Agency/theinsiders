import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

// Lazy-load all non-home routes so the initial mobile bundle stays tiny.
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ShowsPage = lazy(() => import("./pages/ShowsPage"));
const PhotosPage = lazy(() => import("./pages/PhotosPage"));
const VideosPage = lazy(() => import("./pages/VideosPage"));
const BookUsPage = lazy(() => import("./pages/BookUsPage"));
const TextListPage = lazy(() => import("./pages/TextListPage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/shows" element={<ShowsPage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route path="/videos" element={<VideosPage />} />
            <Route path="/book-us" element={<BookUsPage />} />
            <Route path="/text-list" element={<TextListPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
