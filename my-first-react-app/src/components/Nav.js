import Navbar from 'react-bootstrap/Navbar';
import RBNav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Nav = () => {
    return(
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>
                    Movie Database Tool
                </Navbar.Brand>
                <Navbar.Collapse>
                    <RBNav.Link href="/react-practice">Movie Search</RBNav.Link>
                    <RBNav.Link href="/react-practice/usermovielist">My Movie List</RBNav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Nav;