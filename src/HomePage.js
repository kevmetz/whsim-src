import { useState, useEffect } from "react"

import PageTitle from "./comp/PageTitle"
import ArrowButtons from "./comp/ArrowButtons"
import AnimBkgndCanvas from './comp/AnimBkgndCanvas'

import picGantry from './img/gantry.png'
import picConveyors from './img/conveyors.png'
import picStations from './img/stations.png'
import picPicking from './img/picking.png'
import vidConveyors from './img/conveyors.mp4'
import vidStations from './img/stations.mp4'
import vidGantry from './img/gantry.mp4'
import vidPicking from './img/picking.mp4'


const HomePage = () => {

  let descGantry = "An order processing module where order items are fetched from high density racking via AS/RS "
  descGantry += "and brought to the gantry area via double-capacity shuttle. The gantry removes trays from the shuttle and serves the workers by "
  descGantry += "lifting items from the storage tray then dropping them on a two-way conveyor, which sends the item to a worker at the station. When the worker "
  descGantry += "has finished with an item, the two-way conveyor returns the item to the gantry which picks it up and puts it back on its tray, and tray is "
  descGantry += "sent back to the shuttle which returns it to the AS/RS which puts it away."

  let descConveyors = "Orders are batch-picked to cart into totes and then sent to an automated storage facility. "
  descConveyors += "When consolidated with other items picked at conveyor-fed stations, the order is released and "
  descConveyors += "sent to the packing area."

  let descPicking = "Traditional low-tech warehouse with goods in, goods out, wide aisle and narrow aisle. Orders are "
  descPicking += "case-picked from wide aisles via pallet truck. Full pallets are brought to goods out via fork lift. "
  descPicking += "VNA trucks store bulks items and bring them out for replenishments which are taken to wide aisles via "
  descPicking += "reach truck. Completed orders get manually checked on the dock."

  let descStations = "Conveyor-fed stations pick orders out of totes from the automated storage module. "
  descStations += "These picked items will consolidate with already picked items from the "
  descStations += "cart pick module, which are in totes waiting in temporary storage. Completed orders are sent "
  descStations += "to packing where they are manually transferred from totes to shipping cartons. "
  descStations += "The shipping cartons are sent to be palletized and empty totes are returned to the pick stations."

  const [curMovie, setCurMovie] = useState(vidGantry)
  const [curPoster, setCurPoster] = useState(picGantry)
  const [curDesc, setCurDesc] = useState(descGantry)  
  const [curIndex, setCurIndex] = useState(1)  

  useEffect(()=>{
    window.scrollTo(0,0)
  }, [])


  return (
    <section className="page-section" data-desc="is-sizer" id="page-sizer" style={{position:"relative"}}>
      <PageTitle title="Warehouse Simulations"/>    
      
      <article className="parent-article flex-row nowrap">
      <div  id="pdesc" className="flex-row" style={{zIndex:"40"}}>
        <div className="hover-wrapper" onClick={()=>handle81()}>
          <img className="sim-pic child-article" src={picGantry} alt="gantry" style={ curIndex === 1 ? {backgroundColor:"var(--selected-blue)"} : null}/>
        </div>
        <div className="hover-wrapper" onClick={()=>handle82()}>
          <img className="sim-pic child-article" src={picConveyors} alt="conveyors" style={ curIndex === 2 ? {backgroundColor:"var(--selected-blue)"} : null}/>
        </div>
        <div className="hover-wrapper" onClick={()=>handle83()}>
          <img className="sim-pic child-article" src={picPicking} alt="picking"  style={ curIndex === 3 ? {backgroundColor:"var(--selected-blue)"} : null}/>
        </div>
        <div className="hover-wrapper" onClick={()=>handle84()}>
          <img className="sim-pic child-article" src={picStations} alt="stations"  style={ curIndex === 4 ? {backgroundColor:"var(--selected-blue)"} : null}/>
        </div>
      </div>
      </article>

      <article className="parent-article flex-row nowrap">
      <div className="child-article flex-row" style={{zIndex:"40"}}>
        <video width="100%" className="sim-movie" src={curMovie} controls poster={curPoster}>
		    </video>
        <p>{curDesc}</p>
      </div>
      </article>

      <ArrowButtons name1="Prev" fn1={()=>handle91(-1)} name2="Next" fn2={()=>handle91(1)}/>
 
      <div data-desc="is-canvas" style={{position:"absolute"}}>            
        <AnimBkgndCanvas sizer="page-sizer" trigger={curDesc} anim={true} count="64" stroke="#6790e633" fill="#EEEEEE11" key="page-key"/>           
      </div>
    </section>
  )

  //handlers
  function handle81(){
    setCurMovie(vidGantry)
    setCurPoster(picGantry)    
    setCurDesc(descGantry)    
    setCurIndex(1)
  }
  function handle82(){
    setCurMovie(vidConveyors)
    setCurPoster(picConveyors)
    setCurDesc(descConveyors)        
    setCurIndex(2)
  }
  function handle83(){
    setCurMovie(vidPicking)
    setCurPoster(picPicking)    
    setCurDesc(descPicking)            
    setCurIndex(3)
  }
  function handle84(){
    setCurMovie(vidStations)
    setCurPoster(picStations)    
    setCurDesc(descStations)                
    setCurIndex(4)
  }
  function handle91(inc){
    let newVal = curIndex + inc
    if(newVal < 1) newVal = 4
    if(newVal > 4) newVal = 1

    switch(newVal){
      case 1 : handle81(); break;
      case 2 : handle82(); break;
      case 3 : handle83(); break;
      case 4 : handle84(); break;
      default : handle81(); break;
    }
  }
}

export default HomePage