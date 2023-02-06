"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const time = 5;

export default function NotFound() {
  const router = useRouter();
  const [timer, setTimer] = useState(time);

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 5000);

    const timerPlay = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timerPlay);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <html>
      <head></head>
      <body>
        <h2>요청하신 페이지는 존재하지 않습니다.</h2>
        <p>{timer}초후, 홈으로 이동합니다. </p>
      </body>
    </html>
  );
}
