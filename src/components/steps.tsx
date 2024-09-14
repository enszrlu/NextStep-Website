import { Tour } from 'nextstep';
import { MdInstallDesktop } from 'react-icons/md';

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
        icon: <MdInstallDesktop />,
        title: 'Tour 1, Step 4',
        content: <>First tour, fourth step</>,
        selector: '#tour1-step4',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <MdInstallDesktop />,
        title: 'Tour 1, Step 5',
        content: <>First tour, fifth step</>,
        selector: '#tour1-step5',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <MdInstallDesktop />,
        title: 'Tour 1, Step 6',
        content: <>First tour, sixth step</>,
        selector: '#tour1-step6',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <MdInstallDesktop />,
        title: 'Tour 1, Step 7',
        content: <>First tour, seventh step</>,
        selector: '#tour1-step7',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>👋👋👋👋👋👋👋👋</>,
        title: 'Tour 1, Step 8',
        content: <>First tour, eighth step</>,
        selector: '#tour1-step8',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>👋👋👋👋👋👋👋👋👋</>,
        title: 'Tour 1, Step 9',
        content: <>First tour, ninth step</>,
        selector: '#tour1-step9',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 10,
      },
      {
        icon: <>👋👋👋👋👋👋👋👋👋👋</>,
        title: 'Tour 1, Step 10',
        content: <>First tour, tenth step</>,
        side: 'bottom',
        pointerPadding: 10,
        pointerRadius: 10,
        showControls: false,
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
