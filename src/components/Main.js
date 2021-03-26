import logo from '../assets/images/logo.svg';

function Main() {
    return (
        <main>
            <h2>Mon main</h2>
            <img src={logo} className="App-logo" alt="logo" />
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            Learning React :)
            </a>
        </main>
    );
}

export default Main;