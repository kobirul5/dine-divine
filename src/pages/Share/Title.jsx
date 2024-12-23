import React from 'react';
import { Link } from 'react-router-dom';


const Title = ({title, image, pageName}) => {
    return (
             <div
                className="hero min-h-[300px] mb-14"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-85 "></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
                        <div className="flex justify-center items-center gap-4">
                            <Link to="/">Home</Link> ||
                            <Link className="text-[#dab44d]">{pageName}</Link>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Title;