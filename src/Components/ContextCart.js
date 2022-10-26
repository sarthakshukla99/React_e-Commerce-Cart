import React, { useContext, useState } from 'react'
import './cart.css'
import { Scrollbars } from 'react-custom-scrollbars-2';
import Items from './Items';
import { products } from './products';
import { CartContext } from './Cart';

export const ContextCart = () => {

    // const [items, setItems] = useState(products)

    const {items, clearCart, totalItem, totalAmount} = useContext(CartContext);

    if(items.length === 0){
        return(
            <>
                <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Continue shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>0</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p className="total-items">You have <span className="total-items-count">
                    0
                </span> in your cart</p>
            </section>    
            </>
        )
    }

    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className='arrow-icon' />
                    <h3>Continue shopping</h3>
                </div>

                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" />
                    <p>{totalItem}</p>
                </div>
            </header>

            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p className="total-items">You have <span className="total-items-count">
                {totalItem}
                </span> in your cart</p>

                <div className="cart-items">
                    <div className="cart-items-container">
                        <Scrollbars>
                            {
                                items.map((curItem) => {
                                    return <Items key={curItem.id} {...curItem} />
                                })
                            }
                        </Scrollbars>

                    </div>
                </div>


                <div className="card-total">
                    <h3>Cart Total: ₹<span>{totalAmount}</span></h3>
                    <button>checkout</button>
                    <button className='clear-cart' onClick={clearCart}>Clear Cart</button>
                </div>
            </section>
        </>
    )
}

export default ContextCart;