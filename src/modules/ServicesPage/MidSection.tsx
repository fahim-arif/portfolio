import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface IProps {
  title: string;
  description: string;
}

export default function MidSection({ title, description }: IProps) {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          observer.unobserve(entry.target);

          gsap.killTweensOf(".mid-animate-item");

          gsap.fromTo(
            ".mid-animate-item",
            { scale: 0.6, opacity: 0 },
            {
              duration: 1,
              scale: 1,
              opacity: 1,
              ease: "power2.out",
              stagger: 0.2,
            }
          );
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  return (
    <div
      ref={sectionRef}
      className="max-w-7xl mx-auto flex flex-col md:flex-row py-20"
    >
      <div className="mr-8 grid grid-cols-2 md:grid-cols-4 gap-2 w-full">
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/azure-nashville.png"
            width={120}
            height={120}
            alt="Azure"
          />
        </div>

        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/aws-devops-nashville.png"
            width={120}
            height={120}
            alt="AWS"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/apache-nashville.png"
            width={120}
            height={120}
            alt="Apache"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/docker-nashville.png"
            width={120}
            height={120}
            alt="Docker"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/microsoft-iis-logo-nashville.png"
            width={120}
            height={120}
            alt="Microsoft"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/ci-cd-nashville-devops.png"
            width={120}
            height={120}
            alt="CI-CD"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/heroku-nashville.png"
            width={120}
            height={120}
            alt="Heroku"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/terraform-hashicorp-nashville.png"
            width={120}
            height={120}
            alt="Terraform"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/packer-hashicorp-nashville.png"
            width={120}
            height={120}
            alt="Packer"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/nginx-logo-nashville.png"
            width={120}
            height={120}
            alt="Nginx"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/azure-devops-nashville.png"
            width={120}
            height={120}
            alt="Azure DevOps"
          />
        </div>
        <div className="flex justify-center items-center mid-animate-item">
          <Image
            src="/images/devops-logo/gitlabci-nashville.png"
            width={120}
            height={120}
            alt="GitLab"
          />
        </div>
      </div>
      {/* Title & Description */}
      <div className="flex flex-col justify-center max-w-sm">
        <h2 className="text-heading2-bold text-background mid-animate-item">
          {title}
        </h2>
        <p className="text-base-medium text-gray-500 pt-4 mid-animate-item">
          {description}
        </p>
      </div>
    </div>
  );
}
