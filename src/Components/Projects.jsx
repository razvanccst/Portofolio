import React from 'react'
import './Projects.css'
import IMG1 from '../assets/portfolio1.jpg'
import IMG2 from '../assets/portfolio2.jpg'
import IMG3 from '../assets/portfolio3.jpg'
import IMG4 from '../assets/portfolio4.jpg'
import IMG5 from '../assets/portfolio5.png'
import IMG6 from '../assets/portfolio6.jpg'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Imprebuild',
    github: 'https://github.com/razvanccst/Imprebuild',
    demo: 'https://www.imprebuild.com'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Food Order App - React',
    github: 'https://github.com/razvanccst/React-Food-Order-App',
    demo: 'https://rc-food-order-app-react.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Expense Tracking - React',
    github: 'https://github.com/razvanccst/React-Expenses-Tracking-App',
    demo: 'https://rc-react-expense-tracking.netlify.app'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Bank App - Javascript',
    github: 'https://github.com/razvanccst/BankApp-Javascript',
    demo: 'https://rc-bank-application.netlify.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Bank App Presentation Website',
    github: 'https://github.com/razvanccst/BankApp-Presentation-Website',
    demo: 'https://rc-presentation-bank-app.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Geolocation App - Javascript',
    github: 'https://github.com/razvanccst/Mapty-Geolocation-Application',
    demo: 'https://mapty-geolocation.netlify.app/'
  }]

const Projects = () => {
  return (
    <section id="projects">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>

      <div className="container portofolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (<article key={id} className='portofolio__item'>
              <div className="portofolio__item-img-imprebuild">
                <img src={image} alt={title} className="imgine" />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-btn">
                <a href={github} target="_blank" rel="noreferrer" className='btn'>Github</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live-Demo</a>
              </div>
            </article>)
          })}
      </div>
    </section>
  )
}

export default Projects