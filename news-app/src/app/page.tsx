import Image from 'next/image'
import Navbar from "./components/Navbar"
import web3img from "../../../assets/images/image-web-3-mobile.jpg"
import retropcsimg from "../../../assets/images/image-retro-pcs.jpg"
import toplaptopsimg from "../../../assets/images/image-top-laptops.jpg"
import gaminggrowthimg from "../../../assets/images/image-gaming-growth.jpg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 text-verydarkblue">
      <Navbar/>
      <section className='mt-6'>
        <Image alt="geometric image with many colours" src={web3img}/>
        <h1 className='text-[2.5rem]/10 font-bold pt-6'>The Bright Future of Web 3.0?</h1>
        <p className='mt-3 text-sm/6 text-darkgrayblue'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <button className='bg-softred text-offwhite py-3 px-9 uppercase text-sm tracking-[0.35em] mt-6'>Read more</button>
      </section>
      <section className='mt-10 bg-verydarkblue w-full p-4'>
        <h2 className='text-softorange text-2xl font-semibold '>New</h2>
        <div className='pt-4'>
          <h3 className='text-offwhite font-semibold pb-2'>Hydrogen VS Electric Cars</h3>
          <p className='text-grayblue text-xs'>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        <div className='h-px bg-grayblue mt-6'></div>
        <div className='pt-4'>
          <h3 className='text-offwhite font-semibold pb-2'>The Downsides of AI Artistry</h3>
          <p className='text-grayblue text-xs'>What are the possible adverse effects of on-demand AI image generation</p>
        </div>
        <div className='h-px bg-grayblue mt-6'></div>
        <div className='pt-4'>
          <h3 className='text-offwhite font-semibold pb-2'>Is VC Funding Drying Up?</h3>
          <p className='text-grayblue text-xs'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </section>
      <section className='pt-10'>
        <div className='flex pt-6'>
          <Image alt='image of retro pcs' src={retropcsimg} className='w-20'/>
          <div className='pl-6'>
            <h4 className='text-grayblue font-bold text-2xl'>01</h4>
            <h5 className='font-extrabold text-sm pt-1'>Reviving Retro PCs</h5>
            <p className='font-light text-xs pt-2'>What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className='flex pt-6'>
          <Image alt='image of retro pcs' src={toplaptopsimg} className='w-20'/>
          <div className='pl-6'>
            <h4 className='text-grayblue font-bold text-2xl'>02</h4>
            <h5 className='font-extrabold text-sm pt-1'>Top 10 Laptops of 2022</h5>
            <p className='font-light text-xs pt-2'>Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className='flex pt-6'>
          <Image alt='image of retro pcs' src={gaminggrowthimg} className='w-20'/>
          <div className='pl-6'>
            <h4 className='text-grayblue font-bold text-2xl'>03</h4>
            <h5 className='font-extrabold text-sm pt-1'>The Growth of Gaming</h5>
            <p className='font-light text-xs pt-2'>How the pandemic has sparked fresh opportunities</p>
          </div>
        </div>
        
      </section>
    </main>
  )
}
