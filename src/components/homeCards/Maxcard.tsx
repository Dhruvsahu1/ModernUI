
import { Scene } from "../ui/image-ripple";

export const Maxcard = () => {
  return (
     <div className="mx-auto max-w-4xl rounded-[24px] border dark:border-white/20 border-black/5 p-2 mt-10 shadow-sm">
      <div className="relative rounded-[24px] border border-black/5 dark:border-white/20 bg-neutral-800/5 dark:bg-white/10 p-2 shadow-sm">
        <div className="flex items-center justify-center h-full w-full">
          <Scene />
        </div>
      </div>
    </div>
  );
};
