import CartImg from "../imgs/cart.png";

function CartWidget() {

    return (
        <div>
        <img src={CartImg}/>
        <p className="has-text-danger-dark has-text-centered">5</p>
        </div>
    )
        
    
}

export default CartWidget;
