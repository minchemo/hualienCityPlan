import AOS from "aos";
import "aos/dist/aos";
import "aos/dist/aos.css";

export default ({ app }) => {
    app.AOS = new AOS.init({
        duration: 1000,
        once: true
    });
};