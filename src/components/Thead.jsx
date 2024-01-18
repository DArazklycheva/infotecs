function Thead() {
    return (
        <thead className="table__head">
        <tr>
            <th className="table__head-lastname">Фамилия</th>
            <th className="table__head-name">Имя</th>
            <th className="table__head-maiden-name">Отчество</th>
            <th className="table__head-age">Возраст</th>
            <th className="table__head-gender">Пол</th>
            <th className="table__head-phone">Номер телефона</th>
            <th className="table__head-city">Город</th>
            <th className="table__head-address">Адрес</th>
        </tr>
        </thead>
    )
}

export default Thead;