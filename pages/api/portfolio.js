import portfolioData from '../../data/portfolio.json';

export default function handler(req, res) {
    // Sort projects by ID in descending order (newest first)
    const sortedPortfolio = [...portfolioData].sort((a, b) => b.id - a.id);
    res.status(200).json(sortedPortfolio)
}
