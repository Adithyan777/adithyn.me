import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Loader2, AlertCircle } from "lucide-react";
import { Button } from "./ui/button";

interface LoadingDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    error?: string | null;
    onRetry?: () => void;
    demoUrl?: string;
    projectTitle?: string;
}

export function LoadingDialog({ open, onOpenChange, error, onRetry, demoUrl, projectTitle }: LoadingDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md max-w-[95%] p-4 sm:p-6">
                <div className="flex flex-col items-center gap-3 sm:gap-4 py-4 sm:py-8">
                    {error ? (
                        <>
                            <AlertCircle className="h-6 w-6 sm:h-8 sm:w-8 text-destructive" />
                            <div className="text-center space-y-1 sm:space-y-2">
                                <h3 className="font-semibold text-base sm:text-lg">Error warming up the server</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground px-2">
                                    {error}. You can try visiting the site directly or retry warming up.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-2 justify-center mt-3 sm:mt-4">
                                    <Button variant="default" onClick={onRetry} className="w-full sm:w-auto">
                                        Retry
                                    </Button>
                                    <Button variant="outline" asChild className="w-full sm:w-auto">
                                        <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                                            Visit Directly
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            <Loader2 className="h-6 w-6 sm:h-8 sm:w-8 animate-spin" />
                            <div className="text-center space-y-1 sm:space-y-2">
                                <h3 className="font-semibold text-base sm:text-lg">Waking up the server...</h3>
                                <p className="text-xs sm:text-sm text-muted-foreground px-2">
                                    {projectTitle} is hosted on a free tier which requires a cold boot. 
                                    We're warming up the server for you. This may take up to 40 seconds.
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}