import debounce from "lodash/debounce";
import React, { useEffect, useState } from "react";
import Modal from "../components/modal";
import NavBar from "../components/navbar";
import Timer from "../components/timer";
import style from "./page.module.css";

const Reflection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 768);
    const [open, setOpen] = useState<boolean>(false); // State passed to NavBar
    const [extraInspiration, setExtraInspiration] = useState<string>("");

// Quotes array for generating inspiration
    const quotes: string[] = [
    "SKY", "INFINITE", "STARS", "UNIVERSE", "COSMOS", "GALAXIES", "PLANETS", "BREATH", "BEAUTY", "EXISTENCE",
    ];

// state for dynamic buttons colors
    const [hovered, setHovered] = useState(false);
    const [hovered1, setHovered1] = useState(false);

// Handle screen resize to determine if user is on mobile
    const handleResize = debounce (() => {
        setIsMobile(window.innerWidth <= 768);
    }, 200);

// Add event listener for window resizing
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

//Let and Func to generate a random quote
let lastIndex = -1; // Variable to store the last chosen index
const generateInspiration = () => {
    let randomIndex;
    // Ensure the new index is different from the last index
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastIndex);

    lastIndex = randomIndex; // Update the last index

    setExtraInspiration(`Reflect on ${quotes[randomIndex]}`);
};

// Dynamically apply styles based on device type and navbar state
    const getDynamicStyle = () => {
        if (isMobile && open) {
            return `${style.main} ${style.main2}`; // Combine styles for mobile + open
        }
    return style.main; // Default desktop styling
    };

    return (
    <>
        <NavBar setHomeOpen={setOpen} />
    <div className={getDynamicStyle()}>
            <h1 style={{ color: "lightgreen" }}>REFLECTION Chamber</h1>
            <p className={style.introspection}>
            Take a moment to reflect on the vastness of the universe and your
            place within it. Imagine the endless expanse of stars, planets, and
            galaxies stretching far beyond your sight. Each breath you take
            connects you to this infinite cosmos, reminding you of the beauty of
            existence.
            </p>
        <div>
        <blockquote style={{ color: "lightgreen" }}>
            "Look up at the stars and not down at your feet. Try to make sense
            of what you see, and wonder about what makes the universe exist. Be
            curious." - Stephen Hawking
        </blockquote>
        <button
            onClick={generateInspiration}
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
            style={{
            padding: "10px 20px",
            backgroundColor: hovered1 ? "#4a4a4a" : "#2b2d42",
            color: "antiquewhite",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            }}
        >
            Unlock Ideas
        </button>
        <p>{extraInspiration || "Press above to be inspired/humbled!"}</p>
        </div>
        <Timer color="green" />
        <button
            onClick={openModal}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                padding: "10px 20px",
                backgroundColor: hovered ? "#45a049" : "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
        >
            Go LIMITLESS
        </button>
        
    <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Is time really a thing? or is it simply a human concept?</h2>
        <h3>Embrace the infinite possibilities of today ∞ ..go back once you are ready, the universe awaits!</h3>
    </Modal>
    </div>
    </>
    );
};

export default Reflection;