import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-72 h-72 bg-purple-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          {/* 404 number with gradient */}
          <h1 className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 leading-none tracking-tighter">
            404
          </h1>

          {/* Glowing underline */}
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full shadow-lg shadow-purple-500/50" />

          {/* Error message */}
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4">
            Oops! Page not found
          </h2>

          <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
            <br />
            <span className="text-slate-400">Let's get you back home.</span>
          </p>

          {/* Back to home button */}
          <Link to="/">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 px-8 py-6 text-lg rounded-full"
            >
              Return to Home
            </Button>
          </Link>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
          <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping delay-500" />
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
};

export default NotFound;
