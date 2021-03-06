import React from 'react';
import '../App.css'
import MainCard from "./MainCard/MainCard";



const Main = (props) => {
    let mainCards=props.cards.map(c=><MainCard title={c.title}
                                               url={c.url}
                                               href={c.href}
                                               isTrain={props.isTrain}/>);
  return (
      <div className='all-cards'>
          {mainCards}
      </div>
  )
}

export default Main;
