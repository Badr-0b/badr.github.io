import React from 'react';

export default function Home() {
    return (
        <main className="content">
            <div className="background-container"></div>
            <div className="overlay"></div>

            <h1>SYSTEM IN DEV. <br /><span>EXPECT SOMETHING SOON.</span></h1>

            <div className="progress-bar">
                <div className="progress-fill"></div>
            </div>

            <p>I&apos;m building the foundations right now. Scroll down to test the navbar.</p>

            <div className="note-card">
                <p className="license-note">Note: Please stick to the license.</p>
            </div>
        </main>
    );
}
