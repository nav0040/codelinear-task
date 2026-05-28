"use client";

import { Heading, Text } from "@/components/atoms/Typography";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center gap-4 px-4 text-center"
      role="alert"
    >
      <Heading as="h1" level="h3">
        Something went wrong
      </Heading>
      <Text variant="small" className="max-w-md">
        {error.message || "An unexpected error occurred."}
      </Text>
      <Button type="button" variant="bankingGradient" onClick={reset}>
        Try again
      </Button>
    </div>
  );
}
