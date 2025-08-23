import Navigation from '../components/home/Navigation'
import Story from '../components/about/Story'
import Timeline from '../components/about/Timeline'
import Craft from '../components/about/Craft'
import Kuote from '../components/about/Kuote'
import Values from '../components/about/Values'
import Team from '../components/about/Team'
import Testimos from '../components/about/Testimos'

const About = () => {
  return (
      <>
    <Navigation />
    <header className="about-header pt-32 pb-20 bg-black">
        <div className="container mx-auto px-14 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">Our <span className="text-gold">Story</span></h1>
            <p className="text-xl max-w-2xl mx-auto text-gray-200">Crafting exquisite jewelry with passion and precision since 1985. Discover the artistry and dedication behind every J Luxe piece.</p>
        </div>
    </header>
        <div className="bg-gray-900">
        <div className="container mx-auto px-14 py-3">
            <div className="flex items-center text-sm">
                <a href="/" className="text-gray-400 hover:text-gold transition duration-300">Home</a>
                <span className="mx-2 text-gray-600">/</span>
                <span className="text-gold">About</span>
            </div>
        </div>
    </div>
    <Story />
    <Timeline />
    <Craft />
    <Kuote />
    <Values />
    <Team />
    <Testimos />
      </>
  )
}

export default About