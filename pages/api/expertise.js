const expertise = [
    {
        id: 0,
        title: 'Python Development',
        desc: 'I am highly proficient in Python, specializing in backend development, automation, and data-driven applications. My experience includes building scalable and secure web applications using Django and Flask, ensuring performance, maintainability, and security. I have a strong grasp of software optimization techniques, debugging strategies, and best coding practices to maintain clean, efficient, and reusable code. My work also involves implementing microservices architecture to enhance system scalability and reliability.',
    },
    {
        id: 1,
        title: 'Data Science & Machine Learning',
        desc: "With a solid background in data science, I have extensive experience in data preprocessing, exploratory data analysis (EDA), and feature engineering using libraries such as Pandas, NumPy, and Scikit-learn. I have developed and deployed predictive models for academic performance analysis, crime forecasting, and industrial analytics. My expertise spans both supervised and unsupervised learning techniques, including the implementation of K-Means clustering for customer segmentation. Additionally, I have worked with deep learning frameworks like TensorFlow and PyTorch for AI model development, training, and deployment, ensuring the models are optimized for accuracy and efficiency.",
    },
    {
        id: 2,
        title: 'Cybersecurity & Cryptographic Systems',
        desc: 'I have a strong background in cybersecurity, particularly in intrusion detection and cryptographic security. I developed an Intrusion Detection & Prevention System for Mobile Ad-hoc Networks (MANETs) using Python, integrating RSA and 3DES encryption techniques to enhance network security. My work in cryptographic systems extends to data protection, encryption, and penetration testing, ensuring resilience against cyber threats. By leveraging secure coding practices, object-oriented modeling, and encryption algorithms, I enhance the security of network infrastructures and data transmission systems.',
    },
    {
        id: 3,
        title: 'Cloud Computing & Big Data',
        desc:'My expertise in cloud computing and big data spans working with AWS and Azure for deploying machine learning models and applications in scalable cloud environments. I have experience in using distributed data storage systems such as Kafka, Flink, and Cassandra to manage large-scale data processing and real-time analytics. My work focuses on designing and implementing cloud-based architectures that support high-availability, fault-tolerance, and efficient resource utilization for enterprise-level solutions.',
    },
    {
        id: 4,
        title: 'Research & Academic Contributions',
        desc: "I have actively contributed to academic research and real-world projects, assisting in PhD-level studies focused on advanced machine learning applications. My contributions include a Concept Drift Detection System for real-time machine learning models, which ensures that predictive models remain adaptable to changing data patterns. Additionally, I worked on a Mining Engineering PhD project, where I applied machine learning techniques to dust control and environmental monitoring in mining sites, helping optimize industrial safety and compliance measures. My research-driven approach enables me to apply innovative machine learning strategies to complex real-world challenges.",
    },

    {
        id: 5,
        title: 'Teaching & Mentorship',
        desc: "Beyond technical expertise, I am passionate about education and mentorship, having trained and guided students in data science, machine learning, and Python development. I have designed structured learning paths, delivered hands-on training in data analysis, and mentored students in real-world projects to enhance their employability. Additionally, I have been a speaker at Data Science Africa Summit and Python Nigeria Meetup, where I have conducted workshops on advanced Python development and AI applications. My goal is to bridge the knowledge gap by equipping aspiring tech professionals with the skills needed to thrive in the industry.",
    },
    {
        id: 6,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 7,
        title: 'Open Source Contributor',
        desc: "Open Source is the future. I usually take some time on weekend and contribute into opensource project. It gives me opportunity to learn from best developer's practices and also gives me a chance to help others and contribute into the community for the good.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
