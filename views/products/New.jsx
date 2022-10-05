const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div>
                    <h1>Create New Product</h1>
                    <form action="/products" method="POST">
                        <fieldset>
                            <p>
                                <label htmlFor="name">Product Name:</label>
                                <input type='text' id='name' name='name' />
                            </p>

                            <p>                           
                                <label htmlFor="image">Product Image:</label>
                                <input type='text' id='image' name='image' />
                            </p>
                            <p>
                                <label htmlFor="price">Price:</label>
                                <input type='number' step='0.00' id='price' name='price' placeholder='0.00' />
                            </p>
                            <p>
                                <label htmlFor="descr">Product Description:</label>
                                <input type='text' id='descr' name='descr' />
                            </p>
                            <p>
                                <label htmlFor="qty">Quantity:</label>
                                <input type='number' id='qty' name='qty' min= '0' max= '99' placeholder='0' />
                            </p>

                            {/* <p>
                                <label htmlFor="inStock">In Stock:</label>
                                <input type='checkbox' id='inStock' name='inStock' />
                            </p> */}

                            <input type="submit" value="Submit Product"/>
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

module.exports = New;