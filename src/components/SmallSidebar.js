import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/SmallSidebar";
import { toggleSidebar } from "../features/user/userSlice";
import Logo from "./Logo";
import Navlinks from "./Navlinks";

const SmallSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const toggle=()=>{
    dispatch(toggleSidebar());
  }

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button
            type="button"
            className="close-btn"
            onClick={toggle}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks toggle={toggle}/>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
