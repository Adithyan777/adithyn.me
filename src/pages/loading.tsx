import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchWithTimeout } from '@/lib/fetch-with-timeout';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

// Add allowed domains list
const ALLOWED_URL = [
  'https://biasbalance.onrender.com/'
];

export function LoadingPage() {
  const [searchParams] = useSearchParams();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const demoUrl = searchParams.get('url');
  const projectTitle = searchParams.get('title');

  const isValidUrl = (url: string | null): boolean => {
    if (!url) return false;
    try {
        if (ALLOWED_URL.includes(url)) {
            return true;
        }
        else {
            return false;
        }
    } catch {
      return false;
    }
  };

  const initiateFetch = async () => {
    if (!demoUrl) {
      setError('No URL provided');
      setIsLoading(false);
      return;
    }

    if (!isValidUrl(demoUrl)) {
      setError('Invalid or unauthorized URL');
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      await fetchWithTimeout(demoUrl);
      window.location.href = demoUrl;
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    initiateFetch();
  }, [demoUrl]);

  const handleRetry = () => {
    initiateFetch();
  };

  const handleBack = () => {
    window.close(); // Close the tab instead of navigating back
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-background">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">
            {error ? 'Connection Error' : `Loading ${projectTitle}`}
          </h1>
          <p className="text-muted-foreground text-sm">
            Attempting to connect to:
          </p>
          <p className="text-sm font-mono bg-secondary/30 p-2 rounded-md break-all">
            {demoUrl}
          </p>
        </div>

        {!error && isLoading && (
          <div className="space-y-6">
            <div className="flex justify-center">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Cold starting the application... This may take up to a minute.
              </p>
              <div className="bg-secondary/20 p-4 rounded-lg space-y-2">
                <p className="text-sm text-muted-foreground">
                  This project is hosted on a free-tier service that automatically spins down after periods of inactivity to conserve resources.
                </p>
                <p className="text-sm text-muted-foreground">
                  We're currently reactivating the server, and it should be ready shortly. This happens only on the first visit after inactivity.
                </p>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div className="space-y-4">
            <div className="p-4 bg-destructive/10 text-destructive rounded-md">
              <p>{error}</p>
            </div>
            <div className="flex gap-4 justify-center">
              <Button onClick={handleRetry}>Retry Connection</Button>
              <Button variant="outline" onClick={handleBack}>
                Close Tab
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}