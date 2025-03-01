'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useModal } from '@/contexts/ModalContext';

export function DemoModal() {
  const { isModalOpen, openModal, closeModal } = useModal();

  const handleOpenChange = (open: boolean) => {
    if (open) {
      openModal();
    } else {
      closeModal();
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button variant="outline">Open Modal Demo</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle id="modal-title">Modal Example</DialogTitle>
          <DialogDescription id="modal-description">
            This modal demonstrates how NextStep can target elements within modals, making
            it perfect for complex onboarding flows.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-4">
            <div id="modal-content" className="p-4 border rounded-md">
              <h3 className="font-medium mb-2">Important Information</h3>
              <p>
                NextStep can highlight and explain UI elements even inside modals, making
                it perfect for complex onboarding flows.
              </p>
            </div>
            <Button id="modal-button" variant="secondary">
              Example Button
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
