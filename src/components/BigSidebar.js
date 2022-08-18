import { useSelector } from "react-redux"
import Wrapper from "../assets/wrappers/BigSidebar"
import Navlinks from "./Navlinks";
import { Logo } from ".";

const BigSidebar = () => {
    const {isSidebarOpen}=useSelector((state)=> state.user);

    return (
        <Wrapper>
            <div className={!isSidebarOpen? 'sidebar-container show-sidebar': 'sidebar-container'}>
                <div className='content'>
                    <header className='logo'>
                        <Logo/>
                    </header>
                    <Navlinks/>
                </div>
            </div>
        </Wrapper>
    )
}

export default BigSidebar
