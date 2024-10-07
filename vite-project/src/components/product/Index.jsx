import { Wrapper } from "./style";
import { DATA } from "../../Utils/Data";
import { FaCartArrowDown } from "react-icons/fa";
import { useState } from "react";
import Colors from "../../Utils/Colors";
import Cart from "../Cart";
import { FaCartPlus } from 'react-icons/fa';

export default function Product() {
    const [data, setData] = useState(DATA);
    const [itemCart, setItemCart] = useState([]);

    const [indexAtive, setIndexActive] = useState(0);
    const [cartSow, setCartShow] = useState(false);

    const handleClick = (index) => {
        setIndexActive(index);
    };

    const handleCarShow = () => {
        setCartShow(!cartSow);
    };

    const plus = (id) => {
        const updatedData = data.map((category, catIndex) => {
            if (catIndex === indexAtive) {
                return {
                    ...category,
                    products: category.products.map((item) =>
                        item.id === id ? { ...item, qtd: item.qtd + 1 } : item
                    ),
                };
            }
            return category;
        });

        setData(updatedData);
    };

    const mines = (id) => {
        const updatedData = data.map((category, catIndex) => {
            if (catIndex === indexAtive) {
                return {
                    ...category,
                    products: category.products.map((item) =>
                        item.id === id ? { ...item, qtd: item.qtd <= 1 ? 1 : item.qtd - 1 } : item
                    ),
                };
            }
            return category;
        });

        setData(updatedData);
    };

    const handleAddCart = (id) => {
        const selectedItem = data[indexAtive].products.find((item) => item.id === id);
        if (selectedItem) {
            setItemCart((prevItems) => {
                // Verifica se o item já está no carrinho
                const itemExists = prevItems.some((item) => item.id === selectedItem.id);
                if (itemExists) {
                    return prevItems.map((item) =>
                        item.id === selectedItem.id
                            ? { ...item, qtd: item.qtd + 1 } // Incrementa a quantidade
                            : item
                    );
                } else {
                    return [...prevItems, { ...selectedItem }];
                }
            });
        }
        console.log(selectedItem)
    };

    return (
        <Wrapper>
            <FaCartPlus className="cart01" onClick={handleCarShow} />
            <Cart visible={cartSow} setVisible={setCartShow} data={itemCart} setData={setItemCart} />
            <div className="category">
                <a href="#prod">
                    {data.map((item, index) => (
                        <div key={index} className={index == indexAtive ? "active" : "cat"} onClick={() => handleClick(index)}>
                            <h1>{item.category}</h1>
                        </div>
                    ))}
                </a>
            </div>
            <div className="container" id="prod">
                <h1>Nossos Produtos</h1>
                <div className="cards">
                    {data[indexAtive].products.map((item) => (
                        <div key={item.id} className="card">
                            <img src={item.image} alt={item.name} />
                            <div className="text">
                                <h2>{item.name}</h2>
                                <p>R$ {item.price}</p>
                            </div>
                            <div className="button">
                                <div className="btn">
                                    <button onClick={() => mines(item.id)}>-</button>
                                    <span>{item.qtd}</span>
                                    <button onClick={() => plus(item.id)}>+</button>
                                </div>
                                <div className="cart">
                                    <FaCartArrowDown size={25} color={Colors.red} onClick={() => handleAddCart(item.id)} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    );
}
