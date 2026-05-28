import { Heading, Text } from "@/components/atoms/Typography";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center">
      <Heading as="h1" level="h2">
        404 — Page not found
      </Heading>
      <Text variant="small" className="max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </Text>
      <Button href="/" variant="bankingGradient">
        Back to home
      </Button>
    </div>
  );
}
