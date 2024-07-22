import React from "react";

function Restaurants() {
    return (
        <div className="text-white">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center justify-center"
                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/p/AF1QipMDeDBHQ1Ro9_Mvx_ABkONZ4PE6hT3FbW5BDt9e=s680-w680-h510')" }}
            >
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div> {/* Semi-transparent overlay */}
        
                <h1 className="text-white text-4xl font-bold p-4">Restaurants</h1>
            </div>
        </div>
    );
}

export default Restaurants;

