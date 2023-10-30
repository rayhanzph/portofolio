interface Projects {
  name: string
  description: string
  thumbnail: string
  demo?: string
  repo?: string
  techs: string[]
}
interface Experience {
  company: string
  rangeTime: string
  job: string
}

interface Education {
  education: string
  rangeTime: string
  experiences: string
}
interface SocialMedia {
  name: string
  link: string
}
interface Data {
  name: string
  photoUrl: string
  job: string
  cvUrl: string
  about: string
  skills: string[]
  projects: Projects[]
  experiences: Experience[]
  email:string
  socialMedias: SocialMedia[]
}
const data: Data = {
  name: 'Rayhan Emillul Fata',
  photoUrl: '/foto.webp',
  job: 'Software Engineer',
  cvUrl: '/cv.jpg',
  about: `​I love Programming, an IoT Enthusiast And Backend Programming, with my skill and technical comprehension, I am capable of creating interesting and marketable apps.
  I am currently studying Informatics Engineer at Universitas Sebelas Maret. Outside technologies, I am also interested in astronomy and books.`,
  skills: ['iot', 'js', 'gcp', 'MySQL', 'java', 'c++'],
  projects: [
    {
      name: 'Test',
      description: `Lorem Ipsum dolor sit amet`,
      thumbnail: `/react-note-app.png`,
      demo: 'https://',
      repo: 'https://',
      techs: ['test', 'test 5'],
    },
    {
      name: 'React Notes App',
      description: `Simple Notes App with clean and responsive design made by React js`,
      demo: 'https://dicoding-react-note-app.vercel.app/',
      thumbnail: `/react-note-app.png`,
      techs: ['Tailwind CSS', 'React JS', 'Typescript'],
    },
  ],
  education: [
    {
      education: 'Aug 2020 - Aug 2021',
      rangeTime: 'Test',
      experiences: 'Backend Engineer'
    },
    {
      education: 'Aug 2020 - Aug 2021',
      rangeTime: 'Test',
      experiences: 'Backend Engineer'
    },
  ],
  experiences: [
    {
      rangeTime: 'Aug 2020 - Aug 2021',
      company: 'Test',
      job: 'Backend Engineer'
    },
    {
      rangeTime: 'Aug 2021',
      company: 'Roxi Earth',
      job: 'Fullstack Engineer'
    },
    {
      rangeTime: 'Feb 2020 - Present',
      company: 'BlockchainSpace',
      job: 'Software Engineer'
    },
  ],
  email: 'rayhanemillul120@gmail.com',
  socialMedias: [
    {
      name: 'Github',
      link: 'https://github.com/rayhanzph'
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/rayhan.yaml'
    },
    {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/rayhanemillul'
    },
  ]
}
export default data
