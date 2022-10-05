const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Index extends React.Component {
    render() {

        const { products } = this.props;

        return (
            <DefaultLayout title="Purse Store">
                
                    <h1>All Products</h1>
                    <ul>
                        {products.map((products)=> {
                            return (
                                <li key = {products._id}>
                                    <a href={`/products/${products._id}`}>
                                    <img src={products.image} height='300px'/></a>
                                    <br></br>
                                    Name - {products.name}
                                    <br></br>
                                    Price - {products.price}
                                    <br></br> 
                                    Qty - {products.qty > 0 ? `${products.qty} in stock` : `Out of Stock`}
                                </li>
                            )
                        })}
                    </ul>
                    
                    <nav>
                       <br></br> <a href="/products/new">Create New Product</a>
                    </nav>
                
            </DefaultLayout>
        )
    }
}

module.exports = Index;