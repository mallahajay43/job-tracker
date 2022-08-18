import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/Navbar";
import Logo from "../components/Logo";
import { FaAlignLeft, FaCaretDown, FaUserCircle } from "react-icons/fa";
import { toggleSidebar, clearStore} from "../features/user/userSlice";
import { useState } from "react";

const Navbar = () => {
  const [isLogout, setIsLogout] = useState(false);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const toggle = () => {
    dispatch(toggleSidebar());
  };

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">Dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            type="button"
            className="btn"
            onClick={() => setIsLogout(!isLogout)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={isLogout? 'show-dropdown dropdown':'dropdown'}>
            <button
              type="button"
              className="dropdown-btn"
              onClick={()=>dispatch(clearStore('Logging Out...'))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
