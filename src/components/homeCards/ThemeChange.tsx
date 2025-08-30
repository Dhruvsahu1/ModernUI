import React from "react";
import ThemeToggleButton from "../ui/theme-toggle-button";
const ThemeChange = () => {
  return (
    <div className="my-16 sm:my-20 px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[61.2%] p-4 sm:p-6 md:p-8 mx-auto flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
        <ThemeToggleButton
          variant="gif"
          url="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWI1ZmNvMGZyemhpN3VsdWp4azYzcWUxcXIzNGF0enp0eW1ybjF0ZyZlcD12MV9zdGlja2Vyc19zZWFyY2gmY3Q9cw/Fa6uUw8jgJHFVS6x1t/giphy.gif"
        />
        <ThemeToggleButton
          variant="gif"
          url="https://media.giphy.com/media/ArfrRmFCzYXsC6etQX/giphy.gif?cid=ecf05e47kn81xmnuc9vd5g6p5xyjt14zzd3dzwso6iwgpvy3&ep=v1_stickers_search&rid=giphy.gif&ct=s"
        />
        <ThemeToggleButton
          variant="gif"
          url="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWtsNTgwY29pYnpnZHA4eDBmZjJsdXdmbDBzOWMyd2ZvZnU5NHp3cCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qxp10LUzS8BSo/giphy.gif"
        />
        
        
      </div>
    </div>
  );
};

export default ThemeChange;
