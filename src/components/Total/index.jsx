import "./style.scss"
const Total = ({total}) => {
    const {price} = total;
    return ( 
        <div className="total">
                    <div className="total-container">
                        <div className="total-subtotal">
                            <div className="total-subtotal__one">
                                <h3 className = "title-3">Subtotal</h3>
                                <h3 className = "title-3">:</h3>
                                <h3 className = "title-3">${price}</h3>
                            </div>
                            
                            <div className="total-subtotal__one">
                                <h4 className = "title-4">Shipping Fee</h4>
                                <h4 className = "title-4">:</h4>
                                <h4 className = "title-4">${Math.floor(price/10)}</h4>
                            </div>
                        </div>
                        <div className="total__order">
                            <h2 className = "title-2">Total Order</h2>
                            <h2 className = "title-2">:</h2>
                            <h2 className = "title-2">${price + Math.floor(price/10)}</h2>
                        </div>
                    </div>
                    <div className="total-buttons">
                        <div className="total-buttons__close">
                            <button className="close" type = "button">
                                Close
                            </button>
                        </div>
                        <div className="total-buttons__check-out">
                            <button className="check-out" type = "button">
                                Check Out
                            </button>
                        </div>
                    </div>
                </div>
     );
}
 
export default Total;