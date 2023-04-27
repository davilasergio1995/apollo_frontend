import {useState,useEffect,useContext} from 'react';
import './MemberSignup.css';
import QRcode from 'qrcode';
import Axios from 'axios';
import Navbar from '../Navbar/Navbar';
import { AccountTypeContext } from '../Home/Home';
import SlateGreyForm from '../../styled-components/SlateGreyForm/SlateGreyForm';
import SignupInputDiv from '../../styled-components/SignupInputDiv/SignupInputDiv';
import AccountTypeInputDiv from '../../styled-components/AccountTypeInputDiv/AccountTypeInputDiv';
import Button from '../../styled-components/Button/Button';
import {useNavigate} from 'react-router-dom';
import Cookies from 'universal-cookie';

const MemberSignup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [apartmentNumber, setApartmentNumber] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [birthday, setBirthday] = useState('');
    const [userType,setUserType] = useState('');
    const [userID, setUserID] = useState('');
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [display,setDisplay] = useState('none');
    const [src,setSrc] = useState('');
    const {accountType} = useContext(AccountTypeContext);
    let cookies = new Cookies();
    let sessionID = cookies.get('sessionID');

    const navigate = useNavigate();

    const displayHandler = () => accountType === 'admin' ? setDisplay('') : setDisplay('none');

    useEffect(() => {
        displayHandler();
    },[]);

    const firstNameHandler = (e) => {
        setFirstName(e.target.value);
    };

    const lastNameHandler = (e) => {
        setLastName(e.target.value);
    };

    const addressHandler = (e) => {
        setAddress(e.target.value);
    };

    const apartmentNumberHandler = (e) => {
        setApartmentNumber(e.target.value);
    };

    const cityHandler = (e) => {
        setCity(e.target.value);
    };

    const stateHandler = (e) => {
        setState(e.target.value);
    }

    const zipCodeHandler = (e) => {
        setZipCode(e.target.value);
    };

    const userIDHandler = (e) => {
        setUserID(e.target.value);
    };

    const usernameHandler = (e) => {
        setUsername(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const userTypeHandler = (e) => {
        switch (e.target.value) {
            case 'admin':
            setUserType('admin');
            break;

            case 'librarian':
            setUserType('librarian');
            break;

            case 'customer':
            setUserType('customer');
            break;

            default:
            return;
        }
    };

    const birthdayFormat = (val) => {
        let cleanedVal = val.replace(/[^\d]/g, '')
        if (!cleanedVal) return val;

        let length = cleanedVal.length;
        if (length < 2) {
            return cleanedVal;
        };

        if (length > 2 && length < 4) {
            return `${cleanedVal.slice(0,2)}/${cleanedVal.slice(2)}`;
        };

        if (length > 4 && length < 9) {
            return `${cleanedVal.slice(0,2)}/${cleanedVal.slice(2,4)}/${cleanedVal.slice(4)}`
        };

        if (length >= 9) {
            return `${cleanedVal.slice(0,2)}/${cleanedVal.slice(2,4)}/${cleanedVal.slice(4,8)}`
        }
    }

    const birthdayHandler = (e) => {
            let formattedBirthday = birthdayFormat(e.target.value);
            setBirthday(formattedBirthday);
    };

    const memberCreation = (e) => {
        e.preventDefault();
        let newMemberID = {
            firstName: firstName,
            lastName: lastName,
            address: address,
            apartmentNumber: apartmentNumber,
            city: city,
            state: state,
            zipCode: zipCode,
            birthday: birthday,
            userType: userType === '' ? 'customer' : userType,
            userID: sessionID,
            username: username,
            password: password
        };

        Axios.post('http://localhost:8000/api/signup',newMemberID)
        .then((response) => {
            if (response.data === 'signup successful') {
                alert(response.data);
                navigate('/');
            } else {
                alert(response.data);
            };
        }).catch(err => console.log(err))
        // QRcode.toDataURL(JSON.stringify(newMemberID)).then(setSrc);
        // setSubmitted(true);
    }
    if (!submitted) {
        return (
            <span>
            <Navbar></Navbar>
                <div>
                    <SlateGreyForm width='30em' height='24em' alignItems='space-between' justifyContent= 'space-around' flexDirection='row'>
                        <SignupInputDiv width='5em'>
                                <label id='firstName'></label>
                                <input className='input' htmlFor='firstName' type='text' placeholder='First Name' onChange={firstNameHandler}></input>
                        </SignupInputDiv>
                        <SignupInputDiv width='5em'>
                                <label id='lastName'></label>
                                <input className='input' htmlFor='lastName' type='text' placeholder='Last Name' onChange={lastNameHandler}></input>
                        </SignupInputDiv>
                        <SignupInputDiv width='10em'>
                            <label id='address'></label>
                            <input className='input' htmlFor='address' type='text' placeholder='Address' onChange={addressHandler}></input>
                        </SignupInputDiv>
                        <SignupInputDiv width='4em'>
                            <label id='apartmentNumber'></label>
                            <input className='input' htmlFor='apartmentNumber' type='text' placeholder='Apt/Bldg #' onChange={(apartmentNumberHandler)}></input>
                        </SignupInputDiv>
                        <SignupInputDiv width='5em'>
                            <label id='city'></label>
                            <input className='input' htmlFor='city' type='text' placeholder='City' onChange={cityHandler}></input>
                        </SignupInputDiv>
                        <SignupInputDiv width='2em'>
                            <label id='state'></label>
                            <input className='input' htmlFor='state' type='text' placeholder='State' maxLength='2' onChange={stateHandler}></input>
                        </SignupInputDiv>
                        <SignupInputDiv width='4em'>
                            <label id='zipCode'></label>
                            <input className='input' htmlFor='zipCode' type='text' placeholder='Zip Code' onChange={zipCodeHandler}></input>
                        </SignupInputDiv>
                        <SignupInputDiv width='5.2em'>
                            <label id='birthday'></label>
                            <input className='input' htmlFor='birthday' type='text' placeholder='MM/DD/YYYY' pattern='[0-9]{2}/[0-9]{2}/[0-9]{4}' onChange={birthdayHandler} value={birthday}></input>
                        </SignupInputDiv>
                        <SignupInputDiv>
                            <label id='username'></label>
                            <input className='input' htmlFor='username' type='text' placeholder='Username' onChange={usernameHandler}></input>
                        </SignupInputDiv>
                        <SignupInputDiv>
                            <label id='password'></label>
                            <input className='input' htmlFor='password' type='text' placeholder='Password' onChange={passwordHandler}></input>
                        </SignupInputDiv>
                        <AccountTypeInputDiv display={display}>
                            <select className='input' htmlFor='accountType' name='Account Type' id='accountType' onChange={userTypeHandler}>
                                <option value='' disabled selected hidden>Slc Acct Type</option>
                                <option value='admin'>Admin</option>
                                <option value='librarian'>Librarian</option>
                                <option value='customer'>Customer</option>
                            </select>
                        </AccountTypeInputDiv>
                        <Button width='6em' height='4em' marginTop='1em' onClick={memberCreation}>Create Account</Button>
                    </SlateGreyForm>
                </div>
            </span>
        )
    } else {
        return (
        <div>
            <img src={src}></img>
        </div>
            
        )
    }
    
};

export default MemberSignup