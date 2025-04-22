
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Brand Panel */}
      <div className="bg-[#076873] flex items-center justify-center relative overflow-hidden min-h-[40vh] lg:min-h-full">
        <div className="relative z-20 p-8 w-full h-full flex items-center justify-center animate-fade-in">
          <img src="/snurm.dev.png" alt="Your Brand Logo" className="w-full max-w-[300px] h-auto object-contain filter drop-shadow-lg" />
        </div>
        <div className="absolute w-[200%] h-full bg-[#F1F2F0] transform rotate-[-15deg] right-[-180%] z-10 transition-transform duration-500 ease-in-out"></div>
      </div>

      {/* Content Panel */}
      <div className="p-8 lg:p-16 flex flex-col justify-center animate-fade-in">
        <h1 className="text-4xl lg:text-5xl font-bold text-[#73332D] mb-6 leading-tight">
          Transforming Digital Experiences
        </h1>
        
        <p className="text-lg text-[#73332D]/80 mb-8">
          Front-end developer passionate about creating beautiful and performant web experiences.
        </p>

        <div className="grid gap-4 mb-12">
          <Card className="p-6 bg-[#F2AA80]/10 hover:bg-[#F2AA80]/20 transition-colors">
            <h3 className="text-xl font-semibold text-[#076873] mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "TypeScript", "Tailwind CSS", "Next.js", "UI/UX Design"].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#076873]/10 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <div className="flex gap-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-[#076873] hover:text-white transition-colors"
            asChild
          >
            <a
              href="https://github.com/SadikMohamud"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-[#076873] hover:text-white transition-colors"
            asChild
          >
            <a
              href="https://www.linkedin.com/in/sadik-mohamud/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="rounded-full hover:bg-[#076873] hover:text-white transition-colors"
            asChild
          >
            <a
              href="mailto:contact@yourmail.com"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
