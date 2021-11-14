import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useOnScreen from '../../hooks/useOnScreen';
import cn from 'classnames';
import './projects.scss';
import Work from '../work/Work';

const images = [
  {
    id: 1,
    src: require('../../assets/favetees/cover.webp'),
    title: 'Favetees',
    subtitle: 'E-Commerce site',
    category: 'Development / Full Stack',
  },
  {
    id: 2,
    src: require('../../assets/covid19-tracker/cover.webp'),
    title: 'Covid19Tracker',
    subtitle: 'Global data',
    category: 'Development / Website',
  },
  {
    id: 3,

    src: require('../../assets/portfolio/cover.webp'),
    title: 'Portfolio',
    subtitle: 'Projects',
    category: 'Design / Development',
  },
  {
    id: 4,
    src: require('../../assets/garabaldi/cover.webp'),
    title: 'Garabaldi',
    subtitle: 'Resorts & Spa',
    category: 'Development / Website',
  },

  {
    id: 5,
    src: require('../../assets/mosdev/cover.webp'),
    title: 'MosDev',
    subtitle: 'Dark VsCode Theme',
    category: 'Design',
  },
  {
    id: 6,
    src: require('../../assets/weatherApp/cover.webp'),
    title: 'Weather',
    subtitle: 'Progressive App',
    category: 'Development / App',
  },
  {
    id: 7,
    src: require('../../assets/airbnb/cover.webp'),
    title: 'Airbnb',
    subtitle: 'React Native App',
    category: 'Coming soon',
  },
];
function ProjectItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const ref = useRef(null);

  const onScreen = useOnScreen(ref, 0.5);

  useEffect(() => {
    if (onScreen) {
      updateActiveImage(index);
    }
  }, [onScreen, index]);

  return (
    <div
      className={cn('project-item-wrapper', { 'is-reveal': onScreen })}
      ref={ref}
    >
      <div />
      <div className={'project-item'}>
        <div className="project-item-info">
          <h1 className="project-info-title">{title}</h1>
          <h2 className="project-info-subtitle">{subtitle}</h2>
          <p className="project-info-category">{category}</p>
        </div>
        <div
          className="project-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div />
    </div>
  );
}

export default function Projects({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      // console.log(ref.current.offsetWidth);
      // console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      const sections = gsap.utils.toArray('.project-item-wrapper');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: ref.current,
          scroller: '#main-container',
          pin: true,
          scrub: 0.5,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, [ScrollTrigger]);

  const handleUpdateActiveImage = index => {
    setActiveImage(index + 1);
  };

  return (
    <>
      <Work />
      <section data-scroll-section className="section-wrapper project-wrap">
        <div className="project" ref={ref}>
          <div className="project-counter">
            <span>{activeImage}</span>
            <span className="divider" />
            <span>{images.length}</span>
          </div>
          {images.map((image, index, src) => (
            <div key={src}>
              <ProjectItem
                key={src}
                index={index}
                {...image}
                updateActiveImage={handleUpdateActiveImage}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
