import Logo from "../../assets/logo.png"
import {FaUser, FaSearch} from "react-icons/fa"
import Colors from "../../Utils/Colors"
import { Wrapper } from "./style"
export const NavBar = () =>{
    return(
        <Wrapper>
            <div className="logo">
                <img src={Logo} alt="logo" />
                <div className="text">
                    <h1>Mercado <span>23h</span></h1>
                </div>
            </div>
            <div className="menu">
                <ul>
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                    <li>
                        <FaUser color={Colors.yellow} size={25}/>
                    </li>
                    
                </ul>
            </div>
        </Wrapper>
    )
}