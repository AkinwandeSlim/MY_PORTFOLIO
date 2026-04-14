import Footer from '../components/Footer';
import BannerLayout from '../components/Common/BannerLayout';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <BannerLayout>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-MidNightBlack via-MidNightBlack to-MidNightBlack">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    {/* Profile Section */}
                    <div className="mb-8">
                        <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-Green to-Blue p-1">
                            <img 
                                src="/images/Alex.jpg" 
                                alt="Fakorede Akinwande Alexander" 
                                className="w-full h-full rounded-full object-cover border-2 border-MidNightBlack"
                            />
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-Snow mb-4">
                            Fakorede Akinwande Alexander
                        </h1>
                        
                        <h2 className="text-xl md:text-2xl text-Green font-semibold mb-6">
                            Data Scientist & Machine Learning Engineer
                        </h2>
                        
                        <p className="text-LightGray text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
                            Building intelligent solutions with Python, TensorFlow, and modern web technologies. 
                            Specialized in NLP, deep learning, and full-stack development. 
                            Passionate about leveraging AI to solve real-world challenges.
                        </p>
                    </div>

                    {/* Key Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-Green mb-1">10+</div>
                            <div className="text-sm text-LightGray">Projects</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-Green mb-1">5+</div>
                            <div className="text-sm text-LightGray">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-Green mb-1">AI/ML</div>
                            <div className="text-sm text-LightGray">Specialization</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl md:text-3xl font-bold text-Green mb-1">Full-Stack</div>
                            <div className="text-sm text-LightGray">Development</div>
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a 
                            href="/portfolio" 
                            className="px-8 py-4 bg-Green text-MidNightBlack font-semibold rounded-lg hover:bg-Blue transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            View My Portfolio
                        </a>
                        <a 
                            href="mailto:alexdata2022@gmail.com" 
                            className="px-8 py-4 border-2 border-Green text-Green font-semibold rounded-lg hover:bg-Green hover:text-MidNightBlack transition-all duration-300 transform hover:scale-105"
                        >
                            Get In Touch
                        </a>
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="mb-12">
                        <h3 className="text-LightGray text-sm font-semibold mb-4 uppercase tracking-wider">Tech Stack</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Python', 'TensorFlow', 'React', 'Next.js', 'FastAPI', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                                <span 
                                    key={tech}
                                    className="px-3 py-1 bg-LightGray/10 text-LightGray text-sm rounded-full border border-LightGray/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex justify-center space-x-6">
                        <a href="https://github.com/AkinwandeSlim" target="_blank" rel="noopener noreferrer" 
                           className="text-LightGray hover:text-Green transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/akinwandealex" target="_blank" rel="noopener noreferrer" 
                           className="text-LightGray hover:text-Green transition-colors duration-300">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>
                        <a href="mailto:alexdata2022@gmail.com" 
                           className="text-LightGray hover:text-Green transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
};

export default Home;