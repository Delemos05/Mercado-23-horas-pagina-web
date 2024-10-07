import styled from "styled-components";
import Colors from "../../Utils/Colors";

export const Wrapper = styled.div`
    .container{
        
    }
    .show{
        display: block;
        width: 50%;
    height: 1000%;
    background-color: white;
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
    }
    .hidden{
        display: none;
    }
    .item{
        margin:  0 auto;
       
                 width: 600px;
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
                    
                 

                        .btn{
                        display: flex;
                        justify-content: space-between;
                        flex: 1;
                        margin: 2px 18px;
                        span{
                            font-size: 20px;
                            color: white;
                        }
                        button{
                            font-size: 18px;
                            color: white;
                            font-size: 18px;
                        border: none;
                        background-color: transparent;
                        }
                        
                    
                       
                    }
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
                    width: 25%;
                    height: 50px;
                    object-fit: cover;
                    border-radius: 10px
                }
                h2{
                    font-size: 18px;
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
`