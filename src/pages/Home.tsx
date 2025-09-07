import '../App.css';

export default function Home() {
  return (
    <div className="home-container">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="home-content">
        <h1 className="home-title">Welcome to JPlatform</h1>
        <p className="home-subtitle">Your central hub for curated job opportunities!</p>
        <p className="home-description">
          JPlatform is part of SJA Pathway, designed to give all our members—whether interns, students, or job seekers—access to exclusive and general job opportunities. Recruiters directly share openings with our platform, and all members benefit from personalized guidance and skill-building resources to maximize their chances of success.
        </p>

        <div className="home-benefits">
          <h2 className="benefits-title">Why Use JPlatform?</h2>
          <ul className="benefits-list">
            <li>✅ Access to curated job opportunities from verified recruiters</li>
            <li>✅ Free and paid members alike can view and apply to jobs</li>
            <li>✅ Interns from SJA Pathway also gain direct job exposure</li>
            <li>✅ Personalized support to improve your skills and profile</li>
            <li>✅ A centralized platform to manage applications and track progress</li>
          </ul>
        </div>

        <div className="home-pathways">
          <h2 className="pathways-title">Who Can Benefit?</h2>
          <div className="pathway">
            <h3 className="pathway-title">SJA Pathway Interns</h3>
            <p className="pathway-description">
              All interns get access to real job opportunities as part of their learning journey.
            </p>
          </div>
          <div className="pathway">
            <h3 className="pathway-title">General Job Seekers</h3>
            <p className="pathway-description">
              Anyone enrolled in SJA Pathway can browse and apply to curated job openings, whether free or paid members.
            </p>
          </div>
        </div>
      </div>
      </div>
  );
}