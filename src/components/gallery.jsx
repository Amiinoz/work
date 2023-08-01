import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import useOnScreen from '../hooks/useOnScreen';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import Work from '../components/work';

import '../styles/components/gallery.scss';

const images = [
  {
    id: 0,
    src: require('../assets/oneup/oneup_banner.png').default,
    title: 'OneUp',
    subtitle: 'Mentoring App',
    category: 'Ux Design & UI development',
  },
  {
    id: 1,
    src: require('../assets/favetees/favetees_banner.webp').default,
    title: 'Favetees',
    subtitle: 'E-Commerce site',
    category: 'Development / Full Stack',
  },
  {
    id: 2,
    src: require('../assets/posty/posty_banner.png').default,
    title: 'Posty',
    subtitle: 'Time Manegment App',
    category: 'Ux Design',
  },
  {
    id: 3,
    src: require('../assets/portfolio/portfolio_banner.jpeg').default,
    title: 'Portfolio',
    subtitle: 'Projects',
    category: 'Design / Development',
  },
  {
    id: 4,
    src: require('../assets/tessa/tessa_banner.png').default,
    title: 'Tessa',
    subtitle: 'E-commerce site',
    category: 'Ux Design',
  },

  {
    id: 5,
    src: require('../assets/garabaldi/garabaldi_banner.avif').default,
    title: 'Garabaldi',
    subtitle: 'Resorts & Spa',
    category: 'Development / Website',
  },
];
function GalleryItem({
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
      className={cn('gallery-item-wrapper', { 'is-reveal': onScreen })}
      ref={ref}
    >
      <div></div>
      <div className={'gallery-item'}>
        <div className="gallery-item-info">
          <h1
            className="gallery-info-title"
            data-scroll
            data-scroll-speed="1"
            data-scroll-horizontal="top"
            data-scroll-delay="0.5"
          >
            {title}
          </h1>
          <h2
            className="gallery-info-subtitle"
            data-scroll
            data-scroll-speed="-0.2"
            data-scroll-horizontal="top"
            data-scroll-delay="0.05"
          >
            {subtitle}
          </h2>
          <p className="gallery-info-category">{category}</p>
        </div>
        <div
          className="gallery-item-image"
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
      <div></div>
    </div>
  );
}

export default function Gallery({ src, index, columnOffset }) {
  const [activeImage, setActiveImage] = useState(1);

  const ref = useRef(null);

  useEffect(() => {
    // This does not seem to work without a settimeout
    setTimeout(() => {
      console.log(ref.current.offsetWidth);
      console.log(ref.current.clientWidth);
      console.log({ current: ref.current });
      // eslint-disable-next-line prefer-const
      let sections = gsap.utils.toArray('.gallery-item-wrapper');

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: 'none',
        scrollTrigger: {
          start: 'top top',
          trigger: ref.current,
          scroller: '#main-container',
          pin: true,
          scrub: 0.7,
          snap: 1 / (sections.length - 1),
          end: () => `+=${ref.current.offsetWidth}`,
        },
      });
      ScrollTrigger.refresh();
    });
  }, []);

  const handleUpdateActiveImage = index => {
    setActiveImage(index + 1);
  };

  return (
    <>
      <Work />
      <section data-scroll-section className="section-wrapper gallery-wrap">
        <div className="gallery" ref={ref}>
          <div className="gallery-counter">
            <span>{activeImage}</span>
            <span className="divider" />
            <span>{images.length}</span>
          </div>
          {images.map((image, index, src, id) => (
            <div key={index}>
              <Link to={`/${image.title}`}>
                <GalleryItem
                  key={src.id}
                  index={index}
                  alt={image.title}
                  loading="lazy"
                  {...image}
                  updateActiveImage={handleUpdateActiveImage}
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
