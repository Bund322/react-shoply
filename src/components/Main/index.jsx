import {useEffect, useState} from "react";
import "./style.scss"
import Cart from "./../Cart";
import Total from "./../Total";
import data from "./../../data";

const Main = () => {

    const [cart, setCart] = useState(data);  //Это хук, возвращает переменную с данными и функцию для изменения сосотояния

    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0)
    })

    useEffect(() => {//Это хук, отслеживает состояние cart и выполняет функцию если он изменен
        setTotal({
            price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0)
        })
    }, [cart])

    const deleteProduct = (id) => {
        // console.log(id);
        setCart((cart) =>  cart.filter((product) =>  id !== product.id));

    }

    const increase = (id) => {
        setCart((cart) => cart.map((product) => {
                if(product.id === id) {
                    const newCount = ++product.count;
                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    };
                }
                return product
            }))
    }
    const decrease = (id) => {
        setCart((cart) => cart.map((product) => {
                if(product.id === id) {
                    const newCount = (product.count - 1 > 1)? product.count - 1 : 1;
                    return {
                        ...product,
                        count: newCount,
                        priceTotal: newCount * product.price
                    };
                }
                return product
            }))
    }

    const changeValue = (id, value) => {
        setCart((cart) => {
            return cart.map((product) => {
                if(product.id === id) {
                    return {
                        ...product,
                        count: value,
                        priceTotal: value * product.price
                    }
                }
                return product
            })
        })
    }


    const products = cart.map((product) => {
        return  <Cart 
        product = {product} 
        key = {product.id} 
        deleteProduct = {deleteProduct} 
        increase={increase} 
        decrease = {decrease}
        changeValue = {changeValue}
        /> //Пробрасываем props product
    })


    return ( 
        <main className="main">
            <div className="main-navigation">
                <div className="main-navigation__nav">
                    <a href = "#" className = "title-1">Home</a>
                    <h1 className = "title-1">&gt;</h1>
                    <a href = "#" className = "title-1 title-1--primary">My Cart</a> 
                </div>
            </div>
            <section className="main-cart">
                <div className="main-cart__header">
                    <div className="main-cart__product">Product</div>
                    <div className="main-cart__price">Price</div>
                    <div className="main-cart__quantity">Quantity</div>
                    <div className="main-cart__total">Total</div>
                </div>
                {products}
            </section>
            <section className="main-total">
                <Total total = {total}/>
            </section>
        </main>
     );
}
 
export default Main;