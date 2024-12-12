import React, {useState, useEffect} from "react";
import "./Mesh.css"; // Import CSS file for styling

const Mesh = () => {
    const gridSize = 10; // Size of the grid (10x10)
    const [trigger, setTrigger] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTrigger((prevKey) => prevKey ^ 1); // Increment the key to force re-render
        }, 5000); // Change every x seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);
    return (
        <div className="mesh-container">
            {Array.from({ length: gridSize * gridSize }).map((_, index) => {
                const row = Math.floor(index / gridSize);
                const col = index % gridSize;

                // Calculate opacity based on distance from the center
                const center = (gridSize - 1) / 2;
                const distance = Math.sqrt(Math.pow(row - center, 2) + Math.pow(col - center, 2));
                const maxDistance = Math.sqrt(2 * Math.pow(center, 2));
                var opacity = 1 - distance / maxDistance;
                const key = Math.random();
                if(key>0.5)opacity = opacity - 0.2;

                return (
                    <div
                        key={index}
                        className="mesh-item"
                        style={{
                            backgroundColor: "var(--purple)",
                            opacity: opacity,
                        }}
                    ></div>
                );
            })}
        </div>
    );
};

export default Mesh;
