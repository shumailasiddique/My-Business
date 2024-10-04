import React from 'react';
import { useTranslation } from 'react-i18next';
const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h3>{t('AboutPageHeading')}</h3>
      <p>{t('AboutPageHeading')}</p>
    </div>
  );
};



export default About;
