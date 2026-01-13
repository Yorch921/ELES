import React from 'react';
import './Workouts.css';

function Workouts() {
    const workoutCategories = [
        { title: 'Full Body Sculpt', duration: '45 min', level: 'Intermediate' },
        { title: 'Core Igniter', duration: '20 min', level: 'All Levels' },
        { title: 'Upper Body Tone', duration: '30 min', level: 'Beginner' },
        { title: 'Legs & Glutes', duration: '40 min', level: 'Advanced' },
        { title: 'Stretch & Flow', duration: '25 min', level: 'All Levels' },
        { title: 'Cardio Pilates', duration: '35 min', level: 'Intermediate' },
    ];

    return (
        <div className="page-container workouts-page">
            <div className="container">
                <header className="page-header">
                    <h2>WORKOUTS</h2>
                    <p>Choose your movement.</p>
                </header>

                <div className="filters">
                    <button className="active">All</button>
                    <button>Strength</button>
                    <button>Cardio</button>
                    <button>Flexibility</button>
                </div>

                <div className="workouts-grid">
                    {workoutCategories.map((workout, index) => (
                        <div key={index} className="workout-card">
                            <div className="card-image placeholder"></div>
                            <div className="card-content">
                                <h3>{workout.title}</h3>
                                <div className="meta">
                                    <span>{workout.duration}</span> • <span>{workout.level}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Workouts;
