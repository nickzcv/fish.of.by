import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Tabs,
  Tab,
} from 'carbon-components-react';
import { InfoSection, InfoCard } from '../../components/Info';
import Globe32 from '@carbon/icons-react/lib/globe/32';
import PersonFavorite32 from '@carbon/icons-react/lib/person--favorite/32';
import Application32 from '@carbon/icons-react/lib/application/32';

const props = {
  tabs: {
    selected: 0,
    triggerHref: '#',
    role: 'navigation',
  },
  tab: {
    href: '#',
    role: 'presentation',
    tabIndex: 0,
  },
};

const LandingPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width landing-page">
      <div className="bx--row landing-page__banner">
        <div className="bx--col-lg-16">
          <Breadcrumb noTrailingSlash aria-label="Page navigation">
            <BreadcrumbItem>
              <a href="/">Путеводитель рыбака</a>
            </BreadcrumbItem>
          </Breadcrumb>
          <h1 className="landing-page__heading">
            Рыбалка в Беларуси
          </h1>
        </div>
      </div>
      <div className="bx--row landing-page__r2">
        <div className="bx--col bx--no-gutter">
          <Tabs {...props.tabs} aria-label="Tab navigation">
            <Tab {...props.tab} label="Браславские озера">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-md-4 bx--col-lg-7">
                    <h2 className="landing-page__subheading">
                      Где порыбачить на Браславских озерах?
                    </h2>
                    <p className="landing-page__p">
                      <div>Рыбалка на озере Пагоща/Браславские озера.</div>

                      Пагошча — возера ў Браслаўскім раёне Віцебскай вобласьці. Знаходзіцца за 12 км на паўднёвы ўсход ад Браслава каля вёскі Пагошча. Належыць да групы Браслаўскіх азёр.
                    </p>
                    <p className="landing-page__p">
                    Лучшая рыбалка в Браслав. Дом на берегу озера. Камин, печь, свой подход к воде.
                    </p>
                    <Button>Подробнее</Button>
                  </div>
                  <div className="bx--col-md-4 bx--col-lg-9">
                    <img
                      className="landing-page__illo"
                      src={`${process.env.PUBLIC_URL}/home_banner.png`}
                      alt="Carbon illustration"
                    />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab {...props.tab} label="р. Березина">
              <div className="bx--grid bx--grid--no-gutter bx--grid--full-width">
                <div className="bx--row landing-page__tab-content">
                  <div className="bx--col-lg-16">
                    Rapidly build beautiful and accessible experiences. The
                    Carbon kit contains all resources you need to get started.
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </div>
      <InfoSection heading="The Principles" className="landing-page__r3">
        <InfoCard
          heading="Carbon is Open"
          body="It's a distributed effort, guided by the principles of the open-source movement. Carbon's users are also it's makers, and everyone is encouraged to contribute."
          icon={<PersonFavorite32 />}
        />
        <InfoCard
          heading="Carbon is Modular"
          body="Carbon's modularity ensures maximum flexibility in execution. It's components are designed to work seamlessly with each other, in whichever combination suits the needs of the user."
          icon={<Application32 />}
        />
        <InfoCard
          heading="Carbon is Consistent"
          body="Based on the comprehensive IBM Design Language, every element and component of Carbon was designed from the ground up to work elegantly together to ensure consistent, cohesive user experiences."
          icon={<Globe32 />}
        />
      </InfoSection>
    </div>
  );
};

export default LandingPage;
