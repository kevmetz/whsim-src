import CanvBorder from "./CanvBorder"

const PageTitle = ({title, zndx="100"}) => {
  let clrs = ["#384759", "#566374", "#8A96A4", "#BCC5D2", "#566374"]        
  let stps = [0.0, 0.3, 0.45, 0.65, 1.0]

  return (
    <article data-desc="is-container" id="cbc1" className="parent-article flex-row"
        style={{position:"relative", border:"none", background:"none", zIndex:zndx}}>      
      <h3 style={{padding:"1rem", color:("var(--text-yellow)")}}>{title}</h3>
      <div style={{position:"absolute", left:"0", top:"0"}}>
        <CanvBorder data-desc="is-canvas" sizer="cbc1" type="round-rect" radius="20" thick="15" colors={clrs} stops={stps}/>       
      </div>
    </article>      
  )
}

export default PageTitle