import flutterLogo from '~/assets/tech/Flutter.png';
import androidLogo from '~/assets/tech/Android Studio.png';
import nodeLogo from '~/assets/tech/Node.js.png';
import firebaseLogo from '~/assets/tech/Firebase.png';
import gitLogo from '~/assets/tech/Git.png';
import dartLogo from '~/assets/tech/Dart.png';
import awsLogo from '~/assets/tech/AWS.png';
import dockerLogo from '~/assets/tech/Docker.png';
import githubLogo from '~/assets/tech/Github.png';
import gradleLogo from '~/assets/tech/Gradle.png';
import javaLogo from '~/assets/tech/Java.png';
import kotlinLogo from '~/assets/tech/Kotlin.png';
import mongoDBLogo from '~/assets/tech/MongoDB.png';
import postgresLogo from '~/assets/tech/PostgresSQL.png';
import postmanLogo from '~/assets/tech/Postman.png';
import springLogo from '~/assets/tech/Spring.png';
import vsCodeLogo from '~/assets/tech/Visual Studio Code (VS Code).png';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Hi there" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      I'm Aditya Biswari Gupta, a Computer Science undergraduate currently pursuing my B.Tech
      at KIET Group of Institutions, Ghaziabad. I work primarily as a Flutter and Android developer, with
      hands-on experience building scalable mobile applications, backend-integrated systems,
      and IoT-driven solutions. My work spans UI/UX implementation, real-time data handling,
      and clean architecture practices.
    </Text>
    <Text className={styles.description} data-visible={visible} size="l" as="p">
      Outside of development, I actively participate in hackathons, contribute to open-source
      projects, and explore emerging technologies like backend systems and blockchain. I'm
      always open to collaborating on impactful projects, so feel free to reach out if you'd
      like to build something meaningful together.
    </Text>
  </Fragment>
);

const techStackCategories = [
  {
    category: 'Frontend & Mobile',
    technologies: [
      { name: 'Flutter', logo: flutterLogo, color: '#02569B' },
      { name: 'Android', logo: androidLogo, color: '#3DDC84' },
      { name: 'Dart', logo: dartLogo, color: '#0175C2' },
      { name: 'Kotlin', logo: kotlinLogo, color: '#0095D5' },
    ]
  },
  {
    category: 'Backend',
    technologies: [      
      { name: 'Java', logo: javaLogo, color: '#007396' },
      { name: 'Spring', logo: springLogo, color: '#6DB33F' },
      { name: 'Node.js', logo: nodeLogo, color: '#339933' },
    ]
  },
  {
    category: 'Database & Cloud',
    technologies: [
      { name: 'AWS', logo: awsLogo, color: '#FF9900' },
      { name: 'Firebase', logo: firebaseLogo, color: '#FFCA28' },
      { name: 'MongoDB', logo: mongoDBLogo, color: '#47A248' },
      { name: 'PostgreSQL', logo: postgresLogo, color: '#336791' },
    ]
  },
  {
    category: 'Tools & DevOps',
    technologies: [
      { name: 'Git', logo: gitLogo, color: '#F05032' },
      { name: 'Docker', logo: dockerLogo, color: '#2496ED' },
      { name: 'GitHub', logo: githubLogo, color: '#181717' },
      { name: 'VS Code', logo: vsCodeLogo, color: '#007ACC' },
      { name: 'Gradle', logo: gradleLogo, color: '#02303A' },
      { name: 'Postman', logo: postmanLogo, color: '#FF6C37' },
    ]
  }
];

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => {
          return (
            <div className={styles.contentWrapper} ref={nodeRef}>
              <div className={styles.content}>
                <div className={styles.column}>
                  <div className={styles.tag} aria-hidden>
                    <Divider
                      notchWidth="64px"
                      notchHeight="8px"
                      collapsed={!visible}
                      collapseDelay={1000}
                    />
                    <div className={styles.tagText} data-visible={visible}>
                      About me
                    </div>
                  </div>
                  <ProfileText visible={visible} titleId={titleId} />
                  <Button
                    secondary
                    className={styles.button}
                    data-visible={visible}
                    href="/contact"
                    icon="send"
                  >
                    Send me a message
                  </Button>
                </div>
                <div className={styles.column}>
                  <div className={styles.techStackBox} data-visible={visible}>
                    <Heading className={styles.techStackTitle} level={4}>
                      <DecoderText text="Tech Stack" start={visible} delay={800} />
                    </Heading>
                    <div className={styles.techStackCategories}>
                      {techStackCategories.map((category) => (
                        <div key={category.category} className={styles.techCategory}>
                          <h5 className={styles.categoryTitle}>{category.category}</h5>
                          <div className={styles.techStackGrid}>
                            {category.technologies.map((tech) => (
                              <div
                                key={tech.name}
                                className={styles.techItem}
                                style={{ '--accent-color': tech.color }}
                              >
                                <div className={styles.techIconWrapper}>
                                  <img
                                    src={tech.logo}
                                    alt={tech.name}
                                    className={styles.techIcon}
                                  />
                                </div>
                                <span className={styles.techName}>{tech.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.resumeWrapper} data-visible={visible}>
                <Button
                  className={styles.resumeButton}
                  href="https://drive.google.com/file/d/105i_bt85ExQ1Y10V10ZT6FmU1mAs01mp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  icon="arrowRight"
                  iconHoverShift
                >
                  View Resume / CV
                </Button>
              </div>
            </div>
          );
        }}
      </Transition>
    </Section>
  );
};