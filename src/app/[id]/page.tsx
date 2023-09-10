// OtroComponente.tsx

import React from 'react';
import MovieDetails from './moviedetails';

const Page: React.FC = () => {
  return (
    <div>
      <MovieDetails params={{ id: '346698' }} />
    </div>
  );
};

export default Page;
