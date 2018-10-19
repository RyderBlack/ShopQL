import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (

    <NavStyles>
        <Link href="/sell">
            <a>Go to Sell</a>
        </Link>
        <Link href="/">
            <a>Go to Home</a>
        </Link>
    </NavStyles>
);


export default Nav;