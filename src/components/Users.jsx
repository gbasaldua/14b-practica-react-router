import { users } from '../assets/users'
import { Link } from 'react-router-dom'
import { generate } from 'shortid'
import styled from 'styled-components'

const UsersContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 10px;
`

const UserTag = styled.div`
    background-color: #bbb;
    padding: .5rem;
    text-align: center;
    border-radius: 10px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #222;
`

const Users = () => {
    return (
        <UsersContainer>
            {
                users.map(user => (
                    <UserTag key={generate()}>
                        <StyledLink to={`/user/?id=${user.id}`}>
                            {user.name}
                        </StyledLink>
                    </UserTag>
                ))
            }
        </UsersContainer>

    )
}

export default Users