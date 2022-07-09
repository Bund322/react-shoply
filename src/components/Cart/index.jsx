
import CartCounter from "../CartCounter";
import "./style.scss"


const Cart = ({product, deleteProduct, increase, decrease, changeValue}) => {
    // console.log(product.id);
    const {img, title, priceTotal, count, id } = product; //Деструктурируем product
    return (  

        <div className="cart">
            <div className="cart-img">
                <img src={`./img/${img}`} alt={title} />
            </div>
            <div className="cart-product">
                {title}
            </div>
            <div className="cart-price">
                ${priceTotal}
            </div>
            <div className="cart-quantity">
                <CartCounter count = {count} increase = {increase} id = {id} decrease = {decrease} changeValue = {changeValue}/>
            </div>
            <div className="cart-total">
                <button type = "button" className = "delete-btn" onClick = {() => {deleteProduct(id)}}><img src="./img/delete.svg" alt="" /></button>
            </div>
        </div>
    );
}
 
export default Cart;