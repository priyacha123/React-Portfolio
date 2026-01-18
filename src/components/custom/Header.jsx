import { BsGithub } from "react-icons/bs"

const Header = () => {
  return (
    <>
     <section className="home w-full h-screen" id="home">
        <header className='fixed z-10 w-full bg-gray-400 text-white border-b-3 border-b-black-700 flex justify-between items-center'> 
                <div className='ml-20'>
                    <h1 className="font-bold md:text-4xl sm:text-3xl ">DEVELOPER</h1>
                </div>
                <div>
                    <ul className="flex flex-row gap-10 mr-15 text-lg font-medium ">
                        <li className="hover:underline hover:text-xl"> <a href="#home">Home</a> </li>
                        <li className="hover:underline hover:text-xl"> <a href="#about">About</a> </li>
                        <li className="hover:underline hover:text-xl"> <a href="#projects">Projects</a> </li>
                        <li className="hover:underline hover:text-xl"> <a href="#contact">Contact</a> </li>
                    </ul>
                </div>
        </header>
        <main>
            <div className="hero">
                <div className="left-hero text-center">
                    <span className=" lg:text-9xl sm:text-7xl md:text-8xl text-6xl  font-bold">PORTFOLIO</span>
                    {/* <img src="photos/home.png" alt="" /> */}
                    {/* <!-- name --> */}
                     {/* <h2>Welcome to my Portfolio</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p> */}
                </div>
                <div className="pl-25 right-hero">
                    {/* <!-- photo --> */}
                    {/* <!-- <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi commodi voluptatem repellendus molestiae aperiam quis ducimus deleniti, aut nobis quasi laboriosam dignissimos, error consectetur facere ut id. Pariatur, nulla veniam.</p> --> */}
                    <p className="pb-5">"I build things at my own pace, 
                        <br /> and it feels good 
                        <br /> when they finally come together."</p>
                    <a href="https://github.com/priyacha123" target="_blank">
                        
                        <p className="flex gap-1 items-center pb-7 text-lg font-semibold hover:underline hover:text-xl">
                            <BsGithub />
                            priyacha123
                            </p>
                    </a>

                </div>
            </div>
        </main>
    </section>
    </>
  )
}

export default Header