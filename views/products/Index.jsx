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
                                    <img src={products.image} height='400'/></a>
                                    <br></br>
                                    Name - {products.name}
                                    <br></br>
                                    Price - {products.price}
                                    <br></br> 
                                    Qty - {products.qty}
                                </li>
                            )
                        })}
                    </ul>
                    
                    <nav>
                        <a href="/products/new">Create New Product</a>
                    </nav>
                
            </DefaultLayout>
        )
    }
}

module.exports = Index;