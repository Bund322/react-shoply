import "./style.scss"

const CartCounter = ({count, increase, id, decrease, changeValue}) => {
    return ( 
        <div className="count">
            <button type = "button" className="count__down" onClick = {() => {decrease(id)}}>
                <img src="./img/down.svg" alt="" />
            </button>
            <div className="count__box">
                <input onChange = {(e) => {changeValue(id, +e.target.value)}} type="number" className = "count__input" min = "1" max = "100" value = {count} />
            </div>
            <button type = "button" className="count__up" onClick = {() => {increase(id)}}>
                <img src="./img/up.svg" alt="" />
            </button>
        </div>
     );
}
 
export default CartCounter;