import "./_reset.scss"
import "./_base.scss"
import "./_page.scss"
import "./_titles.scss"
import "./_buttons.scss"
import Header from "../Header";
import Footer from "../Footer";
import Main from "../Main"

function App() {
  return (
    <div className="page">
        <header className="header">
            <Header />
        </header>
        <Main />
        <footer className="footer">
            <Footer />
            
        </footer>
    </div>
  );
}

export default App;
