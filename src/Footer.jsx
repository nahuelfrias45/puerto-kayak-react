export function Footer () {
  return(
    <>
      <footer id="contacto">
    <section className="contacto-container">
      <article className="informacion-contacto">
        <h4>Información de Contacto</h4>
        <ul>
          <li><a href="https://instagram.com/puerto_kayak?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer"><span><i className="bi bi-instagram"></i></span>PuertoKayak</a></li>
          <li><a href="https://wa.me/541123728129?text=Hola estoy interesado en mas informacion sobre las actividades que ofrece PuertoKayak" target="_blank" rel="noreferrer"><span><i className="bi bi-whatsapp"></i></span>+54 1122334455</a></li>
          <li><a href="mailto:nahuelfrias@outlook.com.ar" target="_blank" rel="noreferrer"><span><i className="bi bi-envelope"></i></span>PuertoKayak@outlook.com</a></li>
        </ul>
      </article>

      <article className="informacion-horario">
        <h4>Días, Horarios & Lugar</h4>
        <ul>
          <li><span><i className="bi bi-calendar-check"></i></span>Sab - Domingos & Feriados</li>
          <li><span><i className="bi bi-clock"></i></span>8:00 am - 20:00 pm</li>
          <li><span><i className="bi bi-geo"></i></span>Tandil - Valle del Picapedrero | Bs As</li>
        </ul>
      </article>
    </section>
    <p className="Copyright">© PuertoKayak - Copyright - Argentina | Diseño: Nahuel Frias</p>
  </footer>
    </>
  )
}