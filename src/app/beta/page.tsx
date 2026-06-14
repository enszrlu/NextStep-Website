'use client';

import { useState, type CSSProperties } from 'react';
import {
  NextStepProvider,
  NextStepReact,
  useNextStep,
  type Tour,
} from 'nextstepjs';

/**
 * Isolated test page for the beta improvements (cardOffset, scrollOffset, selector
 * retry, side-swap room check, anchor-centered caret, arrowStyle). It mounts its
 * OWN NextStepProvider + NextStepReact so it never touches the live site's tours.
 * Inline styles keep it self-contained and responsive for the mobile E2E project.
 *
 * Mirrored by nextstepjs-remix/app/routes/beta.tsx and driven by e2e/shared/beta.ts.
 */

const ARROW_COLOR = 'rgb(255, 0, 64)';

const target: CSSProperties = {
  background: '#2563eb',
  color: '#fff',
  borderRadius: 8,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 12,
  fontWeight: 600,
};

const betaSteps: Tour[] = [
  {
    tour: 'beta',
    steps: [
      {
        title: 'Card offset',
        content: <p>A larger gap between the card and the spotlight.</p>,
        selector: '#beta-offset-target',
        side: 'bottom',
        cardOffset: 100,
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 8,
      },
      {
        title: 'Caret tracks anchor',
        content: <p>The caret points at the element center, not the card center.</p>,
        selector: '#beta-caret-target',
        side: 'bottom-right',
        showControls: true,
        showSkip: true,
        pointerPadding: 12,
        pointerRadius: 8,
      },
      {
        title: 'Scroll offset',
        content: <p>The target is kept clear of the fixed header.</p>,
        selector: '#beta-scroll-target',
        side: 'bottom',
        scrollOffset: 120,
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 8,
      },
      {
        title: 'Side with room',
        content: <p>A near-top target flips below where there is room.</p>,
        selector: '#beta-b3-target',
        side: 'top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 8,
      },
      {
        title: 'Async target',
        content: <p>This element renders late and is found via retry.</p>,
        selector: '#beta-async-target',
        side: 'bottom',
        selectorRetryAttempts: 20,
        selectorRetryDelay: 150,
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 8,
      },
    ],
  },
];

function BetaContent({ asyncMounted }: { asyncMounted: boolean }) {
  const { startNextStep } = useNextStep();

  return (
    <>
      {/* Fixed header to validate scrollOffset (B2). */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: 80,
          background: '#111827',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50,
        }}
      >
        Fixed header (80px)
      </div>

      <div style={{ paddingTop: 100, paddingBottom: 200, minHeight: 3000 }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 24, fontWeight: 700 }}>NextStep beta features</h1>
          <button
            type="button"
            onClick={() => startNextStep('beta')}
            style={{
              marginTop: 12,
              padding: '8px 16px',
              borderRadius: 6,
              background: '#2563eb',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Start Beta Tour
          </button>
        </div>

        {/* Near-top target for the side-room check (B3). */}
        <div
          id="beta-b3-target"
          style={{ ...target, position: 'absolute', top: 110, left: 16, width: 80, height: 40 }}
        >
          B3
        </div>

        <div
          id="beta-offset-target"
          style={{ ...target, position: 'absolute', top: 260, left: 24, width: 90, height: 48 }}
        >
          Offset
        </div>

        <div
          id="beta-caret-target"
          style={{
            ...target,
            position: 'absolute',
            top: 460,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 120,
            height: 48,
          }}
        >
          Caret
        </div>

        {asyncMounted && (
          <div
            id="beta-async-target"
            style={{ ...target, position: 'absolute', top: 700, left: 24, width: 100, height: 48 }}
          >
            Async
          </div>
        )}

        <div
          id="beta-scroll-target"
          style={{ ...target, position: 'absolute', top: 1900, left: 24, width: 120, height: 48 }}
        >
          Scroll
        </div>
      </div>
    </>
  );
}

export default function BetaPage() {
  const [asyncMounted, setAsyncMounted] = useState(false);

  return (
    <NextStepProvider>
      <NextStepReact
        steps={betaSteps}
        arrowStyle={{ color: ARROW_COLOR }}
        scrollToTop={false}
        onStepChange={(step) => {
          // Mount the async target shortly after reaching its step (index 4).
          if (step === 4) {
            setAsyncMounted(false);
            setTimeout(() => setAsyncMounted(true), 600);
          }
        }}
      >
        <BetaContent asyncMounted={asyncMounted} />
      </NextStepReact>
    </NextStepProvider>
  );
}
