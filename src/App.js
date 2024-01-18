import React from "react";
import Thead from "./components/Thead";
import Tbody from "./components/Tbody";
import './style.scss';
import search from "./assets/images/search.png";

function App() {
    const [items, setItems] = React.useState([]);

    // Get all users
    React.useEffect(() => {
        fetch('https://dummyjson.com/users')
            .then((res) => res.json())
            .then((arr) => {
                setItems(arr.users);
        });
    }, []);

    // Search users
    const [value, setValue] = React.useState('');

    const filteredUsers = items.filter(item => {
        return item.firstName.toLowerCase().includes(value.toLowerCase()) +
            item.lastName.toLowerCase().includes(value.toLowerCase()) +
            item.maidenName.toLowerCase().includes(value.toLowerCase()) +
            item.gender.toLowerCase().includes(value.toLowerCase()) +
            item.address.city.toLowerCase().includes(value.toLowerCase()) +
            item.age.toString().includes(value.toString()) +
            item.address.address.toString().includes(value.toString()) +
            item.phone.toString().includes(value.toString());
    })

    return (
        <div className="App">
            <div className="container">
                <div>
                    <div className="form">
                        <form className="search__form">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="search__input"
                                onChange={(e) => setValue(e.target.value)}
                            />
                            <img src={search} alt="" className="search__image"/>
                        </form>
                    </div>
                </div>
                <h1>Информация о пользователях</h1>
                <table className="table" id="table">
                    <Thead/>
                    {filteredUsers.map((obj) => (
                            <Tbody key={obj.id}
                                firstName={obj.firstName}
                                lastName={obj.lastName}
                                age={obj.age}
                                maidenName={obj.maidenName}
                                gender={obj.gender}
                                phone={obj.phone}
                                city={obj.address.city}
                                address={obj.address.address}
                        />
                    ))}
                </table>
            </div>
        </div>
    );
}

export default App;
