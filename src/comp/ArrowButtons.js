import SvgArrow from './SvgArrow'

const ArrowButtons = ({name1, fn1, name2, fn2, zndx="80"}) => {
  return (
    <article className="parent-article flex-row nowrap">
        { name1 ? (
        <div className="hover-wrapper flex-row nowrap" style={{zIndex:zndx}}>
          <SvgArrow fnClick={fn1} flip="true"/>
          <button className="parent-button" type="button" onClick={fn1}>{name1}</button>
        </div> ) : null }
        { name2 ? (
        <div className="hover-wrapper flex-row nowrap" style={{zIndex:zndx}}>
          <button className="parent-button" type="button" onClick={fn2}>{name2}</button>                
          <SvgArrow fnClick={fn2}/>
        </div> ) : null }
    </article>      
  )
}

export default ArrowButtons