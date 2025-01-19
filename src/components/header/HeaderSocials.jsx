import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaBehanceSquare } from "react-icons/fa";

export default function HeaderSocials() {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/henrique-alves-semmer/" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/h-alves" target="_blank"><FaGithub/></a>
            <a href="https://www.behance.net/henriquesemmer1" target="_blank"><FaBehanceSquare/></a>
        </div>
    )
}