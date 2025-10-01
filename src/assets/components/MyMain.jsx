import { useState, useEffect } from 'react'
import MyFilm from './MyFilm';

const MyMain = () => {

    const films = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' }
    ]

    // stato del campo di ricerca
    const [search, setSearch] = useState("");
    // stato del array filtrato
    const [filteredTasks, setFilteredTasks] = useState(films);



    useEffect(() => {
        setFilteredTasks(
            films.filter(film => {
                console.log("film.genre:", film.genre)
                console.log("search:", search)
                // se lo stato del campo di ricerca non è nè vuoto nè "Qualsiasi" allora filtro i film in base al genere, altrimenti restituisco tutti i film
                if (search !== "" && search !== "Qualsiasi") {
                    return film.genre === search
                }
                else {
                    return film.genre;
                }
            })
        );

    }, [search]);

    return (
        <>

            {/* <input type="text"
                placeholder='Cerca'
                value={search}
                onChange={(e) => { setSearch(e.target.value) }}
            /> */}

            <select id="generi" name="scelta-genere"
                onChange={(e) => { setSearch(e.target.value) }}>

                <option value="Qualsiasi">Qualsiasi</option>
                <option value="Fantascienza">Fantascienza</option>
                <option value="Thriller">Thriller</option>
                <option value="Romantico">Romantico</option>
                <option value="Azione">Azione</option>

            </select>

            <ul>
                {filteredTasks.map((film, index) => (
                    <li
                        key={index}>
                        <MyFilm
                            title={film.title}
                            genre={film.genre}
                        />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MyMain