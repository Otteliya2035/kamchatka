import Header from  "../../components/Header/Header"
import Welcome from "../../components/Main/Welcome/Welcome"
import Benefits from "../../components/Main/Benefits/Benefits"
import Flight from "../../components/Main/Flight/Flight"
import Tours from "../../components/Main/Tours/Tours"
import Gallery from "../../components/Main/Gallery/Gallery"
import Contact from "../../components/Main/Contact/Contact"
import Footer from "../Footer/Footer"
import "../../components/Main/Main.css"
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton"
function Main() {
    return (
        <main className={'main'}>

        <Welcome />
        <Benefits />
        <Flight />
        <Tours />
        <Gallery />
        <Contact />
        <ScrollToTopButton />
        </main>
    )
};

export default Main;