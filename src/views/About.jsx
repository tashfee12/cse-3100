import React from 'react';

const About = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* Mission Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Our Mission</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      {/* History Section */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Our History</h2>
        <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luc
        </p>
      </section>

      {/* Team Section */}
      <section>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Our Team</h2>
        <div style={{ display: 'flex', gap: '20px' }}>
          {/* Team Member 1 */}
          <div style={{ textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '150px' }}>
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="Team Member 1" 
              style={{ width: '100%', borderRadius: '50%' }} 
            />
            <h4 style={{ margin: '10px 0 5px', fontSize: '18px' }}>John Doe</h4>
            <p style={{ fontSize: '14px', color: '#666' }}>Director</p>
          </div>
          {/* Team Member 2 */}
          <div style={{ textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '150px' }}>
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="Team Member 2" 
              style={{ width: '100%', borderRadius: '50%' }} 
            />
            <h4 style={{ margin: '10px 0 5px', fontSize: '18px' }}>Jane Smith</h4>
            <p style={{ fontSize: '14px', color: '#666' }}>Manager</p>
          </div>
          {/* Team Member 3 */}
          <div style={{ textAlign: 'center', border: '1px solid #ccc', borderRadius: '8px', padding: '10px', width: '150px' }}>
            <img 
              src="https://randomuser.me/api/portraits/men/65.jpg" 
              alt="Team Member 3" 
              style={{ width: '100%', borderRadius: '50%' }} 
            />
            <h4 style={{ margin: '10px 0 5px', fontSize: '18px' }}>Mark Taylor</h4>
            <p style={{ fontSize: '14px', color: '#666' }}>Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
