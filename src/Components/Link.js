import { Link } from "react-router-dom";

function Nav()
{
    return(
        <div align="center">
        <h1>Index Page</h1>
        <table style={{border:"solid black 2px"}} cellSpacing={"5px"}>
            <tr>
                <td>Task 1</td>
                <td><a href="https://github.com/Vysssaa/React-Tasks">Repository Link</a></td>
                <td><Link to="/Task1">Link 1</Link></td>
            </tr>
            <tr>
                <td>Task 2</td>
                <td><a href="https://github.com/Vysssaa/React-Tasks">Repository Link</a></td>
                <td><Link to="/Task2">Link 2</Link></td>
            </tr>
            <tr>
                <td>Task 4</td>
                <td><a href="https://github.com/Vysssaa/React-Tasks">Repository Link</a></td>
                <td><Link to="/Task4">Link 4</Link></td>
            </tr>
            <tr>
                <td>Task 5</td>
                <td><a href="https://github.com/Vysssaa/React-Tasks">Repository Link</a></td>
                <td><Link to="/Task5">Link 5</Link></td>
            </tr>
            <tr>
                <td><Link to="/"></Link></td>
            </tr>
        </table>
        </div>
    )
}

export default Nav;