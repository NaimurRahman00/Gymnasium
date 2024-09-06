import { SelectedPage } from '@/shared/type'
import useMediaQuery from '@/hooks/useMediaQuery'
import ActionButton from '@/shared/ActionButton'
import HomePageGraphic from '@/assets/HomePageGraphic.png'
import SponsorRedBull from '@/assets/SponsorRedBull.png'
import SponsorFortune from '@/assets/SponsorFortune.png'
import SponsorForbes from '@/assets/SponsorForbes.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreens = useMediaQuery('(min-width: 1060px)')
	return (
		<section id="home" className='bg-gray-20 gap-16 py-10 md:h-full md:pb-0'>
			{/* IMAGE AND MAIN HEADER */}
			<div className='md:flex mx-auto w-5/6 items-center md:h-5/6'>
				{/*MAIN HEADER */}
				<div className='z-10 mt-32 md:basis-2/5'>
					{/* HEADINGS */}
					<div className='md:-mt-20'>
						<div className='relative'>
							<div>
								<h2 className='hidden md:flex uppercase text-[16rem] font-black absolute -top-44 -left-32 text-gray-400/30 -z-10'>EVOLVE</h2>
							</div>
							<div className='mb-3'>
								<h2 className='uppercase text-5xl md:text-[8rem] font-black md:-ml-2'>gymnasium</h2>
								<h3 className='text-xl md:text-5xl font-extralight'>Your Ultimate Fitness Destination!</h3>
							</div>
						</div>
						<p className='mt-4 md:mt-8 text-sm max-w-[45rem] text-wrap'>At GYMNASIUM, we are dedicated to helping you achieve your fitness goals. Whether you are a beginner or an experienced athlete, our state-of-the-art facility, diverse range of classes, and expert trainers are here to support you every step of the way.</p>
					</div>
					{/* ACTIONS */}
					<div className='mt-8 flex items-center gap-8'>
						<ActionButton setSelectedPage={setSelectedPage}>
							Join Now
						</ActionButton>
						<AnchorLink
							className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
							onClick={() => setSelectedPage(SelectedPage.ContactUs)}
							href={`${SelectedPage.ContactUs}`}
						>
							<p>Learn more</p>
						</AnchorLink>
					</div>
				</div>
				{/* IMAGE*/}
				<div className='flex justify-center md:basis-2/5 md:z-10 md:ml-40 md:mt-16 md:justify-items-end'>
					<img src={HomePageGraphic} alt="HomePage-Graphic" />
				</div>
			</div>
			{/* SPONSORS */}
			{isAboveMediumScreens && (
				<div className='h-[150px] w-full bg-primary-100 py-10 flex items-center'>
					<div className='mx-auto w-3/5 flex justify-between items-center'>
						<img src={SponsorRedBull} alt="" />
						<img src={SponsorForbes} alt="" />
						<img src={SponsorFortune} alt="" />
					</div>
				</div>
			)}
		</section>
	)
}

export default Home