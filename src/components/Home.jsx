import React from 'react';
import Lottie from "lottie-react";
import exams from "../assets/exams.json";
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="dark:text-gray-100">
            <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-gray-700 text-5xl font-bold leading-none sm:text-6xl font-mono">
                    Welcome to <span className='text-violet-500'>QuizBox</span>
                    </h1>
                    <p className="mt-6 mb-5 text-lg sm:mb-8 text-gray-700">
                    Quizzes can be revealingly helpful. Your quiz may provide feedback after taking it, so you will know which questions you got right and wrong. This helps you identify any gaps in your knowledge and allows you to determine what you should spend more time studying.
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                        <Link rel="noopener noreferrer" to="/quiz" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:dark:bg-violet-600">Take A Quiz</Link>
                        <Link rel="noopener noreferrer" to="/statistic" className="px-8 py-3 text-lg font-semibold border border-gray-500 rounded text-gray-900 hover:bg-slate-200">Stastistics</Link>
                    </div>
                </div>
                <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <Lottie animationData={exams} loop={true} />;
                </div>
            </div>
        </section>
    );
};

export default Home;