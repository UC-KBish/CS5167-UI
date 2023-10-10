import userdata from '../data/users.json'

function UserCardContainer() {

    const UserSelect = () => {
        window.location.href = '/search.html'
    }

    return (
        <div className='UserCardContainer'>
            {userdata.Users.map((user) => {
                return (<div>
                    <button onClick={UserSelect}>
                        <img src={user.Photo} />
                        <p>{user.UserName}</p>
                    </button>
                </div>)
            })}
        </div>
    )
}

export default UserCardContainer;