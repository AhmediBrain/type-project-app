import * as React from 'react'
import styled from 'styled-components';
import Axios from 'axios';


const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

interface IProjectLoginProps {
    name: string;
    age: number;
}
 
const ProjectFileLogin: React.FunctionComponent<IProjectLoginProps> = ({name, age}) => {
    const [listOfUsers, setListOfUsers] = React.useState([]);
    const [user, setUser] = React.useState<string | null>('');



    React.useEffect(() => {
        Axios.get('http://localhost:5000/getUsers')
        .then((response: any) => {
            setListOfUsers(response.data);
        })
    }, [])

    const createUser = (e: any) => {
        e.preventDefault();
        Axios.post('http://localhost:5000/createUser', {
            user,
            email: String,
            password: String || Number,
            confirm_password: String || Number,
        }).then((response) => {
            setListOfUsers([...listOfUsers, {
                user,
            }])
            alert("Success!");
        })
    }

    return(
        <div>
            <p>Hello {name}</p>
            <p>Age {age}</p>

            <div>
                {listOfUsers.map((user, index) => {
                    return(
                        <div key={index}>
                            <p>{user.user}</p>
                        </div>
                    )
                })}
            </div>

            <form>
                <Container>
                    <div>
                        <label>Username:</label>
                        <input type='text' 
                            onChange={(e) => setUser(e.target.value)} />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type='email' />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input type='password' />
                    </div>
                    <div>
                        <label>Confirm Password:</label>
                        <input type='password' />
                    </div>
                    <div>
                        <button onClick={createUser} type='submit'>Create User</button>
                    </div>
                </Container>
            </form>
        </div>
    );
}
 
export default ProjectFileLogin;