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
    title: 'RESTful API',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        munesky APIはREST APIを使用しています。そのため、簡単に作成・取得・削除が可能です。
      </>
    ),
  },
  {
    title: 'Free to Use',
    Svg: require('@site/static/img/free.svg').default,
    description: (
      <>
        APIの使用料は無料です。
      </>
    ),
  },
  {
    title: 'Authorization',
    Svg: require('@site/static/img/lock.svg').default,
    description: (
      <>
        ユーザー情報を使用するため、認証を必要としています。
        認証トークンはログイン後に取得できます。
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img"/>
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
