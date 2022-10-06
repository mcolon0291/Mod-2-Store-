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
                        <a className="item title"></a>
                    </div>
                    <div className="group">
                       <br></br> <h1><a className="item">Purse Store</a></h1>
                       <br></br> <a className="item">My Cart</a>
                    
                  
                
                    </div>
                </nav>
                
                        


                    {this.props.children}
                    
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;