import React from 'react'

export default function About() {
  return (
    <>
    <section className='flex flex-row justify-center items-center'>
        <div className='fronttext1 !pt-12 !pb-22 !pl-6 !pr-6 min-w-[70%] lg:max-w-[70%] flex flex-col gap-10 justify-center items-center'>
            <h2 className='gradienttext flex flex-row justify-center items-center text-center font-bold'>About Me</h2>
            <div className='!pt-12 !pb-22 !pl-6 !pr-6 w-[100%] flex flex-col justify-center items-center gap-20'>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>Hey there! I'm Joni - a 32-year-old self-taught developer with a background in philosophy, sports sciences and sociology. I'm currently in a career transition, building my skills in web development while planning to launch my own digital business.</p>
              <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200 '>From Academia to Administration</h6>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>I graduated from the University of Jyväskylä in 2019 with three master's degrees. Later I worked as a municipal sports secretary in Ilomantsi where I was coordinating and organizing youth and sports services. While the role had its challenges, I valued the opportunity to make a tangible difference. Over time my curiosity and drive led me towards new areas - especially technology and coding.</p>
              <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200 '>Learning by Doing</h6>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>I began to learn coding (websites) in late 2023. What started as a curiosity has become a daily commitment. I dedicate several hours each day to learning through projects - websites, small games and practical tools that solve real problems. I've discovered that hands-on challenges teach more than tutorials ever could, though I'm grateful to all great teachers who put their time into teaching others.</p>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>I build things because I want them to work, not just look good.</p>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>My preferred languages are JavaScript, TypeScript and PHP, and I'm comfortable working across the full stack using technologies like:
              </p>
              <ul className='flex flex-col justify-center items-center text-center font-bold w-full max-w-200'>
                  <li>HTML / CSS / TailwindCSS / Bootstrap</li>
                  <li>Node.js / Express</li>
                  <li>React.js / Next.js</li>
                  <li>WordPress</li>
                  <li>Firebase / Supabase</li>
                  <li>SQL and NoSQL databases</li>
                  <li>Git and version control</li>
                </ul>
                <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>I enjoy JavaScript for its versatility and TypeScript for type checking in larger projects. I've found PHP surprisingly effective for quick, practical backend development - particalularly with WordPress and CMS projects.</p>
              <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200 '>On AI, Learning and Growth</h6>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>I embrace AI as a development tool. Not as a shortcut, but as a supplement to problem-solving and creativity. AI is best used for mundane tasks. I like to ask AI questions but never take its advice at face value. To me the key to becoming a better developer isn't avoiding tools - it's using them well and choosing the best tool for the job.</p>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>My philosophy of growth is simple: focus on meaningful projects, challenge yourself and finish what you start. I've learned more from projects where I was completely lost than from anything else.</p>
              <h6 className='gradienttext flex flex-row justify-center items-center text-center font-bold max-w-200'>Who I Am</h6>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>I'm a calm, introverted (but social) and curious person. I value deep thought and quiet focus, but I'm also not afraid to step outside my comfort zone. Coding has become a way for me to explore my potential - a space where I can experiment, fail, improve and build something useful.</p>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>
                Though I started late, I'm not in a rush and I don't think programming is going anywhere despite all the advancements in AI. I'm here for the long game, to keep learning, building and moving forward. I'm excited to see what the future holds and how I can contribute.
              </p>
              <p className='flex flex-row justify-center items-center text-center font-bold w-full max-w-200'>If you want to see my previous portfolio, click here:</p>
              <button className='btn btn-primary !mb-40'><a href="https://eyesore123.github.io/Joni-s-portfolio/" target='_blank'>Learn more </a>
              </button>
          </div>
        </div>
    </section>
    </>
  )
}
