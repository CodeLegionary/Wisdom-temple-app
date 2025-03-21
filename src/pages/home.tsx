import debounce from 'lodash/debounce';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/navbar';
import style from './page.module.css';

const Home: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [open, setOpen] = useState(false); // State received from NavBar

    // Check for screen size
    const handleResize = debounce(() => {
        setIsMobile(window.innerWidth <= 768);
    }, 200);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
            <NavBar setHomeOpen={setOpen} />
            <div className={getDynamicStyle()}>
                <article>
                    <section>
                        <h1>The AntiChamber of WISDOM</h1>
                        <h2>INTRO</h2>
                        <p>
                            Welcome to your mindful journey, hero! In order to choose a path, just remember that time is your most precious asset since ever.
                        </p>
                        <p>
                            The universal clock is ticking, with the same pace as usual: no pressure. Time is an ally, our home.
                        </p>
                        <p>
                            Feel free to choose 1 of the 3 paths and enjoy your time, wisely.
                        </p>
                    </section>
                    <section>
                        <h2>LEGEND</h2>
                        <p>
                            <strong style={{ color: 'lightgreen' }}>
                                <Link to="/reflection" style={{ textDecoration: 'none', color: 'lightgreen' }}>
                                &nbsp;REFLECTION Chamber&nbsp;
                                </Link>
                            </strong>{' '}
                            The ideal place to start from, it focuses on nature and universal creation.
                        </p>
                        <p>
                            <strong style={{ color: 'turquoise' }}>
                                <Link to="/meditation" style={{ textDecoration: 'none', color: 'turquoise' }}>
                                &nbsp;MEDITATION Chamber&nbsp;
                                </Link>
                            </strong>{' '}
                            The perfect place to relax and focus on life, with no specific scope.
                        </p>
                        <p>
                            <strong style={{ color: 'coral' }}>
                                <Link to="/rumination" style={{ textDecoration: 'none', color: 'coral' }}>
                                    &nbsp;RUMINATION Chamber&nbsp;
                                </Link>
                            </strong>{' '}
                            Progress & deep-state awareness start from yourself!
                        </p>
                    </section>
                </article>
            </div>
        </>
    );
};

export default Home;
