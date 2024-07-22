import imageBg from '@/../../public/bgauthsecondary.png'
import Image from 'next/image';
import imageAnimate from '@/../../public/personanimate2.png'
import { EmblaOptionsType } from 'embla-carousel'


import CardInfo1 from '../components/cards/CardInfo1';
import EmblaCarousel from '../components/cards/Emblacarousel';

const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

const LayoutAuth = ({children}: any) => {
  return (
    <div className="grid grid-cols-12  h-screen">
      <div className="col-span-5 h-full flex justify-center items-center  bg-gradient-to-tl  to-blue-500 from-blue-100">
          <div className="">
            <div className="p-5 bg-white  rounded-lg relative border-2 border-blue-500 shadow-lg">
            {/* <Image src={imageAnimate} alt="bg" className="absolute -top-44 " height={280} width={150} />
            <CardInfo1 />
            
             */}
             <Image src={imageAnimate} alt="bg" className="absolute -top-44 " height={280} width={150} />
              <EmblaCarousel slides={SLIDES} options={OPTIONS} />
            </div>
          </div>
      </div>
      <div className="col-span-7 ">
      {children}
      </div>
    </div>
  )
}
export default LayoutAuth