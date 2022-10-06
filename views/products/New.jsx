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
                                <input type='text' id='productimage' name='image' />
                            </p>
                            <p>
                                <label htmlFor="price">Price:</label>
                                <input type='number' step='0.00' id='price' name='price' placeholder='0.00' />
                            </p>
                            <p>
                                <label htmlFor="description">Product Description:</label>
                                <input type='text' id='productdescription' name='description' />
                            </p>
                            <p>
                                <label htmlFor="qty">Quantity:</label>
                                <input type='number' id='qty' name='qty' min= '0' max= '99' placeholder='0' />
                            </p>

                            <input type="submit" value="Submit"/>
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