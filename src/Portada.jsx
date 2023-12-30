import portadaImg from '/portada2.jpg'

export function Portada () {
  console.log('render')
  return (
    <>
      <section id='portada' className="portada">
      <h1>PuertoKayak</h1>
      <img src={portadaImg} alt="PuertoKayak" loading="eager"></img>
    </section>
    </>
  )
}