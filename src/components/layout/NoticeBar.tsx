import { X } from "lucide-react";
import { useState } from "react";

const NoticeBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="notice-bar py-2 px-4 text-center relative">
      <p className="text-sm font-medium">
        🎉 New Year Special: Get 50% OFF on all courses! Use code: NEWYEAR2025 | Limited Time Offer!
      </p>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-70"
      >
        <X size={16} />
      </button>
    </div>
  );
};

export default NoticeBar;