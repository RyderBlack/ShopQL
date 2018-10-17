import Nav from './Nav';

const Header = () => {
    return (
        <div>
            <div className="bar">
                <a href="">ShopQL</a>
                <Nav />
            </div>
            <div className="sub-bar">
                <p>Search</p>
            </div>
            <div className="bar">Cart</div>
        </div>
    )
}

export default Header;