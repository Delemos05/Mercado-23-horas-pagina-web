import styled from "styled-components";
import Colors from "../../Utils/Colors";

export const Wrapper = styled.div`
    .container{
        position: relative;
        width: 100%;
            img{
            width: 100%;
            height: 550px;
            object-fit: cover;
        }
        .btns{
            top: 46%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            position: absolute;
            width: 100%;
            button{
                padding: 15px;
                border-radius: 60%;
                box-shadow: 4px 4px 4px black;
                border: none;
                background-color: ${Colors.white};
                cursor: pointer;
            }
        }
    }
`