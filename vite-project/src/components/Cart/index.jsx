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
                            <h2>{item?.name}</h2>
                            <h2>{item?.qtd}</h2>
                            <p>{item?.description}</p>
                            <span>R$ {item?.price.toFixed(1)}</span>
                        </div>
                    ))
                ) : (
                    <p>O carrinho está vazio.</p>
                )}
            </div>
        </Wrapper>
    );
}
