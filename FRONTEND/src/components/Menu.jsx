
import { data} from "../restApi.json"
const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">

        <div className="heading_section">
            <h1 className='heading'>GLIMSE OF EVENTS HOSTED </h1>
            <p>We have hosted alot of events like Wedding party, bachloreat party , retairements etc. We have shared a few pictures of those beautiful events...  </p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title}/>
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Menu
