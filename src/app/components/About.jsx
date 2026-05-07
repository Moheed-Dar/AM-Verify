export default function About() {
  return (
    <section id="about" className="section py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a passionate Full Stack Developer based in Pakistan. 
              I love building modern, clean and user-friendly web applications.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mt-4">
              With expertise in React, Next.js, Tailwind CSS, and Node.js, 
              I turn ideas into reality.
            </p>
          </div>
          <div className="bg-gray-100 h-96 rounded-2xl flex items-center justify-center text-gray-400">
            Your Photo Here
          </div>
        </div>
      </div>
    </section>
  );
}