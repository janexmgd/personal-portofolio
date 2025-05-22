import { Facebook, GithubIcon } from 'lucide-react';
import flower from '../assets/flower.svg';
const Home = () => {
  const projects = [
    {
      title: 'twitterorx',
      description:
        'A project for to get all media from twitter by username, using twitter api. Built with Axios, boxen, chalk, dotenv, inquirer. This project using Twitter api (must authenticated user)',
      link: 'https://github.com/janexmgd/twitterorx',
    },
    {
      title: 'saio',
      description:
        'A project for download post from tiktok, using stack react tailwind for frontend, and using axios,streamify,express for backend api',
      link: 'https://github.com/janexmgd/saio',
    },
    {
      title: 'instafvck-js',
      description:
        'A project for download post or reels from instagram using instagram api, this project just using your instagram cookie to fetch other profile',
      link: 'https://github.com/janexmgd/instafvck-js',
    },
    {
      title: 'kfcku-regist',
      description:
        'A tool for automation creating account at kfcku app, this project built with sniffing http request at kfcku application',
      link: 'https://github.com/imjanexmgd/kfcku-regist',
    },
  ];
  return (
    <div className='flex min-h-screen  w-full'>
      {/* info */}
      <div className='w-1/12 h-screen flex flex-col gap-4 items-center fixed top-0 left-0 '>
        <div className='flex-1'></div>
        <a
          href='http://www.facebook.com/janexmgd'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Facebook className='text-pink-400 hover:text-white transition-colors' />
        </a>
        <a
          href='http://www.github.com/janexmgd'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GithubIcon className='text-pink-400 hover:text-white transition-colors' />
        </a>

        <div className='flex-1 w-px bg-pink-400 mt-2'></div>
      </div>

      <div className='w-10/12 mr-auto ml-auto min-h-screen px-5 flex flex-col items-center'>
        {/* opening */}
        <div className='flex flex-col pt-10 w-full max-w-3xl min-h-screen md:h-fit '>
          <p className='text-lg'>Hi, my name is</p>
          <p className='text-6xl text-[#FFF6F5] mt-4'>Denny Wahyu P.</p>
          <p className='text-lg mt-5 text-gray-300'>
            I am a software engineer who focuses on creating automation in
            applications, and creating Rest APIs. Using javascript technology
            (Node Js)
          </p>
          <button className='relative max-w-56 outline px-3 py-3 mt-8 bg-transparent border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition-colors'>
            <a
              href='http://www.github.com/janexmgd'
              target='_blank'
              rel='noopener noreferrer'
            >
              Check out my github!
            </a>
          </button>
        </div>

        {/* about me */}
        <div className='flex flex-col pt-10 w-full max-w-3xl min-h-screen'>
          <h2 className='flex items-center text-2xl font-bold text-white'>
            <span className='text-pink-400'>01.</span>
            <span> </span>
            <span className='ms-2'>About Me</span>
            <div className='flex-1 h-px bg-gray-500 ml-2'></div>
          </h2>
          <p className='text-lg mt-5 text-gray-300'>
            Hello my name is Denny Wahyu Prasetyo, I am a passionate software
            engineer with a strong interest in building efficient and scalable
            applications. My expertise lies in creating automation tools and
            developing robust REST APIs using modern JavaScript technologies
            like Node.js. I enjoy solving complex problems and continuously
            learning to improve my skills.
          </p>
          <br />
          <div className='text-lg text-gray-300'>
            Here are few technologies I've used:
          </div>
          <ul className='text-gray-300 px-5 text-lg'>
            <li className='list-disc marker:text-pink-400'>Javascript(ES6)</li>
            <li className='list-disc marker:text-pink-400'>Express Js</li>
          </ul>
        </div>
        <div className='flex flex-col pt-10 w-full max-w-3xl min-h-screen'>
          <h2 className='flex items-center text-2xl font-bold text-white'>
            <span className='text-pink-400'>02.</span>
            <span> </span>
            <span className='ms-2'>Some Things I’ve Built</span>
            <div className='flex-1 h-px bg-gray-500 ml-2'></div>
          </h2>
          <div className='mt-5'>
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target='_blank'
                className='min-w-full min-h-80 outline bg-pink-400/10 hover:cursor-pointer flex flex-col px-10 justify-center m-5'
              >
                <span className='text-pink-400 font-mono text-lg'>Project</span>
                <span className='text-2xl text-gray-300'>{project.title}</span>
                <span className='mt-5 text-gray-300'>
                  {project.description}
                </span>
              </a>
            ))}
          </div>
        </div>
        {/* <div className='flex flex-col items-center pb-10 w-full'>
          <span>Made With ♡ by Janexmgd</span>
          <div>
            <span>inspired by </span>
            <a
              href='https://github.com/bchiang7/v4'
              target='_blank'
              rel='noopener noreferrer'
            >
              bchiang7 website
            </a>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
