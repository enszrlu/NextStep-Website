import { Tour } from 'nextstepjs';
import { MdInstallDesktop } from 'react-icons/md';
import { BiBlanket } from 'react-icons/bi';
import { PiStepsDuotone } from 'react-icons/pi';
import {
  GiAnchor,
  GiArcheryTarget,
  GiCampCookingPot,
  GiCoffeeBeans,
  GiFishingHook,
} from 'react-icons/gi';
import { FaNewspaper, FaRoute } from 'react-icons/fa';
import { HiDocument } from 'react-icons/hi2';
import Link from 'next/link';

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
        icon: <BiBlanket />,
        title: 'Cosy Wrapper',
        content: (
          <p>
            If you are using Pages Router, you need to wrap your app with the
            NextStepProvider and NextStep in your _app.tsx.
            <br />
            <br />
            Don't forget to update your next.config to enable esmExternals.
          </p>
        ),
        selector: '#tour1-step4-pagesrouter',
        side: 'right',
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
        // nextRoute: '/docs',
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
        side: 'right',
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
        // nextRoute: '/',
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
        icon: <FaNewspaper />,
        title: 'Newsletter',
        content: (
          <p>
            We are improving NextStep with React support, so you can use it with any
            framework. <br /> <br />
            Sign up to hear about our latest updates.
          </p>
        ),
        selector: '#newsletter-signup',
        side: 'top',
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
            <br />
            <br />
            ⭐️⭐️⭐️⭐️⭐️
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
    tour: 'demo',
    steps: [
      {
        icon: <>👋</>,
        title: 'Welcome to NextStep Demo',
        content: (
          <p>
            This demo shows how to use NextStep in a variety of scenarios.
            <br />
            <br />
            You can use buttons or arrow keys to navigate through the tour.
          </p>
        ),
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <GiAnchor />,
        title: 'Anchor to any element',
        content: (
          <p>
            You can anchor to any element in your app. Simply use the same id with step's
            selector.
          </p>
        ),
        selector: '#chart-1',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <GiAnchor />,
        title: 'Anchor to any side',
        content: (
          <p>
            You can place the card anywhere to selector. Simply change the side property
            of your step.
          </p>
        ),
        selector: '#chart-2',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        viewportID: 'dashboard-demo',
      },
      {
        icon: <FaRoute />,
        title: 'Route during the tour',
        content: (
          <p>
            You can route to different pages during the tour. Simply provide nextRoute and
            prevRoute in the step.
            <br />
            <br />
            Pressing "Next" will take you to the home page.
          </p>
        ),
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        nextRoute: '/',
      },
      {
        icon: <FaRoute />,
        title: 'Route during the tour',
        content: (
          <p>
            nextRoute brought you here from the demo page.
            <br />
            <br />
            Pressing "Next" will take you back to the demo page.
          </p>
        ),
        selector: '#hero-section',
        side: 'bottom',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        prevRoute: '/demo',
        nextRoute: '/demo',
      },
      {
        icon: <BiBlanket />,
        title: 'Default Viewport',
        content: (
          <p>
            NextStep uses document body as default viewport.
            <br />
            <br />
            You can change this using NextStepViewport. This will be especially useful
            when the element is in a scrollable area.
            <br />
            <br />
            See next two steps to see how NextStepViewport works.
            <br />
            <br />
            <Link className="text-primary" href="/docs" target="_blank">
              Docs{' '}
            </Link>
            for more details.
          </p>
        ),
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        prevRoute: '/',
      },
      {
        icon: <BiBlanket />,
        title: 'Default Viewport',
        content: <p>This is the default viewport. Scroll and see the results.</p>,
        selector: '#form-username',
        side: 'bottom',
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <BiBlanket />,
        title: 'Custom Viewport',
        content: (
          <p>
            This is with NextStepViewport. Scroll and see the results.
            <br />
            <br />
            As you can see selector sticks to the element even though it is in a
            scrollable area.
          </p>
        ),
        selector: '#form-username',
        side: 'bottom',
        showControls: true,
        showSkip: false,
        pointerPadding: 10,
        pointerRadius: 10,
        viewportID: 'form-demo',
      },
      {
        icon: <BiBlanket />,
        title: 'Custom Viewport',
        content: <p>Another example with both horizontal and vertical scroll.</p>,
        selector: '#product-3',
        side: 'bottom-right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
        viewportID: 'product-list',
      },
      {
        icon: <HiDocument />,
        title: 'Documentation',
        content: (
          <p>
            Check out the documentation to learn more about NextStep.
            <br />
            <br />
            <a className="text-primary" href="/docs">
              Check docs
            </a>{' '}
          </p>
        ),
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
    ],
  },
];

export default steps;
