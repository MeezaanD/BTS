
import React from 'react';
import { Member } from '../types';

interface MemberCardProps {
	member: Member;
	index: number;
}

const MemberCard: React.FC<MemberCardProps> = ({ member, index }) => {
	// Assign a specific dance style based on index to create variety
	const danceStyles = ['animate-dance-1', 'animate-dance-2', 'animate-dance-3', 'animate-dance-4'];
	const danceClass = danceStyles[index % danceStyles.length];

	return (
		<div
			className="relative group w-48 h-72 md:w-56 md:h-80 overflow-hidden rounded-2xl transition-all duration-500 hover:scale-110 hover:z-50 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
			style={{ animationDelay: `${member.delay}ms` }}
		>
			<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10 opacity-90 group-hover:opacity-70 transition-opacity" />

			{/* "Dancing" animated container */}
			<div className={`w-full h-full ${danceClass}`} style={{ animationDelay: `${member.delay}ms` }}>
				<img
					src={member.image}
					alt={member.name}
					onError={(e) => {
						// Fallback for missing local images during development
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
	);
};

export default MemberCard;
