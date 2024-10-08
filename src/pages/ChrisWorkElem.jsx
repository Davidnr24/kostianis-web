import React, { useState } from 'react';
import VideoComp from '../components/VideoComp';



export default function ChrisWorkElem({ displayPage }) {



  const pages = [
    {
      id: 'storytelling',
      title: <h1 className='font-extrabold font-zenKaku text-black'><span className='text-logo'>S</span>torytelling</h1>,
      subtitle: <h2 className='font-zenKaku text-center'>Chris Kostianis, Director of Photography</h2>,
      videos: [
        {
          title: 'New York Public Library, Library Lions',
          url: 'https://vimeo.com/861398689'
        },
        {
          title: 'New York Public Library, Library Lions',
          url: 'https://vimeo.com/861391896'
        },
        {
          title: 'JT Van Zandt Generation Strong',
          url: 'https://vimeo.com/861381848'
        },
        {
          title: 'Alzheimer’s Drug Discovery Foundation, Hope is Here',
          url: 'https://vimeo.com/874411040'
        },
        {
          title: 'Dr. Marla J. Keller, Albert Einstein College of Medicine Women’s Division',
          url: 'https://vimeo.com/877577662'
        },
        {
          title: 'Karen Mandelbaum, Albert Einstein College of Medicine Women’s Division',
          url: 'https://vimeo.com/877614533'
        },
        {
          title: 'Suzy Guess, UPMC Magee-Womens Hospital',
          url: 'https://vimeo.com/877618703'
        },
        {
          title: 'One in a Billion',
          url: 'https://vimeo.com/170018472'
        },
        {
          title: 'Eukanaba, Steve Mize “Reveille"',
          url: 'https://vimeo.com/251264604'
        },
        {
          title: 'Kendall Herr, Royal Canine Feature',
          url: 'https://vimeo.com/251264657'
        },
      ]
    },
    {
      id: 'hype-videos',
      title: <h1 className='font-extrabold text-black'><span className='text-logo'>H</span>ype <span className='text-logo'>V</span>ideos</h1>,
      subtitle: <h2 className='font-zenKaku text-center'>Chris Kostianis, Director of Photography</h2>,
      videos: [
        {
          title: 'NYC Football Club \'22',
          url: 'https://vimeo.com/885844938'
        },
        {
          title: 'New York Islanders, Media Day (BTS)',
          url: 'https://vimeo.com/861674202'
        },
        {
          title: 'LG Electronics, March Madness',
          url: 'https://vimeo.com/170016011'
        },
        {
          title: 'The Brooklyn Nets, Game Opener',
          url: 'https://vimeo.com/170018343'
        },
      ]
    },
    {
      id: 'marketing',
      title: <h1 className='font-extrabold text-black'><span className='text-logo'>M</span>arketing</h1>,
      subtitle: <h2 className='font-zenKaku text-center'>Chris Kostianis, Director of Photography</h2>,
      videos: [
        {
          title: 'New York Mets, Amazin\' Call Center',
          url: 'https://vimeo.com/861596661'
        },
        {
          title: 'New York Mets, Watch Party',
          url: 'https://vimeo.com/861594566'
        },
        {
          title: 'NHL, GameCenter Live',
          url: 'https://vimeo.com/179695142'
        },
        {
          title: 'AGL Credit Management',
          url: 'https://vimeo.com/878400630'
        },
        {
          title: 'Ford, Unsung Extra',
          url: 'https://vimeo.com/170016013'
        },
        {
          title: 'Griffin Hospital, The Center for Cancer Care',
          url: 'https://vimeo.com/178461720'
        },
        {
          title: 'Griffin Hospital, The Center for Cancer Care',
          url: 'https://vimeo.com/178461721'
        },
        {
          title: 'Orange Bowl, Father and Son Legacy',
          url: 'https://vimeo.com/178462845'
        },
        {
          title: 'ABC Eyewitness News',
          url: 'https://vimeo.com/178465940'
        },
        {
          title: 'LG Electronics, March Madness',
          url: 'https://vimeo.com/170016011'
        },
      ]
    },
  ]

  const [showModalMobile, setShowModalMobile] = useState(() => {
    const mapAux = []
    pages.map((elem) => {
      if(elem.id === displayPage){
        elem.videos.map((elem) => {
          mapAux.push(false)
          return <></>
        })
      }
      return <></>
    })
    return mapAux
  })

  const handleSet = (bool,index) => {
    const aux = []
    showModalMobile.map((elem,indexAux) => {
      if(index === indexAux) aux.push(bool)
      else aux.push(false)
      return <></>
    })
    setShowModalMobile(aux)
  }

  return (
    <div className='font-zenKaku min-h-[100vh]'>
      <div className='w-full h-[85px] bg-black' />
      <div className='flex flex-col justify-center items-center w-full gap-4 my-20'>
        {pages.map((elem) => {
          if (elem.id === displayPage) {
            return <>
              {elem.title}
              {elem.subtitle}
              <div className='grid lg:grid-cols-3 grid-cols-1 items-end w-full mx-32'>
                {elem.videos.map((video,index) => {
                  return <VideoComp
                    title={video.title}
                    url={video.url}
                    showModalMobile={showModalMobile[index]} 
                    setShowModalMobile={(bool)=>{handleSet(bool,index)}}/>
                }
                )}

              </div>
            </>
          }
          return <></>
        })}
      </div>
    </div>
  );
}