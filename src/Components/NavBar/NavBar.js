import './NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

{/* <FontAwesomeIcon icon={solid('user-secret')} /> */}


const NavBar = () => {
    const scrollController = () => {
        // sticky nav bar
        window.onscroll = function () {
            let offset = document.querySelector("header").offsetTop;
            // if(window.pageYOffset > offset){
            //     document.querySelector("header").classList.add("sticky")
            // }else{
            //     document.querySelector("header").classList.remove("sticky")
            // }

            if (window.scrollY > 1) {
                document.querySelector('header').classList.remove("change-nav-scroll")
                // document.querySelector('.nav-element').style.color="#ffff";
            } else {
                document.querySelector('header').classList.add("change-nav-scroll")
            }
        }
    }
    return (
        <nav className="change-nav-scroll" onLoad={scrollController}>
            <div className="logo-title-div">
                <p>
                    <img id="farmer-logo" src='/logo1.jpg' alt="Logo" />
                </p>
                <h1><a href="/" className="title">Farmers Web Portal</a></h1>
            </div>
            <div className="nav">
                <input type="checkbox" id="check" />
                <label htmlFor="check" className="expandbtn">
                    <FontAwesomeIcon icon={solid('bars')}/>
                </label>
                <label htmlFor="check" className="contractbtn">
                    <FontAwesomeIcon icon={solid('xmark')}/>
                </label>
                <ul>
                    <li><a href="/CropSuggestion" className="nav-element CropSuggestion">Crops</a></li>
                    <li><a href="/discussions" className="nav-element discussions">Discussions</a></li>
                    <li><a href="/ChatBot" className="nav-element ChatBot">Chat Bot</a></li>
                    <li><a href="/Market" className="nav-element Market">Market</a></li>
                    <li><a href="/Aboutuss" className="nav-element Aboutuss">About Us</a></li>
                    <li><a href="/login" id="loginUser" className="nav-element">
                        User
                    </a></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;