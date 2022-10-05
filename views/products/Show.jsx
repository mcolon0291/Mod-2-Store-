const React = require('react')
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {
    render(){
        const { products } = this.props
        return (
            <DefaultLayout title={`${products.name}`}>
            <h1> Product Detail Page </h1>
            <h2> {products.name}</h2> 
            <img style={{ height: '300px', width: '300px' }} src={products.image}/>
            <h3> Description: {products.description}</h3>
            <h3>Price: {products.price}</h3>
            <h3>{products.qty > 0 ? `${products.qty} in stock` : `Out of stock`} </h3>
           <br></br> <form action ={`/products/${products._id}/edit`} >
                            <input className='btn'  type="submit" value="Edit" />
                        </form>
                        <br></br>
                 <form action={`/products/${products._id}?_method=DELETE`} method="POST">
                         <input type="submit" value="Delete" />
                         </form>
               <br></br> <form action={`/products/${products._id}?_method=PATCH`} method="POST">
                             {products.qty > 0 ?
                    <input id="buy" type="submit" value="Buy" /> : null}
                                    </form> 
            
                     <button><a href={`/products/`}>Back to all Products </a></button>
                            


                     </DefaultLayout>
              )

       }
}
module.exports = Show;
