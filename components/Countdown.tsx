
import React, { useState, useEffect } from 'react';
import { TARGET_DATE } from '../constants';
import { TimeLeft } from '../types';

const Countdown: React.FC = () => {
	const calculateTimeLeft = (): TimeLeft => {
		const difference = +TARGET_DATE - +new Date();
		let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
		return () => clearInterval(timer);
	}, []);

	const TimeUnit = ({ value, label }: { value: number; label: string }) => (
		<div className="flex flex-col items-center px-4 md:px-8">
			<div className="text-4xl md:text-7xl font-black text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
				{value.toString().padStart(2, '0')}
			</div>
			<div className="text-[10px] md:text-sm uppercase tracking-[0.3em] text-purple-400 font-bold mt-2">
				{label}
			</div>
		</div>
	);

	return (
		<div className="flex justify-center items-center divide-x divide-purple-500/20 py-10 bg-black/30 backdrop-blur-sm rounded-3xl border border-white/5 shadow-2xl">
			<TimeUnit value={timeLeft.days} label="Days" />
			<TimeUnit value={timeLeft.hours} label="Hours" />
			<TimeUnit value={timeLeft.minutes} label="Minutes" />
			<TimeUnit value={timeLeft.seconds} label="Seconds" />
		</div>
	);
};

export default Countdown;
