const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Joseph Sarwuan Tarka University Makurdi Benue State Nigeria (Former University Of Agriculture Makurdi) ' ,
                degree: 'BS, Computer Science',
                detail: "Bachelor's Degree in Computer Science from JOSTUM (Former FUAM) Makurdi.",
                year: '2017-2023'
            },

            {
                id: 1,
                title: 'Zoe information technology Ltd',
                degree: 'Diploma In software Engineering, Web Development',
                detail: "A 6 month IT Training on web development,where  i learnt web development using HTML,CSS, JAVASCRIPTS, and PHP ",
                year: '2021-2021'
            },
        ]
    },
    {
        expCards: [
            {
                id: 0,
                title: 'Philkolings ICT LTD',
                role: 'C.T.O (Chief Technology Officer)',
                url: 'https://www.grazacacademy.com/',
                desc: 'A tech company with innovations in AI/ML , software Development and Cybersecurity',
                year: '11/2024 - Present',
                location: 'Abuja FCT, Nigeria'
            },
            {
                id: 1,
                title: 'GRAZAC Academy',
                role: 'Data Analystics Facilitator',
                url: 'https://www.grazacacademy.com/',
                desc: 'As a Data analyst Facilitator, I trained the students in Python packages for Data analysis and visualisation, such as  Pandas, Numpy, Scikit-learn, Matplotlib, Seaborn, and Streamlit to analyse and visualise data and also make data reports.',
                year: '01/2024 - 05/2024',
                location: 'Abeokuta Ogun State, Nigeria'
            },
            {
                id: 2,
                title: '720 Degree Innovation Hub',
                role: 'Python Backend Developer Instructor (NYSC)',
                url: 'https://720degreehub.com/',
                desc: 'As a Nigeria Youth Corps member, I served in 720degree Hub  Tech Academy  as a Python Backend  developer training students in Python  and Python frameworks ( Django, Flask), Javascript and  MYSQL for web development.',
                year: '09/2023 - 05/2024',
                location: 'Abeokuta Ogun State, Nigeria'
            },


            {
                id: 3,
                title: 'Project Assistant (PhD Concept Drift Detection App)',
                role: 'Data Engineer',
                url: 'no website',
                desc: "Assisted in developing a real-time concept drift detection application,Utilized PyFlink, Azure, ElasticsearchDB, and Kafka for efficient data streaming and deployment.",
                year: '01/2023 – 04/2023',
                location: 'USM (Malaysia) '
            },
            {

                id: 4,
                title: 'Project Assistant (Master’s Project - Intrusion Detection in MANETs)',
                role: 'Data Security Engineer',
                url: 'no website',
                desc: "Developed an improved algorithm for Intrusion Detection and Prevention in Mobile Ad-hoc Networks (MANETs) using Python. Simulated real-world MANET environments, integrating RSA and 3DES cryptographic techniques to enhance network security.Evaluated system performance under different network conditions, validating its effectiveness in preventing attacks.",
                year: '12/2023 – 05/2024',
                location: 'FUAM ,Makurdi,Benue State Nigeria'
                
               
            }

            ,
            {
                id: 5,
                title: 'Zoe information technology Ltd',
                role: 'PHP Web Developer',
                url: 'https://www.linkedin.com/search/results/all/?keywords=Zoe+information+technology+Ltd&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BV0bGO6nXTWieAB6YsSk1gA%3D%3D',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on MYSQL",
                year: '09/2020 - 02/2021',
                location: 'Makurdi, Benue State, Nigeria'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}


