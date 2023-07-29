import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const ResumePage = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, []);

    return (
        <div className='container resume-page'>
            <div className='text-zone'>
                <h1> 
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['R', 'e', 's', 'u', 'm', 'e']}
                        idx={15}
                    />
                </h1>
            </div>
            
        </div>
    );
}

export default ResumePage;