const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Purse Store</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                <nav className="menu-bar">
                    <div className="group">
                        <a className="item title">All Purses</a>
                    </div>
                    <div className="group">
                       <br></br> <a className="item">Home</a>
                       
                       <br></br> <a className="item">Shop</a>
                    </div>
                </nav>
                
                        


                    {this.props.children}
                    
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;