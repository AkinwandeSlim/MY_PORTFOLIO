const review = [
    {
        id: 0,
        clientName: 'Dr Hamzad',
        clientLocation: 'Malaysia',
        clientSource: 'Referall',
        clientReview: 'It is always nice to work with him. The work is finished quickly and he does more than is asked of him. It is also clear that he has a lot of knowledge of the work he does. I look forward to our next collaboration.'
    },
    {
        id: 1,
        clientName: 'Dr. Angbera',
        clientLocation: 'Malaysia',
        clientSource: 'University Collaboration',
        clientReview: 'Fakorede played a key role in assisting with my PhD research on concept drift detection. His ability to design and implement real-time machine learning solutions was invaluable to my project. Highly skilled and reliable professional!'
    },
    {
        id: 2,
        clientName: 'Wong',
        clientLocation: 'China',
        clientSource: 'Fiverr',
        clientReview: 'He is very good with communication and experienced website developer, great experience to work with him.'
    },
    {
        id: 3,
        clientName: 'Engr. Mumuni Salami',
        clientLocation: 'Malaysia',
        clientSource: 'Industry Research',
        clientReview: 'Fakorede contributed significantly to our research on dust control and management in mining sites. His expertise in machine learning applications and data analysis was instrumental in optimizing our predictive models. Great to work with!'
    },
    {
        id: 4,
        clientName: 'Mrs Edom Biem',
        clientLocation: 'Nigeria',
        clientSource: 'Academic Research',
        clientReview: 'Fakorede’s work in intrusion detection for MANETs was impressive. His knowledge of cybersecurity, cryptographic security, and Python development made a huge impact on our research. A highly dedicated and skilled professional!'
    }
]
export default function handler(req, res) {
    res.status(200).json(review)
}
