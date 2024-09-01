import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'User-friendly',
    Img: require('@site/static/img/man.png').default,
    description: (
      <>
        Our documentation is written in clear and concise language making it accessible to users of all technical levels.
      </>
    ),
  },
  {
    title: 'Step-by-step guides',
    Img: require('@site/static/img/business.png').default,
    description: (
      <>
        Follow our user guides to start with SecureVault quickly.
      </>
    ),
  },
  {
    title: 'Interactive resources',
    Img: require('@site/static/img/chess.png').default,
    description: (
      <>
         Use our interactive materials, such as checklists and practical exercises, to learn more about password management best practices.
      </>
    ),
  },
];

function Feature({title, Img, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={Img} alt={title} className={styles.featureImg} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
