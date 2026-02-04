import { useEffect, useState } from "react";

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const targetDate = new Date("2026-02-21T00:00:00");
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center group">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
        <div className="relative glass-card w-14 h-14 md:w-28 md:h-28 flex items-center justify-center border-primary/30">
          <span className="text-2xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70 font-montserrat tabular-nums">
            {value.toString().padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-2 md:mt-4 text-xs md:text-sm font-montserrat uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
    </div>
  );

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center items-center flex-nowrap overflow-x-auto space-x-3 md:space-x-6 px-2">
          <TimeUnit value={timeLeft.days} label="Days" />
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </section>
  );
};