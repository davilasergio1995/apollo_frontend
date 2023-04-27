import {useNavigate} from 'react-router-dom';
import {useEffect} from 'react';

const SplashPage = () => {
    let navigate = useNavigate()
    
    useEffect(() => {
        navigate('/');
    },[navigate]);
    
    return(
        <span>
            Redirecting. God I hope this works...
        </span>
    )
};

export default SplashPage