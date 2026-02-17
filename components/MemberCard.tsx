
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Member } from '../types';

interface MemberCardProps {
	member: Member;
	index: number;
}

const MemberModal: React.FC<{ member: Member; onClose: () => void }> = ({ member, onClose }) => {
	// Close on Escape
	useEffect(() => {
		const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
		window.addEventListener('keydown', handler);
		return () => window.removeEventListener('keydown', handler);
	}, [onClose]);

	const roles = member.role.split(',').map((r) => r.trim());

	return ReactDOM.createPortal(
		<div
			className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
			onClick={onClose}
			style={{ backdropFilter: 'blur(8px)', background: 'rgba(10,4,24,0.75)' }}
		>
			{/* Modal card — stop propagation so clicking inside doesn't close */}
			<div
				className="relative w-full max-w-sm md:max-w-md rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(139,92,246,0.4)] border border-purple-500/30"
				style={{
					background: 'linear-gradient(160deg, #12042a 0%, #1e0640 60%, #0c0014 100%)',
					animation: 'modalIn 350ms cubic-bezier(0.22,1,0.36,1)',
				}}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close button */}
				<button
					onClick={onClose}
					className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full flex items-center justify-center bg-white/10 hover:bg-white/20 text-white text-sm font-bold transition-colors"
					aria-label="Close"
				>
					✕
				</button>

				{/* Top image — natural height so nothing is cropped */}
				<div className="relative w-full">
					<img
						src={member.additionalImage}
						alt={member.name}
						onError={(e) => {
							(e.target as HTMLImageElement).src = `https://placehold.co/400x600/1a0b2e/white?text=${member.name}`;
						}}
						className="w-full block object-contain"
					/>
					{/* gradient fade into card body */}
					<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#12042a] to-transparent" />
				</div>

				{/* Content */}
				<div className="px-7 pb-8 -mt-6 relative z-10">
					<h2 className="text-4xl font-black text-white tracking-tight mb-0.5">{member.name}</h2>
					<p className="text-purple-300 text-sm font-semibold mb-5 tracking-widest uppercase">{member.fullName}</p>

					<div className="w-12 h-0.5 bg-gradient-to-r from-purple-500 to-fuchsia-500 mb-5 rounded-full" />

					<p className="text-purple-200/70 text-xs uppercase tracking-[0.25em] font-bold mb-3">Roles</p>
					<div className="flex flex-wrap gap-2">
						{roles.map((r) => (
							<span
								key={r}
								className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border border-purple-500/40 bg-purple-600/20 text-purple-100"
								style={{ boxShadow: '0 0 8px rgba(139,92,246,0.3)' }}
							>
								{r}
							</span>
						))}
					</div>
				</div>

				{/* Bottom purple glow line */}
				<div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
			</div>

			<style>{`
				@keyframes modalIn {
					from { opacity: 0; transform: scale(0.92) translateY(16px); }
					to   { opacity: 1; transform: scale(1) translateY(0); }
				}
			`}</style>
		</div>,
		document.body
	);
};

const MemberCard: React.FC<MemberCardProps> = ({ member, index }) => {
	const [modalOpen, setModalOpen] = useState(false);

	const danceStyles = ['animate-dance-1', 'animate-dance-2', 'animate-dance-3', 'animate-dance-4'];
	const danceClass = danceStyles[index % danceStyles.length];

	return (
		<>
			<div
				className="relative group w-48 h-72 md:w-56 md:h-80 overflow-hidden rounded-2xl transition-all duration-500 hover:scale-110 hover:z-50 shadow-[0_0_20px_rgba(0,0,0,0.5)] cursor-pointer"
				style={{ animationDelay: `${member.delay}ms` }}
				onClick={() => setModalOpen(true)}
				onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setModalOpen(true); } }}
				role="button"
				tabIndex={0}
				aria-haspopup="dialog"
			>
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity" />

				{/* Dancing animated container */}
				<div className={`w-full h-full ${danceClass}`} style={{ animationDelay: `${member.delay}ms` }}>
					<img
						src={member.image}
						alt={member.name}
						onError={(e) => {
							(e.target as HTMLImageElement).src = `https://placehold.co/400x600/1a0b2e/white?text=${member.name}`;
						}}
						className="w-full h-full object-cover transition-all duration-700"
					/>
				</div>

				<div className="absolute bottom-0 left-0 right-0 p-5 z-20">
					<h3 className="text-2xl font-black text-white mb-0 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-tight">
						{member.name}
					</h3>
					<p className="text-[10px] text-purple-300 font-bold uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
						{member.fullName}
					</p>
				</div>

				{/* Neon Glow Border */}
				<div className="absolute inset-0 border-[3px] border-transparent group-hover:border-purple-500/50 rounded-2xl transition-all duration-500 pointer-events-none z-30 box-border" />
				<div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
			</div>

			{modalOpen && <MemberModal member={member} onClose={() => setModalOpen(false)} />}
		</>
	);
};

export default MemberCard;
