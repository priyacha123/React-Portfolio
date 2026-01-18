import { BiPhoneCall } from 'react-icons/bi'
import { BsLinkedin, BsTwitter } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const About = () => {
  return (
    <>
    <section id="about" className='about'>
        <div className="info">
            <div className="left-about">
                <span>Aboutn me!! </span>
                <p className="about-name">I'm Priya.  A Frontend Developer</p>
                <p>Hi! I’m a passionate Web Developer and Python Enthusiast currently in my 3rd year of engineering. I
                    enjoy creating clean, responsive, and engaging digital experiences using HTML, CSS, JavaScript,
                    React, and Python. I love building websites, tools, and games that combine creativity with strong
                    logic and smooth functionality.</p>
                
                <p>I’m always exploring new ideas, experimenting with technologies, and improving my projects to make
                    them more efficient and user-friendly. For me, learning is continuous, and every project is a chance
                    to grow. I enjoy solving problems, refining designs, and bringing ideas to life through code. I'm
                    always excited to build something meaningful.</p>
            </div>
            <div className="right-about ">
                {/* <!-- image --> */}
                 <div className="box">
                    <div className="top">
                        {/* image */}
                    </div>
                    <div className="bottom">
                        <p className='flex items-center gap-1'>
                            <BiPhoneCall className='text-xl' />
                            +91 8595357924</p>
                        <p className='flex items-center gap-1'>
                            <MdEmail />
                            chaudhary21priya@gmail.com</p>
                        <a href="https://www.linkedin.com/in/priya-kumari-frontend-developer/" target="_blank">
                            <p className='flex items-center gap-1'>
                                <BsLinkedin />
                                priya-Kuamri</p>
                        </a>
                        <a href="https://x.com/textrovert_39" target="_blank">
                            <p className='flex items-center gap-1'>
                                <BsTwitter />
                                @textrovert_39</p>
                        </a>
                    </div>
                 </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About