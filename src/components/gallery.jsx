import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import useOnScreen from '../hooks/useOnScreen';
import Work from '../components/work';

import cn from 'classnames';
import { Link } from 'react-router-dom';

import '../styles/components/gallery.scss';

const images = [
  {
    id: 0,
    // src: 'https://images.unsplash.com/photo-1578832842586-514eb4695010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2576&q=80',
    src: require('../assets/oneup/oneup_banner.png').default,

    title: 'OneUp',
    subtitle: 'Case study',
    category: 'Google Design challenge',
  },
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    title: 'Tessa',
    subtitle: 'Case study',
    category: 'Google Design challenge',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1484627147104-f5197bcd6651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80',
    title: 'Posty',
    subtitle: 'Case study',
    category: 'Google Design challenge',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1627225924765-552d49cf47ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80',
    title: 'Favetees',
    subtitle: 'E-Commerce site',
    category: 'Development / Full Stack',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1613758947307-f3b8f5d80711?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80',
    title: 'Covid19Tracker',
    subtitle: 'Global data',
    category: 'Development / Website',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1517323197145-72f28d311d51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1738&q=80',
    title: 'Portfolio',
    subtitle: 'Projects',
    category: 'Design / Development',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1622137276463-5d2b374cad11?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2574&q=80',
    title: 'Garabaldi',
    subtitle: 'Resorts & Spa',
    category: 'Development / Website',
  },

  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1515339760107-1952b7a08454?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1769&q=80',
    title: 'MosDev',
    subtitle: 'Dark VsCode Theme',
    category: 'Design',
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
            data-scroll-speed="-3"
            data-scroll-horizontal="top"
            data-scroll-delay="0.03"
          >
            {title}
          </h1>
          <h2
            className="gallery-info-subtitle"
            data-scroll
            data-scroll-speed="-2"
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
          scrub: 0.5,
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
