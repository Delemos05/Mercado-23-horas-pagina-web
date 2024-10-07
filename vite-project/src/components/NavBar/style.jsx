
import { styled } from "styled-components"
import Colors from "../../Utils/Colors"
export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    .logo{
        display: flex;
        align-items: center;
        gap: 20px;
        img{
            width: 80px;
            height: 80px;
            cursor: pointer;
        }
        .text{
            h1{
                font-size: 26px;
                color: ${Colors.grey};
                span{
                    color: ${Colors.yellow};
                    font-weight: 500;
                    font-size: 20;
                }
            }
        }
    }

    .search{
        display: flex;
        flex: 1;
        padding: 10px 30px;
        border-radius: 40px;
        border: 1px solid ${Colors.grey};
        outline: none;
        margin:  0 60px;
        .icon{
            cursor: pointer;
        }
        input{
           flex: 1;
           border: none;
            outline: none;
        }
       
    }
    .menu{
        ul{
            display: flex;
            align-items: center;
            gap: 20px;
            li{
                list-style: none;
                font-weight: 500;
            }
        }
    }
`