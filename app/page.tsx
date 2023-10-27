import Image from 'next/image'
import Gallery from './components/Gallery/Gallery'

export default function Home() {
  return (
    <div className='container' style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
      <h1>Photo gallery</h1>
      <Gallery />
    </div>
  )
}
