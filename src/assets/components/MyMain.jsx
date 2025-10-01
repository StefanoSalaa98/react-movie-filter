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

    // stato del campo di ricerca del genere
    const [searchGenre, setSearchGenre] = useState("");
    // stato del campo di ricerca del titolo
    const [searchTitle, setSearchTitle] = useState("");
    // stato del array filtrato
    const [filteredTasks, setFilteredTasks] = useState(films);



    useEffect(() => {
        setFilteredTasks(
            films.filter(film => {
                // controllo lo stato dei campi di ricerca del genere e del titolo
                const checkGenre = searchGenre !== "" && searchGenre !== "Qualsiasi";
                const checkTitle = searchTitle !== "" && searchTitle !== "Qualsiasi";
                // se sia genere che titolo hanno valori diversi da stringa vuota e da "Qualsiasi" allora devo effettuare un doppio controllo
                if (checkGenre && checkTitle) {
                    return film.genre === searchGenre && film.title === searchTitle
                }
                // se solo genere ha un valore valido, filtro per i generi dei film
                else if (checkGenre && !checkTitle) {
                    return film.genre === searchGenre;
                }
                // se solo titolo ha un valore valido, filtro per i titoli dei film
                else if (!checkGenre && checkTitle) {
                    return film.title === searchTitle;
                }
                // se entrambi non hanno valori validi, restituisco direttamente tutti i film
                else {
                    return film;
                }
            })
        );

    }, [searchGenre, searchTitle]);

    return (
        <>
            <div className="filtra">
                <h2>GENERE</h2>

                <select id="generi" name="scelta-genere"
                    onChange={(e) => { setSearchGenre(e.target.value) }}>

                    <option value="Qualsiasi">Qualsiasi</option>
                    <option value="Fantascienza">Fantascienza</option>
                    <option value="Thriller">Thriller</option>
                    <option value="Romantico">Romantico</option>
                    <option value="Azione">Azione</option>

                </select>

                <h2>TITOLO</h2>

                <select id="generi" name="scelta-genere"
                    onChange={(e) => { setSearchTitle(e.target.value) }}>

                    <option value="Qualsiasi">Qualsiasi</option>
                    <option value="Inception">Inception</option>
                    <option value="Il Padrino">Il Padrino</option>
                    <option value="Titanic">Titanic</option>
                    <option value="Batman">Batman</option>
                    <option value="Interstellar">Interstellar</option>
                    <option value="Pulp Fiction">Pulp Fiction</option>

                </select>
            </div>



            <ul>
                <li>
                    <h2>TITOLO:</h2>
                    <h3>GENERE:</h3>
                </li>
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