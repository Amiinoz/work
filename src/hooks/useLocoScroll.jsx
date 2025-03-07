import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss';

gsap.registerPlugin(ScrollTrigger);

export default function useLocoScroll(start) {
  useEffect(() => {
    if (!start) return;

    let locoScroll = null;
    const scrollEl = document.querySelector('#main-container');

    // Initialize Locomotive Scroll
    locoScroll = new LocomotiveScroll({
      el: scrollEl,
      smooth: true,
      multiplier: 1,
      class: 'is-reveal',
    });

    // Update ScrollTrigger when locomotive scroll updates
    locoScroll.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Set up ScrollTrigger proxy for smooth scrolling integration
    ScrollTrigger.scrollerProxy(scrollEl, {
      scrollTop(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.y;
        }
        return null;
      },
      scrollLeft(value) {
        if (locoScroll) {
          return arguments.length
            ? locoScroll.scrollTo(value, 0, 0)
            : locoScroll.scroll.instance.scroll.x;
        }
        return null;
      },
    });

    // Update locomotive scroll when ScrollTrigger refreshes
    const lsUpdate = () => {
      if (locoScroll) {
        locoScroll.update();
      }
    };

    ScrollTrigger.addEventListener('refresh', lsUpdate);
    ScrollTrigger.refresh();

    // Cleanup function
    return () => {
      if (locoScroll) {
        ScrollTrigger.removeEventListener('refresh', lsUpdate);
        locoScroll.destroy();
        locoScroll = null;
      }
    };
  }, [start]);
}
