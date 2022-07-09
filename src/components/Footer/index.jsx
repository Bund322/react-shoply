import "./style.scss"
const Footer = () => {
    return ( 
        <div className="footer-container">
            <div className="footer__copy">
                © Copyright 2021. Created by OurTeam
            </div>
            <div className="footer__social">
                <a href="#"><img src="./img/Facebook.svg" alt="" /></a>
                <a href="#"><img src="./img/Instagram.svg" alt="" /></a>
                <a href="#"><img src="./img/Twitter.svg" alt="" /></a>
                <a href="#"><img src="./img/Youtube.svg" alt="" /></a>
            </div>
        </div>
     );
}
 
export default Footer;