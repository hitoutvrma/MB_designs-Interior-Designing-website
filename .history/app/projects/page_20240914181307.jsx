import Image from "next/image";

const projcets = [
  {
    id:1,
    name:'drawing room for family time',
    description:'loasfd asfd asf sadf lksdjf  aslsdkdfj sasdfj ;lfj sf aslfk s dadfklj',
    image:'/image/project3.jpg',
    link:'',
  },
  {
    id:2,
    name:'drawing room for family time',
    description:'loasfd asfd asf sadf lksdjf  aslsdkdfj sasdfj ;lfj sf aslfk s dadfklj',
    image:'/image/project2.jpg',
    link:'',
  },
  {
    id:3,
    name:'drawing room for family time',
    description:'loasfd asfd asf sadf lksdjf  aslsdkdfj sasdfj ;lfj sf aslfk s dadfklj',
    image:'/image/project2.jpg',
    link:'',
  }
];

const page = () => {
  return (
    <div>

    <div className="bg-[url('/image/backgroundproject.jpg')] bg-center bg-cover">
     <h1 className="container py-64 text-6xl font-semibold tracking-widest text-white">Our Projects</h1>
    </div>

    <div className="container grid lg:grid-cols-2 gap-8 py-8">
      {
        projcets.map((project) => (
          <div key={project.id} className="relative overflow-hidden rounded-xl group">
            <div>
              <Image src={project.image} width={480} height={380} alt="" className="w-full"/>
            </div>
            <div>
              <h1> {project.name}</h1>
              <p>{project.description}</p>
            </div>
          </div>
        ))
      }

    </div>

    </div>
    
  )
}

export default page
