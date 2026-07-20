'use client';

import { type CSSProperties } from 'react';
import {
  NextStepProvider,
  NextStepReact,
  useNextStep,
  type Tour,
} from 'nextstepjs';

/**
 * Isolated fixtures for GitHub issues #78 and #79.
 * Mirrored by nextstepjs-remix/app/routes/regression.tsx and driven by
 * e2e/shared/regression.ts.
 */

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

const regressionSteps: Tour[] = [
  {
    tour: 'issue-78',
    steps: [
      {
        title: 'Blocker coverage',
        content: <p>Click-blockers must cover the full scrollable page.</p>,
        selector: '#issue-78-target',
        side: 'right',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 8,
      },
    ],
  },
  {
    tour: 'issue-79',
    steps: [
      {
        title: 'Right-top alignment',
        content: <p>Card top-aligns to a near-top target and extends downward.</p>,
        selector: '#issue-79-target',
        side: 'right-top',
        showControls: true,
        showSkip: true,
        pointerPadding: 10,
        pointerRadius: 8,
      },
    ],
  },
];

function RegressionContent() {
  const { startNextStep } = useNextStep();

  return (
    <div style={{ position: 'relative', minHeight: 4000, padding: 16 }}>
      <div style={{ textAlign: 'center', marginBottom: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700 }}>NextStep regression fixtures</h1>
        <p style={{ marginTop: 8, color: '#4b5563' }}>Issues #78 and #79</p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16 }}>
          <button
            type="button"
            onClick={() => startNextStep('issue-78')}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              background: '#2563eb',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Start Issue 78 Tour
          </button>
          <button
            type="button"
            onClick={() => startNextStep('issue-79')}
            style={{
              padding: '8px 16px',
              borderRadius: 6,
              background: '#7c3aed',
              color: '#fff',
              cursor: 'pointer',
            }}
          >
            Start Issue 79 Tour
          </button>
        </div>
      </div>

      {/* Upper-viewport target on a tall page (issue #78). */}
      <div
        id="issue-78-target"
        style={{ ...target, position: 'absolute', top: 180, left: 40, width: 140, height: 48 }}
      >
        #78 target
      </div>

      {/* Probe in the band that used to be an interactive hole under the spotlight. */}
      <button
        id="issue-78-probe"
        type="button"
        style={{
          position: 'absolute',
          top: 280,
          left: 40,
          width: 160,
          height: 40,
          borderRadius: 6,
          border: '1px solid #dc2626',
          background: '#fee2e2',
          color: '#991b1b',
          cursor: 'pointer',
        }}
      >
        Should be blocked
      </button>

      {/* Near top-left nav-like target (issue #79). */}
      <div
        id="issue-79-target"
        style={{ ...target, position: 'absolute', top: 24, left: 16, width: 72, height: 36 }}
      >
        Home
      </div>
    </div>
  );
}

export default function RegressionPage() {
  return (
    <NextStepProvider>
      <NextStepReact steps={regressionSteps} scrollToTop={false}>
        <RegressionContent />
      </NextStepReact>
    </NextStepProvider>
  );
}
