import { useState } from "react";
import { Wrapper } from "./style";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";


export default function Slider (){
    let [ currentIndex, setCurrentIndex] = useState(0)
    const image = ["https://blog.livup.com.br/wp-content/uploads/2019/11/foodiesfeed.com_healthy-vegetarian-salad-buffet-1.jpg", "https://www.nit.pt/wp-content/uploads/2021/05/eb513a4c57d57a86116367a3e81c71ba-754x394.jpg", "https://www.nit.pt/wp-content/uploads/2020/03/9a1158154dfa42caddbd0694a4e9bdc8.jpg"]

/** setInterval(() =>{
        next()
    }, 3000)*/
    


    const next = () =>{
        if(currentIndex + 1 < image.length ){
            setCurrentIndex( 
                currentIndex = currentIndex + 1
            )
        }else{
            setCurrentIndex( 
                currentIndex = 0
            )
        }
        
    }
    const prev = () =>{
        if(currentIndex  > 0 ){
            setCurrentIndex( 
                currentIndex = currentIndex - 1
            )
        }else{
            setCurrentIndex( 
                currentIndex = image.length - 1
            )
        }
    }

    return(
        <Wrapper>
            <div className="container">
                <div className="btns">
                <button onClick={next}>
                    <FiChevronLeft size={25}/>
                </button>
                <button onClick={prev}>
                    <FiChevronRight size={25}/>
                </button>
                </div>
                <img src={image[currentIndex]} alt="" />
            </div>
        </Wrapper>
    )
}