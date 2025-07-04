import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Index() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px]" />

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div
          className={`text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
        >
          {/* Main "hy" text with gradient and glow */}
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-extrabold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-8 leading-none tracking-tighter">
            hy
          </h1>

          {/* Glowing underline */}
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-8 rounded-full shadow-lg shadow-purple-500/50" />

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            A simple greeting that connects worlds.
            <br />
            <span className="text-slate-400 text-lg">
              Where every conversation begins.
            </span>
          </p>

          {/* Interactive cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                👋
              </div>
              <h3 className="text-white font-semibold mb-2">Simple</h3>
              <p className="text-slate-400 text-sm">
                Sometimes the simplest things are the most powerful
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                🌍
              </div>
              <h3 className="text-white font-semibold mb-2">Universal</h3>
              <p className="text-slate-400 text-sm">
                A greeting understood across all cultures and languages
              </p>
            </Card>

            <Card className="bg-white/5 backdrop-blur-sm border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                ✨
              </div>
              <h3 className="text-white font-semibold mb-2">Magical</h3>
              <p className="text-slate-400 text-sm">
                Every great conversation starts with a simple hello
              </p>
            </Card>
          </div>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white border-0 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 px-8 py-6 text-lg rounded-full"
            >
              Say hy back
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
            >
              Learn more
            </Button>
          </div>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
          <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full animate-ping delay-500" />
          <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping delay-1000" />
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </div>
  );
}
