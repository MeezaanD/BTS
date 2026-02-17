
import React from 'react';
import { BTS_MEMBERS } from './constants';
import { ArmyMessage } from './types';
import MemberCard from './components/MemberCard';
import Countdown from './components/Countdown';

const App: React.FC = () => {
	const message: ArmyMessage = {
		text: "The stars shine brightest in the darkest nights. We will wait under this purple sky until we meet again. 💜",
		author: "ARMY Heart"
	};

	const stars = Array.from({ length: 80 }).map((_, i) => ({
		id: i,
		top: `${Math.random() * 100}%`,
		left: `${Math.random() * 100}%`,
		size: `${Math.random() * 2 + 1}px`,
		delay: `${Math.random() * 5}s`,
	}));

	return (
		<div className="min-h-screen relative overflow-x-hidden pb-24">
			{/* Background & Lighting */}
			<div className="fixed inset-0 bg-gradient-to-br from-[#0c0014] via-[#120524] to-[#0c0014] z-[-3]" />
			<div className="stage-light left-[-10vw] animate-pulse-subtle" style={{ animationDuration: '8s' }} />
			<div className="stage-light right-[-10vw] bottom-0 animate-pulse-subtle" style={{ animationDuration: '10s', animationDelay: '2s' }} />

			<div className="fixed inset-0 z-[-1]">
				{stars.map((star) => (
					<div
						key={star.id}
						className="star"
						style={{
							top: star.top,
							left: star.left,
							width: star.size,
							height: star.size,
							animation: `star-twinkle ${Math.random() * 3 + 2}s infinite ${star.delay}`,
						}}
					/>
				))}
			</div>

			{/* Header */}
			<header className="pt-24 pb-12 px-4 text-center">
				<div className="inline-block px-5 py-1.5 mb-8 border border-purple-500/30 rounded-full bg-purple-950/30 backdrop-blur-sm">
					<span className="text-purple-300 text-[10px] font-black tracking-[0.4em] uppercase">The Reunion Countdown</span>
				</div>
				<h1 className="text-6xl md:text-9xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-500 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] font-display">
					BTS 2026
				</h1>
				<p className="text-xl md:text-3xl text-purple-100/70 font-light tracking-[0.2em] max-w-3xl mx-auto italic font-display">
					"Our path is still long and beautiful."
				</p>
			</header>

			{/* Countdown + Album Pre-save — unified card */}
			<section className="container mx-auto px-4 mb-24">
				<div className="max-w-4xl mx-auto animate-float">
					<div className="relative rounded-[2rem] bg-black/40 border border-purple-500/20 backdrop-blur-xl overflow-hidden shadow-2xl">
						{/* top / bottom glow lines */}
						<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
						<div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />

						<div className="flex flex-col md:flex-row items-stretch">

							{/* ── Left: album cover + pre-save ── */}
							<div className="flex-shrink-0 flex flex-col items-center justify-center gap-7 px-10 pt-12 pb-10 md:w-64 md:py-14">
								{/* Album art */}
								<div
									style={{ transform: 'rotate(-4deg)', filter: 'drop-shadow(0 0 28px rgba(220,38,38,0.5)) drop-shadow(0 10px 28px rgba(0,0,0,0.7))' }}
									className="relative"
								>
									<div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-red-500/30 via-purple-500/20 to-fuchsia-500/20 blur-lg" />
									<img
										src="/album/arirang-cover.jpg"
										alt="BTS – Arirang album cover"
										className="relative w-40 h-40 rounded-2xl object-cover border border-white/10 shadow-2xl"
									/>
								</div>

								{/* Pre-save */}
								<div className="text-center">
									<div className="inline-block px-4 py-1 mb-4 border border-purple-500/20 rounded-full bg-purple-950/30 backdrop-blur-sm">
										<span className="text-purple-300/60 text-[9px] font-black tracking-[0.4em] uppercase">Pre-save Now</span>
									</div>
									<div className="flex gap-4 justify-center">
										<a href="https://open.spotify.com/prerelease/1DcxHW214MCDxXju71RbvX" target="_blank" rel="noopener noreferrer" aria-label="Pre-save on Spotify" className="transition-all duration-300 hover:scale-110 hover:opacity-70">
											<img src="/Icons/spotify.svg" alt="Spotify" className="w-9 h-9" />
										</a>
										<a href="https://music.apple.com/us/album/arirang/1868862375" target="_blank" rel="noopener noreferrer" aria-label="Pre-add on Apple Music" className="transition-all duration-300 hover:scale-110 hover:opacity-70">
											<img src="/Icons/apple-music.svg" alt="Apple Music" className="w-9 h-9" />
										</a>
									</div>
								</div>
							</div>

							{/* ── Vertical divider ── */}
							<div className="hidden md:block w-px self-stretch bg-gradient-to-b from-transparent via-purple-500/30 to-transparent mx-0" />
							{/* Mobile horizontal divider */}
							<div className="md:hidden h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

							{/* ── Right: album identity + countdown ── */}
							<div className="flex-1 min-w-0 flex flex-col justify-center text-center py-12 px-10 md:pl-10 md:pr-12">
								{/* Pill label matching header style */}
								<div className="self-center inline-block px-4 py-1 mb-6 border border-purple-500/30 rounded-full bg-purple-950/30 backdrop-blur-sm">
									<span className="text-purple-300 text-[9px] font-black tracking-[0.4em] uppercase">New Album</span>
								</div>
								<h2 className="text-5xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-100 to-purple-400 mb-2">ARIRANG</h2>
								<p className="text-purple-300/40 text-[10px] tracking-[0.35em] uppercase mb-10">March 20, 2026</p>
								<Countdown />
							</div>

						</div>
					</div>
				</div>
			</section>

			{/* Dance Stage */}
			<section className="container mx-auto px-4 mb-32">
				<h2 className="text-center text-purple-400 text-xs font-black tracking-[0.5em] uppercase mb-16 opacity-50">Stage Presence</h2>
				<div className="flex flex-col items-center gap-4 md:gap-10">
					{/* Row 1 — first 4 members */}
					<div className="flex flex-wrap justify-center gap-4 md:gap-10">
						{BTS_MEMBERS.slice(0, 4).map((member, idx) => (
							<MemberCard key={member.id} member={member} index={idx} />
						))}
					</div>
					{/* Row 2 — last 3 members */}
					<div className="flex flex-wrap justify-center gap-4 md:gap-10">
						{BTS_MEMBERS.slice(4).map((member, idx) => (
							<MemberCard key={member.id} member={member} index={idx + 4} />
						))}
					</div>
				</div>
			</section>

			{/* Daily Encouragement */}
			<section className="container mx-auto px-4">
				<div className="max-w-3xl mx-auto p-10 md:p-16 rounded-[2rem] bg-black/40 border border-white/10 backdrop-blur-xl relative overflow-hidden group shadow-2xl">
					<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

					<div className="relative z-10 text-center">
						<div className="w-12 h-12 mb-8 mx-auto border-2 border-purple-500/50 rounded-full flex items-center justify-center">
							<div className="w-2 h-2 bg-purple-400 rounded-full animate-ping" />
						</div>

						<blockquote className="text-2xl md:text-3xl font-light text-white leading-snug mb-10 font-display">
							{message.text}
						</blockquote>
						<div className="flex flex-col items-center">
							<p className="text-purple-400 font-black tracking-[0.3em] uppercase text-xs">A Message from {message.author}</p>
						</div>
					</div>
				</div>
			</section>

			<footer className="mt-32 py-12 text-center">
				<p className="text-[10px] text-purple-500/40 tracking-[0.8em] uppercase font-black">
					Apobangpo • Bulletproof For Life
				</p>
			</footer>
		</div>
	);
};

export default App;
