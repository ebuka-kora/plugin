import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus"
import Workwith from "../components/Work-with-plugin";
import '../app/globals.css';


export default function Page() {
    return (
    <>
        <Navbar />
        <Aboutus />
        <Workwith />
        <Footer />
    </>
)
}