import React from 'react'
import './Plans.css'
import HeaderImage from '../../images/pri.jpg'
import Header from '../../components/Header'
import Card from '../../UI/Card'
import {plans} from '../../data'



const Plans = () => {
  return (
    <div>
        <Header title= "Our Plans" image={HeaderImage}>
      we provide various plans with reasonable prices
      </Header>
    <section className="plans">
  <div className="container plans_container">
    {
      plans.map(({id,name,desc,price,features})=>{
        return <Card className='plan' key={id}>
          <h3>{name}</h3>
          <small>{desc}</small>
          <h1>{`$${price}`}</h1><h2>/mo</h2>
          <h4>Features</h4>
          {
            features.map(({feature,available,index})=>{
              return <p key={index} className={!available ? 'disable' : ""}>{feature} </p>
            })
          }
          <button className="btn lg">Choose plan</button>
        </Card>
      })
    }
    </div>      
    </section>
    </div>
  )
}

export default Plans