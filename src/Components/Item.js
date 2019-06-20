import React from 'react';

function Item(props){
    // console.log(props.item)
    return(
        <main>
            <section className= "item-profile">
                <img className = 'item-img' src={require(`../images/${props.item.image}.jpg`)} alt={props.item.product_name}/>
                <h3>{props.item.product_name}</h3>
                <h3 id='description'>{props.item.description}</h3>
                <h3>{props.item.price}</h3>
                
                <button>Add to Cart</button>
            </section>
        </main>
    )
}
export default Item;