import React from 'react'
import Picture from './Picture';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import first from '../assets/certificates/nov 2023.png'
import second from '../assets/certificates/certificate nov 16 2023.png'
import third from '../assets/certificates/oct 2023.jpg'
import fourth from '../assets/certificates/oct 2023 (2).jpg'
import fifth from '../assets/certificates/oct 2023 (3).jpg'
import sixth from '../assets/certificates/oct 2023 (4).jpg'
import seventh from '../assets/certificates/feb 2023.png'
import eight from '../assets/certificates/feb 2023 (2).png'
const Certificates = () => {

  const certificates = [
    {
      id: 1,
      title: "Institute of Computer Engineers of the Philippines (ICpEP), Inc. -Student Edition",
      desc: "Student member of institure of Computer Engineers of the Philippines (ICpEP), Inc",
      date: "November 25, 2023",
      photo: first
    },
    {
      id: 2,
      title: "Cisco Networking Academy and Python Institute",
      desc: "Completed Python Essentials 1 Course",
      date: "November 16, 2023",
      photo: second
    },
    {
      id: 3,
      title: "Batangas State University - The National Engineering University - Alangilan Campus",
      desc: "The Industry of Game Development in the Philippines",
      date: "October 7, 2023",
      photo: third
    },
    {
      id: 4,
      title: "Batangas State University - The National Engineering University - Alangilan Campus",
      desc: "Embracing DevOps Excellence: A Journey to Continuous Innovation",
      date: "October 7, 2023",
      photo: fourth
    },
    {
      id: 5,
      title: "Batangas State University - The National Engineering University - Alangilan Campus",
      desc: "Guardians of the Digitial Realm: Navigating the Evolving Landscape of Social Engineering Threats",
      date: "October 7, 2023",
      photo: fifth
    },
    {
      id: 6,
      title: "Batangas State University - The National Engineering University - Alangilan Campus",
      desc: "Unlocking the Power of Containers: Demystifying Containerization for All",
      date: "October 7, 2023",
      photo: sixth
    },

    {
      id: 7,
      title: "Batangas State University - The National Engineering University - Alangilan Campus",
      desc: "CpE-gnite 2023: Igniting the Passion for the Glimpse of Tomorrow - Jobs and Careers in Computer Engineering",
      date: "February 4, 2023",
      photo: seventh
    },

    {
      id: 8,
      title: "Batangas State University - The National Engineering University - Alangilan Campus",
      desc: "CpE-gnite 2023: Igniting the Passion for the Glimpse of Tomorrow - Project Management: Agile Methodology",
      date: "February 4, 2023",
      photo: eight
    },
  ]

  const [one] = useTypewriter({
    words: ['Certificates'],
    typeSpeed: 10
  });

  const [two] = useTypewriter({
    words: ['Here are some of my seminars/webinars attended'],
    typeSpeed: 10
  });

  return (
    <div>
      <div className='bg-[#121212] text-white flex flex-col-reverse sm:flex-row items-center justify-center min-h-[calc(100vh-64px)] text-center sm:text-start'>
          <div className='sm:w-[550px] p-5'>
            <p className='text-red-600 text-[40px]'>{one} <Cursor/></p>
            <p className='sm:text-[17px] text-[13px] '>{two}</p>
          </div>
          <Picture/>
      </div>

      <div className='bg-[#121212] pt-10'>

      

      {certificates.map(({id, title, desc, date, photo}) => 

        <div key={id} className={`w-full pt-10 text-white flex flex-col-reverse sm:flex-row  items-center justify-center sm:justify-evenly bg-[#121212] gap-4 text-center sm:text-start`}>
          <div className='px-8 text-[13px] sm:text-[17px] pb-10 sm:w-[600px]'>
              <p>{title}</p>
              <p>{date}</p>
              <p>{desc}</p>
          </div>
          <img className='w-[370px]' src={photo} alt="" />
        </div>
      
      
      )}

      </div>

      
      
    </div>
  )
}

export default Certificates
