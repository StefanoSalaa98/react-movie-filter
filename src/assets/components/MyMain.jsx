import { useState, useEffect } from 'react'
import MyFilm from './MyFilm';

const MyMain = () => {

    const films = [
        { title: 'Inception', genre: 'Fantascienza' },
        { title: 'Il Padrino', genre: 'Thriller' },
        { title: 'Titanic', genre: 'Romantico' },
        { title: 'Batman', genre: 'Azione' },
        { title: 'Interstellar', genre: 'Fantascienza' },
        { title: 'Pulp Fiction', genre: 'Thriller' },
        { title: "Inception", genre: "Fantascienza" },
        { title: "Il Silenzio degli Innocenti", genre: "Thriller" },
        { title: "La La Land", genre: "Romantico" },
        { title: "Mad Max: Fury Road", genre: "Azione" },
        { title: "The Hangover", genre: "Commedia" },
        { title: "Forrest Gump", genre: "Drammatico" },
        { title: "Seven", genre: "Thriller" },
        { title: "Pretty Woman", genre: "Romantico" },
        { title: "Mission: Impossible - Fallout", genre: "Azione" },
        { title: "Una Notte da Leoni", genre: "Comico" },
        { title: "Il Padrino", genre: "Drammatico" },
        { title: "Blade Runner 2049", genre: "Fantascienza" },
        { title: "Drive", genre: "Thriller" },
        { title: "Vogliamo vivere!", genre: "Comico" }
    ]

    // stato del campo di ricerca del genere
    const [searchGenre, setSearchGenre] = useState("");
    // stato del campo di ricerca del titolo
    const [searchTitle, setSearchTitle] = useState("");

    // stato del campo elenco film 
    const [filmList, setFilmList] = useState(films);
    // stato del array filtrato
    const [filteredFilms, setFilteredFilms] = useState(films);

    // Stati per memorizzare i valori dei campi utente
    const [newTitle, setNewTitle] = useState('');
    const [newGenre, setnewGenre] = useState('');

    // const [listGenre, setListGenre] = useState("");

    // creo una lista con l'elenco dei generi presenti
    // let startingList = ["Qualsiasi"]
    // films.forEach(film => {
    //     if (!startingList.includes(film.genre)) {
    //         startingList.push(film.genre);
    //     }
    // })

    //creo una lista dei generi possibili
    const genreList = [
        "Qualsiasi",
        "Fantascienza",
        "Thriller",
        "Romantico",
        "Azione",
        "Commedia",
        "Comico",
        "Drammatico"
    ]

    const newElement = e => {
        e.preventDefault();
        // oggetto del nuovo film inserito
        const updatedFilm = { title: newTitle, genre: newGenre }

        const updatedList = [...filmList];
        updatedList.push(updatedFilm);
        // ripulisco il form
        setNewTitle("")
        setnewGenre("")
        // setNewFilm(updatedFilm)
        // films.push(updatedFilm)
        setFilmList(updatedList);
        // console.log("films:", films)
        // console.log("filmList", filmList)
    }

    useEffect(() => {
        setFilteredFilms(
            filmList.filter(film => {
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
        console.log("filteredFilms:", filteredFilms)

    }, [searchGenre, searchTitle, filmList]);

    return (
        <>
            <div className="filtra">
                <h2>GENERE</h2>

                <select id="generi" name="scelta-genere"
                    onChange={(e) => { setSearchGenre(e.target.value) }}>

                    {genreList.map((genre, index) => (

                        <option key={index} value={genre}> {genre} </option>
                    ))}

                </select>

                <h2>TITOLO</h2>

                <select id="generi" name="scelta-genere"
                    onChange={(e) => { setSearchTitle(e.target.value) }}>

                    <option value="Qualsiasi">Qualsiasi</option>
                    {filteredFilms.map((film, index) => (

                        <option key={index} value={film.title}> {film.title} </option>
                    ))}

                </select>

                {/* form per inserire un nuovo film */}

                <form onSubmit={newElement}>
                    {/* campo dove l'utente può inserire un nuovo titolo */}
                    <label>TITOLO:</label>
                    <input
                        type="text"
                        placeholder='Inserisci un nuovo titolo'
                        value={newTitle}
                        onChange={(e) => { setNewTitle(e.target.value) }}
                    />
                    {/* campo dove l'utente può inserire il genere del nuovo film */}
                    <label>GENERE:</label>
                    <select
                        id="generi-nuovi-film"
                        name="scelta-genere-nuovi-film"
                        onChange={(e) => { setnewGenre(e.target.value) }}>

                        <option value="Fantascienza">Fantascienza</option>
                        <option value="Thriller">Thriller</option>
                        <option value="Romantico">Romantico</option>
                        <option value="Azione">Azione</option>
                        <option value="Commedia">Commedia</option>
                        <option value="Comico">Comico</option>
                        <option value="Drammatico">Drammatico</option>

                    </select>


                    <button type="submit">Invia</button>
                </form>

            </div >


            {/* Stampo a schermo la lista dei film filtrati */}
            <ul>
                {filteredFilms.map((film, index) => (
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