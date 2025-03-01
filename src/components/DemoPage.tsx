'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import FormDemo from './demo/DemoForm';
import ProductListDemo from './demo/ProductList';
import DashboardDemo from './demo/Dashboard';
import { Button } from './ui/button';
import { DemoModal } from './demo/DemoModal';

import { NextStepViewport, useNextStep } from 'nextstepjs';

export default function DemoPage() {
  const { startNextStep } = useNextStep();

  const onClickHandler = (tourName: string) => {
    startNextStep(tourName);
  };

  return (
    <div className="bg-background">
      <main className="container mx-auto p-2 lg:p-4 space-y-4">
        {/* Demo NextStep */}
        {/* Header */}
        <header className="text-center py-4">
          <h1 className="text-3xl font-bold">Welcome to the Demo Page</h1>
          <p className="text-muted-foreground mt-2">
            Here you can see NextStep in action in a variety of scenarios.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button variant="default" onClick={() => onClickHandler('demo')}>
              Start the Tour
            </Button>

            <DemoModal />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div id="form-section" className="col-span-1 overflow-y-auto">
            <Card className="h-[400px]">
              <CardHeader>
                <CardTitle>Scrollable Form - Vertical</CardTitle>
              </CardHeader>
              <CardContent className="h-[300px]">
                <ScrollArea className="h-[300px] w-full">
                  <NextStepViewport id="form-demo">
                    <FormDemo />
                  </NextStepViewport>
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </CardContent>
            </Card>
          </div>

          <div id="product-section" className="col-span-1">
            <Card className="h-[400px]">
              <CardHeader>
                <CardTitle>Scrollable Content - Horizontal and Vertical</CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[300px] w-full">
                  <NextStepViewport id="product-list">
                    <ProductListDemo />
                  </NextStepViewport>
                  <ScrollBar orientation="horizontal" />
                  <ScrollBar orientation="vertical" />
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>

        <div id="charts-section" className="w-full ">
          <Card>
            <CardHeader>
              <CardTitle>Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="w-full">
                <NextStepViewport id="dashboard-demo">
                  <DashboardDemo />
                </NextStepViewport>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
