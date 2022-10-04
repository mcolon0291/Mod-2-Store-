const React = require('react')
class Index extends React.Component {
    render() {
        return( 
            <html>
                <body> 
                    <link rel = "stylesheet" href="/css/app.css"/>
                    <h1> My Book Store </h1>
                    <div id="box">
                        {this.props.products.map((product, i) => }
                        return (
                            <div key ={i} className="book">
                                <h2>{product.name}</h2>
                                <a href ={`/products/${product.id}'}><img style = {{ height: '350px', width: '350px'}} src={product.img} /> </a>
                                <h4>Price:$
                        )

        )
    }
}