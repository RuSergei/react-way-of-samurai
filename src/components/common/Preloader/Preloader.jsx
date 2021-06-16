import React from 'react';
import preloader from '../../../assets/img/loading.gif';

function Preloader(props) {

  return (
    <div>
      <img style={{ width: '200px' }} src={preloader} />
    </div>
  )
}

export default Preloader;