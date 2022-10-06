const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        const {products} = this.props;

        return (
            <DefaultLayout>
                <div>
                    <h1>Edit Product</h1>
                    <form action={`/products/${products._id}?_method=PUT`} method="POST">
                        <fieldset>
                            <p>
                                <label htmlFor="name">Product Name:</label>
                                <input type='text' id='name' name='name' defaultValue={products.name} />
                            </p>

                            <p>                           
                                <label htmlFor="image">Product Image:</label>
                                <input type='text' id='productimage' name='image' defaultValue={products.image} />
                            </p>
                            <p>
                                <label htmlFor="price">Price:</label>
                                <input type='number' step='0.01' id='price' name='price' defaultValue={products.price} />
                            </p>
                            <p>
                                <label htmlFor="description">Product Description:</label>
                                <input type='text' id='productdescription' name='description' defaultValue={products.description} />
                            </p>
                            <p>
                                <label htmlFor="qty">Quantity:</label>
                                <input type='number' id='qty' name='qty' min= '0' max= '99' defaultValue={products.qty} />
                            </p>
                           

                            <input type="submit" value="Edit Product"/>

                        </fieldset>
                    </form>

                    <nav>
                        <a href ='/products'>Back</a>
                    </nav>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Edit