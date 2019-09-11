import React from 'react';

const LandingPage = () => {
  const bg_image = process.env.PUBLIC_URL + '/images/landing.jpg';
  return (
    <div style={{minHeight:"650px", backgroundImage:"url(" + bg_image + ")", backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
    
    </div>
  )
}
export default LandingPage;