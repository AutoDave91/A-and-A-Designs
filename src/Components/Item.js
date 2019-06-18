import React from 'react';

function Item(props){
    console.log(props.inventory[0])
    return(
        <main>
            <section className= "item-profile">
                <img className = 'item-img' src={props.inventory[0].image_URL} alt={props.inventory[0].product_name}/>
                <h3>Item Name: {props.inventory[0].product_name}</h3>
                <h3>Description: {props.inventory[0].description}</h3>
                <h3>Price: {props.inventory[0].price}</h3>
            </section>
        </main>
    )
}
export default Item;