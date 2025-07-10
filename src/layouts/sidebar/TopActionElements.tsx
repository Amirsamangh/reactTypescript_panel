
import { IoCloseOutline } from "react-icons/io5";
import { PiSunDimFill , PiMoonFill } from "react-icons/pi";
import { useAppDispatch, useAppSelector } from "../../redux/reduxHooks";
import {
  setShowSidebar,
  toggleTheme,
} from "../../redux/ui-management/uiManagement";

const TopActionElements = () => {
  const dispatch = useAppDispatch();
  const { theme } = useAppSelector((state) => state.uiManagerReducer);
  return (
    <div className="flex justify-between md:justify-end items-center mt-5">
      <button
        className="block md:hidden cursor-pointer relative right-6 hover:text-app_color_3 dark:hover:text-app_color_1"
        onClick={() => dispatch(setShowSidebar(false))}
      >
        <IoCloseOutline size={24} />
      </button>
      <button
        className={`block mt-1 transform transition-all cursor-pointer hover:ring-yellow-500 duration-300 ${
          theme === "dark" && "rotate-45"
        }`}
        onClick={() => dispatch(toggleTheme())}
      >
        {theme === "dark" ? <PiSunDimFill size={24} /> : <PiMoonFill size={24} />}
      </button>
    </div>
  );
};

export default TopActionElements;
