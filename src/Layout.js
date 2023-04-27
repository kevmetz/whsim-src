import fbLogo from './img/fb.png'
import twitLogo from './img/twit.png'
import whatsLogo from './img/whats.png'
import instaLogo from './img/insta.png'

import header7 from './img/rch12-md.png'
import header8 from './img/flt12-md.png'


const Layout = ({children}) => {
  return (
    <div id="app-background" className="app-background">
      <div id="app-layout" className="app-layout">
      
        <header id="app-header" className="app-header">   
          <img className="logo-header" src={header7} alt="" />
          <a href="https://www.kevmetz.com" style={{textDecoration:"none"}}>
            <span className="titanium kevmetz">kevmetz.com</span>
          </a>
          <img className="logo-header" src={header8} alt="" /> 
        </header>  

        <main id="app-main" className="app-main">
          {children}
        </main>

        <footer id="app-footer" className="app-footer">    
        <img className="logo-footer" src={twitLogo} alt=""/>
        <img className="logo-footer" src={fbLogo} alt=""/>
        <img className="logo-footer" src={whatsLogo} alt=""/>
        <img className="logo-footer" src={instaLogo} alt=""/>                        
        </footer>       
      
      </div>        
    </div>            
  )
}

export default Layout