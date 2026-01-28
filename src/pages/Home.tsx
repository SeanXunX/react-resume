import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#f0f0f0' }}>
    <h1 style={{ marginBottom: '40px' }}>Select Resume Version</h1>
    <div style={{ display: 'flex', gap: '20px' }}>
      <Link to="/en">
        <button style={{ padding: '15px 30px', fontSize: '16px', cursor: 'pointer' }}>English Resume (Work)</button>
      </Link>
      <Link to="/research_en">
        <button style={{ padding: '15px 30px', fontSize: '16px', cursor: 'pointer' }}>English Resume (Research)</button>
      </Link>
      <Link to="/zh">
        <button style={{ padding: '15px 30px', fontSize: '16px', cursor: 'pointer' }}>Chinese Resume (Work)</button>
      </Link>
    </div>
  </div>
);

export default Home;
