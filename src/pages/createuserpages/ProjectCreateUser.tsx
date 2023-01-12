import * as React from 'react'
import styled from 'styled-components';
import Axios from 'axios';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center:
    margin: 2%;
`

interface IProjectLoginProps {
    page: string;
}
 
const ProjectCreateUser: React.FunctionComponent<IProjectLoginProps> = ({page}) => {
    const [listOfUsers, setListOfUsers] = React.useState([]);
    const [username, setUsername] = React.useState<string | null>('');
    const [email, setEmail] = React.useState<string | null>('');
    const [password, setPassword] = React.useState<string | number>('');
    const [confirm_password, setConPassword] = React.useState<string | number>('')

    React.useEffect(() => {
        Axios.get('http://localhost:5000/getUsers')
        .then((response: any) => {
            setListOfUsers(response.data);
        })
    }, [])

    const createUser = (e: any) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/createUser', {
            username,
            email,
            password,
            confirm_password,
        }).then((response) => {
            setListOfUsers([...listOfUsers, {
                username,
                email,
                password,
                confirm_password,
            }])
            console.log(response.data)
            alert("Successfully Created!");
        }).catch((err) => {
            console.log(err, 'Something went wrong!')
        })
    }

    return(
        <Container>
            <h3>{page}</h3>
            <form>
                <div>
                    <label>Username:</label>
                    <input type='text'  
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type='email'  
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type='password'  
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input type='password'  
                        onChange={(e) => setConPassword(e.target.value)} />
                </div>
                <div>
                    <button onClick={createUser} type='submit'>Create User</button>
                </div>
            </form>
            
            <div>
                {listOfUsers.map((create, index) => {
                    return(
                        <div key={index}>
                            <p>{create.username}</p>
                            <p>{create.email}</p>
                            <p>{create.password}</p>
                            <p>{create.confirm_password}</p>
                        </div>
                    )
                })}
            </div>
        </Container>
    );
}
 
export default ProjectCreateUser;