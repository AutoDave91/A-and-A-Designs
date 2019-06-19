import React from 'react';

function Item(props){
    // console.log(props.inventory[0])
    return(
        <main>
            <section className= "item-profile">
                {/* <img className = 'item-img' src={props.inventory.image_URL} alt={props.inventory.product_name}/> */}
                {/* <img className = 'item-img' src={`${props.inventory.image_URL}`} alt={props.inventory.product_name}/> */}
                {/* <img className = 'item-img' src={'https://i.postimg.cc/Z50JhS3G/Daddys-Little-Princess.jpg'} alt={props.inventory.product_name}/> */}
                {/* <h3>{props.inventory.product_name}</h3>
                <h3>{props.inventory.description}</h3>
                <h3>{props.inventory.price}</h3> */}
                {/* to see it... */}
                <img className = 'item-img' src={'https://i.postimg.cc/Z50JhS3G/Daddys-Little-Princess.jpg'} alt={props.inventory[0].product_name}/>
                <h3>{props.inventory[0].product_name}</h3>
                <h3>{props.inventory[0].description}</h3>
                <h3>{props.inventory[0].price}</h3>
                {/* back to actual */}
                <button>Add to Cart</button>
            </section>
        </main>
    )
}
export default Item;