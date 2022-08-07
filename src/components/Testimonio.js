import '../stylesheets/testimonio.css';

function Testimonio( {data} ) {
  return (
    <>
      {data?.map(e => (
        <div className='contenedor-testimonios' key={e.key}>
          <img className='imagen-testimonio' src={require(`../img/testimonio-${e.img}.png`)} alt={`Foto de ${e.nombre}`} />
          <div className='contenedor-texto-testimonio'>
            <p className='nombre-testimonio'>
              <strong>{e.nombre}</strong> en {e.pais}
            </p>
            <p className='cargo-testimonio'>
              {e.cargo} en <strong>{e.empresa}</strong>
            </p>
            <p className='texto-testimonio'>{e.testimonio}</p>
          </div>
        </div>))}
    </>
  );
}

export default Testimonio;