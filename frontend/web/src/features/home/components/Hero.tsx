import { Button } from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      className="flex justify-center items-center py-24 bg-white"
      id="home"
    >
      <div className="max-w-3xl text-center px-6">
        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
          Available for Hire
        </span>

        <h1 className="text-5xl font-bold mt-4">
          Hi, I&apos;m <span className="text-gray-900">Siva Padmanaban</span>
        </h1>

        <p className="mt-4 text-gray-600 leading-relaxed">
          Senior Full Stack Developer specializing in <strong>ReactJS</strong>,
          <strong> NodeJS</strong>, <strong>AWS</strong>, and{" "}
          <strong>DevOps</strong>. I build scalable, high-performance web
          applications and cloud architectures.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button> <a href="/assets/cv/SIVA-PADMANABAN-Senior-Software-Engineer-Resume-2025.pdf" target="_blank" download>Download Resume</a></Button>
          <Button variant="secondary">
            <a href="#connect">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
