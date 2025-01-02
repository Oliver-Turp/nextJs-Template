import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function useRedirectAfterSomeSeconds(redirectTo, seconds = 5) {
  const [secondsRemaining, setSecondsRemaining] = useState(seconds);
  const router = useRouter();

  useEffect(() => {
    if (secondsRemaining === 0 && redirectTo !== router.pathname) router.back();

    const timer = setTimeout(() => {
      setSecondsRemaining((prevSecondsRemaining) => prevSecondsRemaining - 1);
      if (secondsRemaining === 1 && redirectTo !== router.pathname) {
        // Log the type and value of redirectTo
        console.log('redirectTo:', redirectTo, 'type:', typeof redirectTo);
        if (typeof redirectTo === 'string') {
          router.push(redirectTo);
        } else {
          console.error('redirectTo must be a string');
        }
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [router, secondsRemaining, redirectTo]);

  return { secondsRemaining };
}