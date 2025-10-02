const MyFilm = (props) => {

    const { title, genre } = props

    return (
        <>
            <h2>{title}</h2>
            <h4>({genre})</h4>
        </>
    )

}

export default MyFilm