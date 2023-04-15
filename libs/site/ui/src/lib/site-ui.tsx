import styles from './site-ui.module.css';

/* eslint-disable-next-line */
export interface SiteUiProps {}

export function SiteUi(props: SiteUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SiteUi!</h1>
    </div>
  );
}

export default SiteUi;
