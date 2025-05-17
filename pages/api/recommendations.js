// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const recommendationCard = [
  {
    id: 0,
    name: 'Swande Marceliinus',
    image: "images/marcel.jpg",
    designation: 'Software engineer |php|Laravel|react|python|IT consultant|computer scientist|data analyst|Tech instructor',
    view: "he is a good software developer, expert at machine learning, artificial intelligence and a good graphic designer! 👍! 🌟",
    linkednURL: "https://www.linkedin.com/in/swandemarcel/"
  },
  {
    id: 1,
    name: 'Onuh Sani',
    image: "images/sani.jpg",
    designation: 'Software Developer at Otib Tech Enterprise',
    view: "I have had the pleasure of working with Fakorede Akinwande Alexander on multiple projects, and I can confidently say he is one of the most skilled Python developers and machine learning engineers I’ve collaborated with. His deep understanding of backend development, data science, and cloud technologies sets him apart. Alexander not only writes clean and efficient code but also brings a problem-solving mindset that enhances every project. His ability to implement machine learning models, optimize software systems, and lead technical teams makes him a valuable asset to any organization. I highly recommend him for any role that requires expertise in AI, cybersecurity, and scalable application development.",
    linkednURL: "https://www.linkedin.com/in/onuh-sani-0b86ba250/"
  },
  // {
  //   id: 2,
  //   name: 'Nasir Khan',
  //   image: "images/nasir.jpg",
  //   designation: 'MERN | JavaScript | Tailwind | Sass | Bootstrap',
  //   view: "I wholeheartedly recommend Osama as a talented React frontend developer with an incredible flair for UI/UX design. His proficiency in Node.js further enhances his capabilities, allowing him to build robust and scalable applications. Osama's attention to detail, problem-solving skills, and dedication to delivering exceptional results make him a valuable addition to any development team.",
  //   linkednURL: "https://www.linkedin.com/in/nasirkhan22/"
  // },
  // {
  //   id: 3,
  //   name: 'Muhammad Ullah',
  //   image: "images/muhammad.jpeg",
  //   designation: 'MERN Stack Developer at Productbox',
  //   view: "I highly recommend Osama Javed for web frontend development positions. Their expertise in ReactJS and Next.js, combined with their professionalism and dedication, make them an invaluable asset to any team.",
  //   linkednURL: "https://www.linkedin.com/in/muhammadullahafridi/"
  // },
]
export default function handler(req, res) {
  res.status(200).json(recommendationCard)
}
