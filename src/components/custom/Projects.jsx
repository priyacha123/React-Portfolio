import React from 'react'
import ExpandableCardDemo from '../expandable-card-demo-standard'

const Projects = () => {
  return (
    <>
     <section id="projects" className='flex flex-col justify-center items-center gap-10 p-10'>
        <h2 className='text-7xl font-bold underline'>My Projects</h2>
            <ExpandableCardDemo />

    </section>
    </>
  )
}

export default Projects