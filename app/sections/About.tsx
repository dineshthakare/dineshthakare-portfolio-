import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Dinesh Thakare."}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />

                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[24px]">
                        <AnimatedBody text="Full Stack Web Developer with 2.5+ years of experience delivering scalable, secure web applications and 
                            APIs using the MERN stack. Proficient in React.js, Node.js, and AWS services with strong backend 
                            experience in  MySQL, MongoDB, and PostgreSQL." />
                        <AnimatedBody
                            delay={0.1}
                            text="I'm passionate about writing clean, efficient code and transforming complex problems into simple, elegant solutions. I have deep experience with RESTful APIs, authentication systems using JWT and OAuth, and automation through cron jobs and third-party integrations like Telegram bots."
                        />

                        <AnimatedBody
                            delay={0.2}
                            text="Currently, I'm focused on full-stack development using the MERN stack, where I build and maintain scalable web applications with efficient REST APIs, dynamic React interfaces, and robust backend systems. I work extensively with tools like MongoDB, PostgreSQL, and AWS S3."
                        />

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
