"use client";

import { Button } from '@heroui/button';
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Что-то пошло не так!</h2>
      <Button
        onPress={
          () => reset()
        }
      >
        Попробовать еще раз
      </Button>
    </div>
  );
}
