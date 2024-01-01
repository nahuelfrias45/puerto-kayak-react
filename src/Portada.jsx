import kayak from '/kayak2.jpg'
import rappel from '/rappel2.jpg'
import trekking from '/trekking2.jpg'

export function Portada () {
  return (
    <>
    <section id='portada' className="portada">
      <h1>PuertoKayak</h1>
      <div className='portada-img'>
        <img src={trekking} alt="PuertoKayak" loading="eager"></img>
        <img src={kayak} alt="PuertoKayak" loading="eager"></img>
        <img src={rappel} alt="PuertoKayak" loading="eager"></img>
      </div>
    </section>
    </>
  )
}