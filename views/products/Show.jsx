const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {
    render() {

        const {products} = this.props
        return (
            <DefaultLayout title ="Product Details">
                
                    <h1>{`${products.name}`}</h1>
                        <p>{products.description}</p>
                        <p>{products.price}</p>
                        <p>Qty: {products.qty}</p>
                        <h4><p>{products.inStock ? "Currently In Stock" : "Not in Stock " }</p></h4>
                        {products.qty == 0? <button hidden>Buy</button> : <button>Buy</button>}

                    <div>
                        
                        <form action ={`/products/${products._id}/edit`} >
                            <input type="submit" value="Edit" />
                        </form>
                            
                
                        <form action ={`/products/${products._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete Product" />
                        </form>


                    <nav>
                        <a href ='/products'>Back</a>
                    </nav>
               </div> 
            </DefaultLayout>
        )
    }
}

module.exports = Show;