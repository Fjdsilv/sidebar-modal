import { FaTimes } from "react-icons/fa"
import logo from "../assets/images/logo.svg";
import { links, social } from "../data";
import { useGlobalContext } from "../context/context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
      <div className="sidebar-header">
        <img 
          src={logo} 
          alt="mylogo" 
          className="logo"  
        />
        <button
          type="button"
          className="close-btn"
          onClick={closeSidebar}
        >
        <FaTimes/>
        </button>
      </div>
      <ul className="links">
      {
        links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}{text}</a>
            </li>
          )
        })
      }
      </ul>
      <ul className="social-links">
      {
        social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          )
        })
      }
      </ul>
    </aside>
  )
}
export default Sidebar