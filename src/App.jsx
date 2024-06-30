import React from 'react'
import Card from './Card'
import Apple from './assets/apple.png'
function App() {
  let data = [
    {
      title:"Tajmahal",
      image:"https://www.travelandleisure.com/thmb/wdUcyBQyQ0wUVs4wLahp0iWgZhc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/taj-mahal-agra-india-TAJ0217-9eab8f20d11d4391901867ed1ce222b8.jpg",
      description:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r.1628-1658) to house the tomb of his beloved wife, Mumtaz Mahal"
    },
    {
      title:"India Won ICC T20 WC",
      image:"https://www.aljazeera.com/wp-content/uploads/2024/06/AP24181688666233-1719696907.jpg?resize=770%2C513&quality=80",
      description:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. It was commissioned in 1631 by the fifth Mughal emperor, Shah Jahan (r.1628-1658) to house the tomb of his beloved wife, Mumtaz Mahal"
    },
    {
      title:"Porsche",
      image:"https://stimg.cardekho.com/images/carexteriorimages/930x620/Porsche/718/10989/1690874880367/front-left-side-47.jpg",
      description:"Dr. Ing. h.c. F. Porsche AG, usually shortened to Porsche, is a German automobile manufacturer specializing in luxury, high-performance sports cars, SUVs and sedans, headquartered in Stuttgart, Baden-Württemberg, Germany."
    },
    {
      title:"Local Image",
      image:Apple,
      description:"You shall always use image only by imorting it."
    }
  ]
  return <>
    {/* <!-- Page Content --> */}
  <div className="container">

  {/* <!-- Page Heading --> */}
  <h1 className="my-4">Today's Headlines
  </h1>

  <div className="row">
      {
        data.map((e,i)=>{
          return <Card data={e} key={i}/>
        })
      }
  </div>
  </div>
  </>
}

export default App