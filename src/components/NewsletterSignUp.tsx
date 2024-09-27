import { toast } from '@/hooks/use-toast';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

function NewsletterSignUp() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email }),
      });

      toast({
        title: 'Newsletter subscribed',
        variant: 'default',
      });

      setEmail('');
    } catch (error) {
      toast({
        title: 'Failed to subscribe',
        variant: 'destructive',
      });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="text-center max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardDescription>
            We are improving NextStep with CSS and React support, so you can use it with
            any framework. <br /> <br />
            Sign up to hear about our latest updates:
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewsletterSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default NewsletterSignUp;
