'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About: React.FC = () => {
    const router = useRouter();

    // Team data
    const team = [
        {
            name: 'Michael Kwasi Abrefa',
            position: 'CEO & Co-Founder',
            imageSrc: '/mike.jpeg',
            description: 'Michael is a seasoned entrepreneur with a passion for building innovative solutions that drive business growth. He is dedicated to helping local businesses thrive in the digital age.',
            id: 1,
        },
        {
            name: 'Richmond Adu-Kyere',
            position: 'CTO & Co-Founder',
            imageSrc: '/richmond.jpg',
            description: 'Richmond is a seasoned software engineer with a passion for building scalable and robust applications. He is dedicated to delivering high-quality solutions that drive business growth.',
            id: 2,
        },
        {
            name: 'Sarfo Kusi',
            position: 'Engineering Lead',
            imageSrc: '/kusi.jpg',
            description: 'Sarf is a seasoned engineer with a passion for industrial revolution.',
            id: 3,
        },
        {
            name: 'Emmmanuel Sedem',
            position: 'Lead UI/UX Designer',
            imageSrc: '/sedem.jpg',
            description: 'Emmanuel is a creative genius with a keen eye for design. He is dedicated to creating visually stunning and user-friendly interfaces that elevate the user experience.',
            id: 4,
        },
    ];

    const navigateToDetails = (id: number) => {
        router.push(`/team/${id}`);
    };

    return (
        <section className="dark:bg-gray-900 py-16 px-6">
            <div className="max-w-7xl mx-auto text-center">
                <motion.h1
                    className="text-6xl font-extrabold text-gray-800 dark:text-white"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    About Us
                </motion.h1>
            </div>

            {/* Mission, Vision, Values without Images */}
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
                {['Mission', 'Vision', 'Values'].map((item, index) => (
                    <motion.div
                        key={item}
                        className="p-8 bg-white dark:bg-dark rounded-lg shadow-md transition-all duration-300 transform hover:shadow-xl"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <h2 className="text-4xl font-bold text-primary mb-4">{item}</h2>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {item === 'Mission' && "To deliver cutting-edge solutions that address the challenges faced by local businesses while fostering growth through innovation."}
                            {item === 'Vision' && "We envision a future where local businesses leverage modern solutions to compete globally and flourish sustainably."}
                            {item === 'Values' && (
                                <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 leading-relaxed text-left">
                                    <li>Innovation & Excellence</li>
                                    <li>Integrity & Transparency</li>
                                    <li>Collaboration & Partnership</li>
                                    <li>Client-Centric Approach</li>
                                </ul>
                            )}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Team Section */}
            <div className="mt-16 max-w-7xl mx-auto text-center">
                <h2 className="text-5xl font-bold text-gray-800 dark:text-white mb-8">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {team.map((member) => (
                        <motion.div
                            key={member.id}
                            className="bg-white dark:bg-dark   p-6 rounded-lg cursor-pointer hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                            onClick={() => navigateToDetails(member.id)}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={member.imageSrc}
                                alt={member.name}
                                className="w-48 h-48 mx-auto rounded-full object-cover mb-4"
                                width={192}
                                height={192}
                            />
                            <h3 className="text-xl font-semibold text-primary mb-1">{member.name}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{member.position}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
