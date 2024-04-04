import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const DarkModeSwitcher = () => {
  const { setTheme, theme } = useTheme()

  return (
    <li>
      <label className="relative m-0 block h-7.5 w-14 rounded-full bg-stroke dark:bg-primary">
        <input
          type="checkbox"
          onChange={() => theme === "light" ? setTheme("dark") : setTheme("light")}
          className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
        />
        <span
          className={`absolute left-[3px] top-1/2 flex h-6 w-6 -translate-y-1/2 translate-x-0 items-center justify-center rounded-full bg-white shadow-switcher duration-75 ease-linear dark:!right-[3px] dark:!translate-x-full`}
        >
          <span className="dark:hidden">
            <SunIcon size={18} />
          </span>
          <span className="hidden dark:inline-block">
            <MoonIcon size={18} className="text-gray-4" />
          </span>
        </span>
      </label>
    </li>
  );
};

export default DarkModeSwitcher;
