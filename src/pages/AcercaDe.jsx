function AcercaDe() {
  return (
    <div>
      <h1>Acerca del hotel</h1>
      <p>En Hotel Salta ofrecemos habitaciones para descansar en pareja o en familia.</p>
      <img
        src={process.env.PUBLIC_URL + '/images/frente.jpg'}
        alt="Vista del frente de un hotel"
        className="imagen-hotel"
      />
      <h2>Nuestra propuesta</h2>
      <p>Queremos que disfrutes de una estadía cómoda, con desayuno, Wi-Fi y piscina.</p>
      <p>Las imágenes son ilustrativas y pueden mostrar distintos hoteles.</p>
    </div>
  );
}

export default AcercaDe;
