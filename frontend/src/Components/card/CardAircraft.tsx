import { Link } from "react-router-dom"

type CardAircraftProps = {
   character: any,
   key: any,
}

const CardAircraft = ({ character, key }: CardAircraftProps) => {
   return (
      <Link key={key} to={`/character/${character.id}`} className="relative">
         <div className="catalogue-card figure-card">
            <div className="card-top-right-fixed">
               <div className="corner-mark">
                  <img src={`/filter/aircraft/element/${character.elements[0].type}.png`} alt="" />
               </div>
               <div className="card-skill-attr-box" />
            </div>
            <div className="card-outline">
               <div className="top" />
               <div className="right" />
               <div className="bottom" />
               <div className="left" />
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none" className="bottom-icon">
                  <path fillRule="evenodd" clipRule="evenodd" d="M9.99998 14.071L9.92871 13.9997H10.0712L9.99998 14.071ZM17 7.07102L16.0712 7.99973H13.2428L14.1715 7.07102L9.99998 2.89947L5.82843 7.07102L6.75714 7.99973L3.92871 7.99973L3 7.07102L4.41421 5.65681L8.58576 1.48526L9.99998 0.0710449L11.4142 1.48526L15.5857 5.65681L17 7.07102ZM9.99995 4.2426L7.17152 7.07102L9.99995 9.89945L12.8284 7.07102L9.99995 4.2426Z" fill="#00D2D6"></path>
               </svg>
            </div>
            <div className="invalid-status">
               <div className="card-inner card-level-S">
                  <div className="card-content">
                     <div className="card-content-inner">
                        <img src={character.avatar} alt="avatar" />
                     </div>
                  </div>
                  <div className="card-footer w-full h-10 leading-10 px-1 text-center">
                     <div className="card-footer-inner">
                        <span>{character.name}</span>
                     </div>
                     <div className="bottom-left-extra" />
                     <div className="top-right-extra" />
                     <div className="mask" />
                     <div className="bottom-decorate">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="3" viewBox="0 0 60 3" fill="none">
                           <path d="M4.09091 0H55.9091L60 3H0L4.09091 0Z" fill="currentColor">
                           </path>
                        </svg>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default CardAircraft