import styled from "styled-components";
import Colors from "../../Utils/Colors";

export const Wrapper = styled.div`
    .container{
        
    }
    .show{
        display: block;
        width: 50%;
        height: 1000%;
        background-color: ${Colors.white};
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;

    .header{
     
        display: flex;
        justify-content: space-between;
        background-color: ${Colors.yellow};
    
        
        .h1{
            color: ${Colors.red};
            font-size: 30px;
            font-weight: bold;
            right: 400px;
            left: 200px
            }
        button{
            color:${Colors.red};
            background-color: transparent;
            font-weight: bold;
            font-size: 30px;
            border: none;
            left: 50px;
        }
    }

    .item{
                 margin:  15px auto;
                 width: 200px;
                 height: 300px;
                 font-size: 8px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                background-color: ${Colors.yellow};
                padding: 20px;
                border-radius: 20px;
                box-shadow: 4px 4px 4px gray;
                cursor: pointer;
                &:hover{
                    box-shadow: 4px 6px 6px 6px gray;
                    transition: 1s ease;
                    cursor: pointer;
                }
                // preco
                p{
                    font-weight: bold;
                    font-size: 18px;
                }
                .button{
                    margin-top: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: ${Colors.red};
                    border-radius: 8px;
                    
        
                    .cart{
                        background-color: ${Colors.white};
                        color: white;
                        padding: 8px;
                        border-start-end-radius: 8px;
                        border-bottom-left-radius: 8px;
                        border: none;
                        height: 100%;
                        justify-content: center;
                        display: flex;
                        align-items: center;
                        cursor: pointer;
                    }
                
                img{
                    width: 10%;
                    height: 5px;
                    object-fit: cover;
                    border-radius: 20px;
                }
              
                
            }

            h2{
                    font-size: 12px;
                    color: ${Colors.white};
                }
            .text{
                    display: flex;
                    gap: 10px;
                    flex-direction: column;
                    align-items: center;
                    margin-top: 5px;
                    margin-bottom: 5px;
                }
        
        
    }
    }



    .hidden{
        display: none;
        .vazio{
            color: ${Colors.red};
        }
    }
    
`