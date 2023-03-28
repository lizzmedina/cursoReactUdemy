import PropTypes from 'prop-types';

// const newMessage = {
//     mensaje: 'soy un mensaje que prueba un punto',
//     numeros :123456,
// }
// const getMessage = () => {
//     return newMessage.mensaje;
// }

//title es la props

export const FirtsApp = ( {title, subtitle, name}) => {

    return (
        <>
            {/* //<h2> {getMessage()} </h2> */}
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <p>{name}</p>
        </>
    )
}

FirtsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
}
FirtsApp.defaultProps = {
    name: 'fernando herrera',
    subtitle: 'no hay subtitulo',
    title: 'no hay ningun titulo',
}