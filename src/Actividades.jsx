import { Reservar } from './Reservar'
import kayak from '/kayak2.jpg'
import rappel from '/rappel2.jpg'
import trekking from '/trekking2.jpg'

export function Actividades () {
  return (
    <>
      <section id="actividades">
      <h2>ACTIVIDADES</h2>
        <div className="actividades-bloque">
          <div className="actividades-container">
            <article className="trekking">
              <img src={trekking} alt="trekking" loading="lazy" decoding="async"></img>
              <div className="act-card">
                <h4>Trekking</h4>
                <div className="act-info">
                  <div className="p-informacion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga pariatur nisi eum, deleniti, esse voluptatum quas eligendi saepe provident officiis repellendus eaque! Dolore voluptate cumque culpa sed commodi tenetur?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus officiis commodi consequatur saepe ab possimus provident tempore, fuga ipsa a, illum veniam eius deleniti soluta deserunt, dolorem perspiciatis iure nobis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque quasi provident non quidem nihil magnam error obcaecati. Esse rem magni nulla, assumenda molestias consectetur id? Similique dolore quia laborum!</p>
                  </div>
                  <Reservar text={Reservar}/>
                </div>
              </div>
            </article>
    
            <article className="rappel">
              <div className="act-card">
                <h4>Rappel</h4>
                <div className="act-info">
                  <div className="p-informacion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga pariatur nisi eum, deleniti, esse voluptatum quas eligendi saepe provident officiis repellendus eaque! Dolore voluptate cumque culpa sed commodi tenetur?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus officiis commodi consequatur saepe ab possimus provident tempore, fuga ipsa a, illum veniam eius deleniti soluta deserunt, dolorem perspiciatis iure nobis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque quasi provident non quidem nihil magnam error obcaecati. Esse rem magni nulla, assumenda molestias consectetur id? Similique dolore quia laborum!</p>
                  </div>
                  <Reservar />
                </div>
              </div>
              <img src={rappel} alt="rappel" loading="lazy" decoding="async"></img>
            </article>
    
            <article className="kayak">
              <img src={kayak} alt="kayak" loading="lazy" decoding="async"></img>
              <div className="act-card">
                <h4>Kayakismo</h4>
                <div className="act-info">
                  <div className="p-informacion">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fuga pariatur nisi eum, deleniti, esse voluptatum quas eligendi saepe provident officiis repellendus eaque! Dolore voluptate cumque culpa sed commodi tenetur?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus officiis commodi consequatur saepe ab possimus provident tempore, fuga ipsa a, illum veniam eius deleniti soluta deserunt, dolorem perspiciatis iure nobis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente itaque quasi provident non quidem nihil magnam error obcaecati. Esse rem magni nulla, assumenda molestias consectetur id? Similique dolore quia laborum!</p>
                  </div>
                  <Reservar />
                </div>
              </div>
            </article>
          </div>
        </div>  
        
    </section>
    </>
  )
}