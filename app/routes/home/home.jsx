
import helpDashboard from '~/assets/help-dashboard.jpg';
import helpLogin from '~/assets/help-login.jpg';
import oxyiotDashboard from '~/assets/oxyiot-home.jpg';
import oxyiotLogin from '~/assets/oxyiot-splash.jpg';
import daykartScreen1 from '~/assets/daykart-screen1.jpg';
import daykartScreen2 from '~/assets/daykart-screen2.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Delivery-Daykart eCommerce App"
        description="Developed a delivery partner application for Daykart, using Flutter to enhance delivery efficiency and user experience."
        model={{
          type: 'phone',
          alt: 'Daykart delivery partner app dashboard',
          textures: [
            {
              srcSet: `${daykartScreen2} 375w, ${daykartScreen2} 750w`,
              placeholder: daykartScreen2,
            },
            {
              srcSet: `${daykartScreen1} 375w, ${daykartScreen1} 750w`,
              placeholder: daykartScreen1,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="OXYIOT"
        description="Design and development of a mobile app for OXYIOT, enabling users to monitor and manage air quality through IoT device."
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${oxyiotLogin} 375w, ${oxyiotLogin} 750w`,
              placeholder: oxyiotLogin,
            },
            {
              srcSet: `${oxyiotDashboard} 375w, ${oxyiotDashboard} 750w`,
              placeholder: oxyiotDashboard,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Suraksha Sanket"
        description="A mobile application designed to enhance personal safety by providing quick access to emergency services and real-time location sharing."
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${helpLogin} 375w, ${helpLogin} 750w`,
              placeholder: helpLogin,
            },
            {
              srcSet: `${helpDashboard} 375w, ${helpDashboard} 750w`,
              placeholder: helpDashboard,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer/>
    </div>
  );
};
