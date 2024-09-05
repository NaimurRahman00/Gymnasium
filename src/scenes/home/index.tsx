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
                <div className='z-10 mt-32 md:basis-3/5'>
                    {/* HEADINGS */}
                    <div className='md:-mt-20'>
                        <div className='relative'>
                            <div>
                                <h2 className='hidden md:flex uppercase text-[16rem] font-black absolute -top-44 -left-32 text-gray-400/30 -z-10'>EVOLVE</h2>
                            </div>
                            <div className='mb-3'>
                                <h2 className='uppercase text-[8rem] font-black -ml-2'>gymnasium</h2>
                                <h3 className='text-5xl font-extralight -mt-6'>Your Ultimate Fitness Destination!</h3>
                            </div>
                        </div>
                        <p>At GYMNASIUM, we are dedicated to helping you achieve your fitness goals. Whether you are a beginner or an experienced athlete, our state-of-the-art facility, diverse range of classes, and expert trainers are here to support you every step of the way. Discover a community that inspires, motivates, and empowers you to become the best version of yourself.</p>
                    </div>
                    {/* ACTIONS */}
                    <div>
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
                <div>
                    <div>
                        <img src={HomePageGraphic} alt="HomePage-Graphic" />
                    </div>
                </div>
            </div>
            {/* SPONSORS */}
            {isAboveMediumScreens && (
                <div>
                    <div>
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