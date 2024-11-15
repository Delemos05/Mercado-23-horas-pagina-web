import { useState, useEffect } from "react";
import { Wrapper } from "./style";

export default function Cart({ visible, setVisible, data }) {

    const close = () => {
        setVisible(!visible);
    };

    return (
        <Wrapper>
            <div className={visible ? "show" : "hidden"}>
                <div className="header">
                    <button onClick={close}>X</button>
                    <div className="h1">Carrinho</div>
                </div>
                {data.length > 0 ? (
                    data.map((item) => (
                        <div key={item?.id} className="item">
                            <img src={item?.image} alt={item?.products?.name} />
                            <h2>Nome: {item?.name}</h2>
                            <h2>Itens: {item?.qtd}</h2>
                            <h2>Preço: R$ {item?.price.toFixed(1) * item?.qtd}</h2>
                        </div>
                    ))
                ) : (
                    <div className="vazio"> <p>O carrinho está vazio.</p> </div> 
                )}
                <div className="comprar">
                <button>Comprar</button>
                </div>
              
            </div>
        </Wrapper>
    );
}
