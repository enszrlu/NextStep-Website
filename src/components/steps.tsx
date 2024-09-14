import { Tour } from 'nextstepjs';
import { MdInstallDesktop } from 'react-icons/md';
import { BiBlanket } from 'react-icons/bi';
import { PiStepsDuotone } from 'react-icons/pi';
import {
  GiArcheryTarget,
  GiCampCookingPot,
  GiCoffeeBeans,
  GiFishingHook,
} from 'react-icons/gi';

const steps: Tour[] = [
  {
    tour: 'firsttour',
    steps: [
      {
        icon: <>👋</>,
        title: 'Welcome to NextStep',
        content: (
          <p>
            Onboarding never been easier! This is how card looks like without selector.
            <br />
            <br />
            You can use buttons or arrow keys to navigate through the tour.
          </p>
        ),
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🚀</>,
        title: 'Technologies used',
        content: (
          <p>NextStep is built with Next.js, TailwindCSS, Framer Motion and Radix UI.</p>
        ),
        selector: '#tour1-step2',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <MdInstallDesktop />,
        title: 'How to use NextStep',
        content: <p>Install NextStep using your favorite package manager.</p>,
        selector: '#tour1-step3',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 350,
        pointerRadius: 10,
      },
      {
        icon: <BiBlanket />,
        title: 'Cosy Wrapper',
        content: (
          <p>
            Simply wrap your app with the NextStepProvider and NextStep in your global
            layout. Add steps to NextStep.
            <br />
            <br />
            If you want localization, don&apos;t forget to choose correct steps array per
            locale.
          </p>
        ),
        selector: '#tour1-step4',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <PiStepsDuotone />,
        title: 'One step at a time',
        content: (
          <p>
            Create your steps array. See{' '}
            <a className="text-primary" href="/docs" target="_blank">
              docs
            </a>{' '}
            for more details.
          </p>
        ),
        selector: '#tour1-step5',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: '/docs',
      },
      {
        icon: <GiArcheryTarget />,
        title: '"Çok Rahat Çok Profesyonel", like Turkish olympic shooter',
        content: (
          <>
            You can target any element with easy, simply use same id with step's selector.
          </>
        ),
        selector: '#tour1-step6',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <GiFishingHook />,
        title: 'We hook you up',
        content: (
          <>
            You can control NextStep with ease. Simply use{' '}
            <span className="font-bold">useNextStep</span> hook.
            <br />
            <br />
            <a className="text-primary" href="/docs" target="_blank">
              Check docs
            </a>{' '}
            for more details.
          </>
        ),
        selector: '#tour1-step7',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: '/',
      },
      {
        icon: <GiCampCookingPot />,
        title: 'For cookers',
        content: (
          <>
            NextStep lets you use your own Card component.
            <br />
            <br />
            Create it with your favorite framework. We recommend you reviewing{' '}
            <a className="text-primary" href="/docs" target="_blank">
              example implementation
            </a>
            .
          </>
        ),
        selector: '#tour1-step8',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <GiCoffeeBeans />,
        title: 'Support the developer',
        content: <>If you like NextStep, please support the developer.</>,
        selector: '#tour1-step9',
        side: 'bottom-right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>🎉🎉🎉</>,
        title: 'Thats it!',
        content: (
          <>
            Don't forget to leave a star on{' '}
            <a
              href="https://github.com/enszrlu/NextStep"
              target="_blank"
              className="text-primary"
            >
              GitHub
            </a>
            !
          </>
        ),
        side: 'top',
        pointerPadding: 10,
        pointerRadius: 10,
        showControls: true,
        showSkip: false,
      },
    ],
  },
  {
    tour: 'secondtour',
    steps: [
      {
        icon: <>👋👋</>,
        title: 'Second tour, Step 1',
        content: <>Second tour, first step!</>,
        selector: '#nextstep-step1',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: '/foo',
        prevRoute: '/bar',
      },
    ],
  },
];

export default steps;
