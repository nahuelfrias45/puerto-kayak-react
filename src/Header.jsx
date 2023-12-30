import logo from '/logo.png'

window.addEventListener('scroll', function(e) {
  e.preventDefault()
   console.log('funcion 1')
  if (this.window.scrollY > 300) {
      document.querySelector('.header-section').style.background = 'rgb(56, 199, 173)'
  } else {
      document.querySelector('.header-section').style.background = 'rgb(56, 199, 173, 0.5)'
  }
})

document.querySelectorAll('.nav-ul li a').forEach(function(navLink) {
  navLink.addEventListener('click', function(e) {
    e.preventDefault();
    console.log('funcion 2')
        const targetElement = document.querySelector(this.getAttribute('href'));
        targetElement.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

export function Header () {


  return (
    <>
      <header>
        <section className="header-section">
          <img className="logo" src={logo} alt="PuertoKayak"></img>
          <nav className="header-nav">
            <ul className="nav-ul">
              <li><a href="#portada">INICIO</a></li>
              <li><a href="#nosotros">NOSOTROS</a></li>
              <li><a href="#actividades">ACTIVIDADES</a></li>
              <li><a href="#contacto">CONTACTO</a></li>
            </ul>
          </nav>
      
          <div className="contactos">
            <ul>
              <li><a href="https://instagram.com/puerto_kayak?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
              <li><a href="https://wa.me/541123728129?text=Hola estoy interesado en mas informacion sobre las actividades que ofrece PuertoKayak" target="_blank" rel="noreferrer"><i className="bi bi-whatsapp"></i></a></li>
              <li><a href="mailto:nahuelfrias@outlook.com.ar" target="_blank" rel="noreferrer"><i className="bi bi-envelope"></i></a></li>
            </ul>
          </div>
        </section>
      </header>
    </>
  )
}