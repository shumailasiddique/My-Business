import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('HomeWelcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
};

export default Home;
