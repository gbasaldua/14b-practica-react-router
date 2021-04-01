import { users } from '../assets/users'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const UserCard = styled.div`
    background-color: #ddd;
    min-height: 250px;
    width: 400px;
    margin-left: auto;
    margin-right: auto;
    padding: 1rem;
    border-radius: 10px;
    text-align: center;
`

const UserImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
`

const UserTitle = styled.h2`
    margin: 0;
`

const BackLink = styled(Link)`
    text-decoration: none;
    background: none;
    width: 30px;
    margin-left: auto;
    margin-right: auto;
    color: royalblue;
    border-bottom: 1px solid royalblue;
`

const User = ({ location }) => {

    const query = new URLSearchParams(location.search)
    const user = users.find(user => user.id === parseInt(query.get('id')))

    return (
        <UserCard>
            <UserImage src={user.image}></UserImage>
            <UserTitle>{user.name} "{user.username}"</UserTitle>
            <p>{user.email}</p>
            <p>{user.description}</p>
            <BackLink to="/">Back</BackLink>
        </UserCard>
    )
}

export default User