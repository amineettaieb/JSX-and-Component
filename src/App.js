import React from 'react';
import ProfilePhotos from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';

function App() {
  return (


    <div className="App" style={{display: 'flex', 
    flexDirection: 'column', alignItems: 'center', marginTop:'100px'}}>
       <ProfilePhotos/>
       <FullName/>
       <Address/>
    </div>
  );
}

export default App;
