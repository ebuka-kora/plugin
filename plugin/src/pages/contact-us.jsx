import Contact from "../components/contact-us";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Workwith from "../components/Work-with-plugin";
import '../app/globals.css';


export default function Page() {
    return (
    <>
    <Navbar/>
    <Contact />
    <Workwith/>
    <Footer/>
    </>
)
}