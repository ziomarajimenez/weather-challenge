import bus from '../assets/bus.png';

export const Header = () => {
    return (
    <h1>
            <img alt='bus-icon' src={bus} className='bus-icon'></img>
            ¿Cuál es su destino?
        </h1>
    )
}