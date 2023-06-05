import { useState, useEffect } from "react";
import { useAnimate, stagger, motion, useInView } from "framer-motion";

const staggerMenuItems = stagger(0.3, { startDelay: 0.15 });
const staggerTitle = stagger(0.3, { ease: [.32, .23, .4, .9] , startDelay: 0.5 });

export function useExperienciaAnimation() {

  const [scope, animate] = useAnimate();

  const isInView = useInView(scope)

  useEffect(() => {
    

    animate(
      "li",
      isInView
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(20px)" },
      {
        duration: 0.2,
        delay: isInView ? staggerMenuItems : 0
      }
    );

    animate(
      '.liExperiencia__textos',
      isInView
      ? {transform: 'translateX(0vw)' }
      : {transform: 'translateX(100vw)'},
    {
      duration: 0.2,
      delay: isInView ? staggerTitle: 0
    }
    )
  }, [isInView]);

  return scope;
}