import axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2%;
    align-items: center;
`

interface IUserLoginProps {
    page: string;
}

const UserLoginPage: React.FunctionComponent<IUserLoginProps> = ({page}) => {
    const [userLogin, setUserLogin] = React.useState([])
    const [username, setUsername] = React.useState<string | null>('');
    const [password, setPassword] = React.useState<string | number>('')


    // const LoginUser = (e: any) => {
    //     e.preventDefault();
    //     Axios.post('http://localhost:5000/login', {
    //         username,
    //         password,
    //     }).then((response: any) => {
    //         setUserLogin([...userLogin, {
    //             username,
    //             password,
    //         }])
    //         console.log(response.data)
    //     })
    // }


const loginUser = async (data: any) => {
        await axios.post('http://localhost:5000', data)
        .then((res: any) => {
            if(res) {
                return {
                    data: res.data,
                    authenticated: true,
                    token: res.token,
                    isLoading: false,
                }
            } else {
                return {
                    authenticated: false,
                    token: undefined,
                    data: undefined,
                    isLoading: false,
                }
            }
        })
        .then((response) => {
            setUserLogin([...userLogin, {
                username,
                password
            }])
            console.log(response.data)
        })
    }
    console.log(loginUser)

  return (
    <Container>
        <h1>{page}</h1>
        <form>
            <div>
                <label>Username:</label>
                <input type='text' />
            </div>
            <div>
                <label>Password:</label>
                <input type='password' />
            </div>
            <div>
                <button 
                    type='submit' 
                    onClick={loginUser}>
                    Login
                </button>
            </div>
        </form>
    </Container>
  );
}

export default UserLoginPage;

