import Image from 'next/image'
import Navbar from "./components/Navbar"
import web3imgmobile from "../../../assets/images/image-web-3-mobile.jpg"
import web3imgdesktop from "../../../assets/images/image-web-3-desktop.jpg"
import retropcsimg from "../../../assets/images/image-retro-pcs.jpg"
import toplaptopsimg from "../../../assets/images/image-top-laptops.jpg"
import gaminggrowthimg from "../../../assets/images/image-gaming-growth.jpg"

export default function Home() {
  return (
    <main className="min-h-screen flex justify-center p-6 text-verydarkblue lg:py-12 lg:px-28 ">
      <div className='wrapper flex flex-col items-center lg:max-w-screen-xl'>
        <Navbar/>
        <section className='lg:flex lg:pt-6'>
          <section className='mt-6 lg:basis-3/4'>
            <Image alt="geometric image with many colours" src={web3imgmobile} className='lg:hidden'/>
            <Image alt="geometric image with many colours" src={web3imgdesktop} className='hidden lg:block'/>
            <div className='lg:flex lg: pt-6'>
              <h1 className='text-[2.5rem]/10 font-bold pt-6 lg:basis-2/4 lg:text-[3.5rem]/[50px] lg:pr-16 lg:pt-0'>The Bright Future of Web 3.0?</h1>
              <div className='lg:basis-2/4 lg:px-8 lg:flex lg:flex-col lg:justify-between lg:items-start'>
                <p className='mt-3 text-sm/6 text-darkgrayblue lg:mt-0'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button className='bg-softred text-offwhite py-3 px-9 uppercase text-sm tracking-[0.35em] mt-6 hover:bg-verydarkblue'>Read more</button>
              </div>
            </div>
          </section>
          <section className='mt-10 bg-verydarkblue w-full p-4 lg:basis-1/4 lg:mt-6 lg:ml-6'>
            <h2 className='text-softorange text-2xl font-semibold lg:text-4xl '>New</h2>
            <div className='flex flex-col justify-evenly'>
              <div className='pt-4'>
                <h3 className='text-offwhite font-semibold pb-2 lg:text-xl hover:text-softorange cursor-pointer'>Hydrogen VS Electric Cars</h3>
                <p className='text-grayblue text-xs lg:text-sm'>Will hydrogen-fueled cars ever catch up to EVs?</p>
              </div>
              <div className='h-px bg-grayblue mt-6'></div>
              <div className='pt-4'>
                <h3 className='text-offwhite font-semibold pb-2 lg:text-xl hover:text-softorange cursor-pointer'>The Downsides of AI Artistry</h3>
                <p className='text-grayblue text-xs lg:text-sm'>What are the possible adverse effects of on-demand AI image generation</p>
              </div>
              <div className='h-px bg-grayblue mt-6'></div>
              <div className='pt-4'>
                <h3 className='text-offwhite font-semibold pb-2 lg:text-xl hover:text-softorange cursor-pointer'>Is VC Funding Drying Up?</h3>
                <p className='text-grayblue text-xs lg:text-sm'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
              </div>
            </div>
          </section>
        </section>
        <section className='pt-10 lg:flex lg:justify-between w-full lg:space-x-8'>
          <div className='flex pt-6'>
            <Image alt='image of retro pcs' src={retropcsimg} className='w-20'/>
            <div className='pl-6'>
              <h4 className='text-grayblue font-bold text-2xl'>01</h4>
              <h5 className='font-black text-sm pt-1 lg:text-lg hover:text-softred cursor-pointer'>Reviving Retro PCs</h5>
              <p className='font-light text-xs/5 pt-2'>What happens when old PCs are given modern upgrades?</p>
            </div>
          </div>
          <div className='flex pt-6'>
            <Image alt='image of retro pcs' src={toplaptopsimg} className='w-20'/>
            <div className='pl-6'>
              <h4 className='text-grayblue font-bold text-2xl'>02</h4>
              <h5 className='font-black text-sm pt-1 lg:text-lg hover:text-softred cursor-pointer'>Top 10 Laptops of 2022</h5>
              <p className='font-light text-xs/5 pt-2'>Our best picks for various needs and budgets.</p>
            </div>
          </div>
          <div className='flex pt-6'>
            <Image alt='image of retro pcs' src={gaminggrowthimg} className='w-20'/>
            <div className='pl-6'>
              <h4 className='text-grayblue font-bold text-2xl'>03</h4>
              <h5 className='font-black text-sm pt-1 lg:text-lg hover:text-softred cursor-pointer'>The Growth of Gaming</h5>
              <p className='font-light text-xs/5 pt-2'>How the pandemic has sparked fresh opportunities</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
