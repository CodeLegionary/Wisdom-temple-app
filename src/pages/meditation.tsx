import debounce from 'lodash/debounce';
import React, { useEffect, useState } from "react";
import audioFile from '../assets/Que_sera_sera_-_vinh.mp3';
import Modal from "../components/modal";
import NavBar from "../components/navbar";
import Timer from '../components/timer';
import style from './page.module.css';

const Meditation: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [open, setOpen] = useState(false); // State received from NavBar

// state for dynamic button color
    const [hovered, setHovered] = useState(false);
    const [hovered1, setHovered1] = useState(false);

// Check for screen size
    const handleResize = debounce (() => {
        setIsMobile(window.innerWidth <= 768);
    }, 200);

// Add event listener for window resizing
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

// Dynamically calculate the correct styles
    const getDynamicStyle = () => {
        if (isMobile && open) {
            return `${style.main} ${style.main2}`; // Apply both classes for mobile + open
        }
        return style.main; // Default class
    };
    return (
        <>
        <NavBar setHomeOpen={setOpen}/>
        <div className={getDynamicStyle()}>
            <h1>MEDITATION Chamber</h1>
            
            <p className={style.introspection}>
                Breathe deeply and release all tension. Let go of thoughts and immerse yourself in the present moment.
                Allow the rhythm of your breath to guide you to a state of calm awareness, free of any schemes or expectations.
            </p>
            <div style={{ display: "flex",  flexDirection: isMobile? "column" : "row", justifyContent: "center", alignItems: "center" }}>
            
            <div style={{ textAlign: "center", margin: "10px" }}>
                <p>Use silence or listen to:&nbsp;</p>
            </div>
            
            <audio controls style={{ margin: "0", width: "70%", maxWidth: "600px" }}>
                <source src={audioFile} type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>

            <div style={{ textAlign: "center", margin: "10px" }}>
            <p>
            &nbsp;'
            <a href="https://www.jamendo.com/track/960224/que-sera-sera" target="_blank" rel="noreferrer"
            onMouseEnter={() => setHovered1(true)}
            onMouseLeave={() => setHovered1(false)}
                style={{
                all: "unset", // Resets all inherited styles
                color: hovered1 ? "bisque" : "pink", // Default link color
                textDecoration: "underline", // Default underline for links
                cursor: "pointer", // Pointer cursor for links
                }}
            >
            Que sera sera
            </a>
            ' by VINH
            </p>
            </div>

            </div>
            <div>
                <blockquote style={{ color: "lightblue" }}>
                    "You should sit in meditation for twenty minutes every day - unless you are too busy. Then you should sit for an hour."
                    - Zen Proverb
                </blockquote>
            </div>
            <Timer color="navy"/>
            
            <button
                onClick={openModal}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    padding: "10px 20px",
                    backgroundColor: hovered ? "#1976D2" : "#2196F3",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Get INSPIRATION
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Does 'always' exist? or do we just have the eternal 'now'&nbsp;?</h2>
                <h3>Imagine time had frozen ❄️ ..feel the moment and let peace flow through you. Live any instant as if it were eternity ...</h3>
            </Modal>
        </div>
        </>
    );
};

export default Meditation;
