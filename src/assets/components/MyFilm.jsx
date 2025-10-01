const MyFilm = (props) => {

    const { title, genre } = props

    return (
        <>
            <h2>{title}</h2>
            <h3>{genre}</h3>
        </>
    )

}

export default MyFilm