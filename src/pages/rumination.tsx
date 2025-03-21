import debounce from 'lodash/debounce';
import React, { useEffect, useState } from "react";
import Modal from "../components/modal";
import NavBar from "../components/navbar";
import Timer from "../components/timer";
import style from './page.module.css';


const Rumination: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    
    const openModal = () => {
        setIsModalOpen(true);
    };
    
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLetGo = () => {
        const textarea = document.getElementById("reflector") as HTMLTextAreaElement | null;
        if (textarea) {
            textarea.value = ""; // Clears the textarea content
            openModal();
        } else {
            console.error("Textarea with ID 'reflector' not found.");
        }
    };

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [open, setOpen] = useState(false); // State received from NavBar

// state for dynamic button color
    const [hovered, setHovered] = useState(false);

// Check for screen size
    const handleResize = debounce (() => {
        setIsMobile(window.innerWidth <= 768);
    }, 200);

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
            <h1 style={{ color: "coral" }}>RUMINATION Chamber</h1>
            {/* Timer Component */}
            
            <p className={style.introspection}>
                Take a moment to look inward. Look back at your day, your thoughts, and your emotions.
                Write down what you discover about yourself and - if it is the case - how you intend
                to use it in order to grow.
            </p>

            <div>
                <blockquote style={{ color: "orange" }}>
                    "Knowing yourself is the beginning of all wisdom." - Aristotle
                </blockquote>
            </div>
            
            {/* Textarea for user input */}
            <textarea
                id="reflector"
                placeholder="What are you thinking/feeling? ..write it down ..."
                rows={5}
                style={{
                    width: "90%",
                    maxWidth: "600px",
                    padding: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    fontSize: "1.2rem"
                }}
            />

            {/* Button to clear textarea and display alert */}
            <button
                onClick={handleLetGo}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                style={{
                    display: "block",
                    margin: "20px auto",
                    padding: "10px 20px",
                    backgroundColor: hovered ? "#F57C00" : "#FF9800",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                }}
            >
                Let it GO
            </button>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <h2>Do we belong to the past? Or the past belongs to us?</h2>
            <h3>Don't live forgetting 🧠 ..your message is being dispensed to the cosmos. Any thought is just temporary, right? Keep on exploring</h3>
        </Modal>

        <Timer color="coral"/>
        </div>
        </>
    );
};

export default Rumination;
