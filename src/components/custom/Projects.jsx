import React from 'react'
import ExpandableCardDemo from '../expandable-card-demo-standard'
import ExpandableCardDemoGrid from '../expandable-card-demo-grid'

const Projects = () => {
  return (
    <>
     <section id="projects" className='projects w-full h-full flex flex-col justify-center items-center gap-10 '>
        <h2 className='text-7xl font-bold underline pt-25'>My Projects</h2>
        <div className='hidden md:block w-full h-full gap-10'>
            <ExpandableCardDemoGrid />
        </div>
        <div className='block md:hidden w-full h-full gap-10'>
            <ExpandableCardDemo />
        </div>

    </section>
    </>
  )
}

export default Projects