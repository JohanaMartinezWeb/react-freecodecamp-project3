

function Logo() {

	return (
		<div className='freecodecamp-logo-contenedor'>
			<img
				src={require('../imagenes/freecodecamp-logo.png')}
				className='freecodecamp-logo'
				alt='Logo de FreeCodeCamp' />
		</div>
	);
}

export default Logo;