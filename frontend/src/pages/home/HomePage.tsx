import React from 'react';
import { HomeBlock1, HomeBlock2 } from '../../widgets';

export const HomePage: React.FC = () => {
return (
<main>
    <HomeBlock1/>
    <div className="container">
        <HomeBlock2/>
    </div>
 </main>
);
};