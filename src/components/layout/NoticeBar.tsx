import { Gift, X, Sparkles } from "lucide-react";
import { useState } from "react";

const NoticeBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="notice-bar px-4 py-3 text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1 left-10 text-2xl animate-bounce">🎄</div>
        <div className="absolute top-1 right-10 text-2xl animate-bounce" style={{ animationDelay: '0.5s' }}>🎊</div>
      </div>
      <div className="flex items-center justify-center space-x-3 relative z-10">
        <Gift className="h-5 w-5 animate-pulse" />
        <span className="text-sm font-semibold text-yellow-400">
          🎄 Festive Mega Sale! Get up to 72% OFF on all courses - Limited Time Offer! 🎊
        </span>
        <Sparkles className="h-5 w-5 animate-pulse" />
        <button
          onClick={() => setIsVisible(false)}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-colors absolute right-4"
          aria-label="Close notice"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default NoticeBar;