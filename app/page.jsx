"use client";

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TeamCard from '../components/TeamCard.jsx';

gsap.registerPlugin(ScrollTrigger);

const team = [
  {
    initial: 'S', image: '/images/srushti.webp', imageAlt: 'Srushti',
    name: 'Srushti Panjlor', designation: 'Frontend Developer',
    description: 'I am a passionate Frontend Developer at MetaRulesX, focused on creating modern, responsive, and user-friendly web experiences.',
    linkedin: 'https://www.linkedin.com/in/er-srushti-panjlor-72a329244',
  },
   {
    initial: 'A', image: '/images/ashwini.webp', imageAlt: 'Ashwini',
    name: 'Ashwini Dubhashi', designation: 'Frontend Developer',
    description: 'A passionate Frontend Developer and Data Analyst who combines creative design with data-driven insights to build user-friendly, responsive, and efficient digital solutions.',
    linkedin: 'https://www.linkedin.com/in/ashwini-dubhashi',
  },
  {
    initial: 'S', image: '/images/sairaj.webp', imageAlt: 'Sairaj',
    name: 'Sairaj Vidhate', designation: 'Creative Designer & 3D Artist',
    description: 'Creates impactful visual experiences through graphic design, Adobe Photoshop, Premiere Pro, 3D modeling, animation, and motion design.',
    linkedin: 'https://www.linkedin.com/in/sairaj-vidhate-b0b981322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
   {
    initial: 'F', image: '/images/farah.webp', imageAlt: 'Farah',
    name: 'Farah Naz', designation: 'Full Stack Developer',
    description: 'Full Stack Developer skilled in React, JavaScript, Node.js, and databases, with expertise in web development, client communication, and project management.',
    linkedin: 'https://www.linkedin.com/in/farah-naz1?utm_source=share_via&utm_content=profile&utm_medium=member_android', highlight: true,
  },
 
  {
    initial: 'S', image: '/images/shivam.webp', imageAlt: 'Shivam',
    name: 'Shivam Jha', designation: 'Frontend Developer',
    description: 'Builds responsive, modern web interfaces and transforms ideas into smooth, engaging digital experiences.',
    linkedin: 'https://www.linkedin.com/in/shivam-jha-67b95629a',
  },
   
  {
    initial: 'P', image: '/images/prathik.webp', imageAlt: 'Prathik',
    name: 'Pratik Mhaske', designation: 'Backend Engineer',
    description: 'Handles backend operations, APIs, databases, data management, and reliable server-side systems for websites and applications.',
    linkedin: 'https://www.linkedin.com/in/pratik-mhaske-942ab1257/', highlight: true,
  },
  {
    initial: 'Y', image: '/images/yash.webp', imageAlt: 'Yash',
    name: 'Yash Auti', designation: 'Full Stack Developer',
    description: 'From Pixels to Products — building seamless digital experiences across web, apps, software, UI/UX, and backend, from idea to deployment.',
    linkedin: 'https://www.linkedin.com/in/bepolite',
  },

];

export default function Home() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.card', track);
      const getScrollAmount = () => -(track.scrollWidth - window.innerWidth);

      const horizontalTween = gsap.to(track, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          animation: undefined,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Keep the staggered card entrance linked to the horizontal movement.
      cards.forEach((card, index) => {
        const targetY = index % 2 === 0 ? 40 : -40;
        gsap.set(card, { y: targetY });
        gsap.from(card, {
          opacity: 0,
          y: targetY + 120,
          scale: 0.8,
          rotation: index % 2 === 0 ? 8 : -8,
          scrollTrigger: {
            trigger: card,
            containerAnimation: horizontalTween,
            start: 'left 100%',
            end: 'left 40%',
            scrub: 1,
          },
        });
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <main>
      <section className="horizontal-section" ref={sectionRef}>
        <div className="sticky-wrapper">
          <div className="cards-track" ref={trackRef}>
            {team.map((member) => (
              <TeamCard key={member.name} member={member} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
