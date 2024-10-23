
import { NavBar } from "../../components/NavBar/Index";
import Product from "../../components/product/Index.jsx";
import Slider from "../../components/slider/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";

export default function HomePage (){
    return(
        <div>
            <NavBar/>
            <Slider/>
            <Product/>
            <Footer/>
        </div>
    )
}