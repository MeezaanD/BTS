
import { Member } from './types';

export const TARGET_DATE = new Date('2026-03-20T00:00:00');

export const BTS_MEMBERS: Member[] = [
  { id: 'rm', name: 'RM', fullName: 'Kim Namjoon', image: '/members/member-rm.jpg', delay: 0 },
  { id: 'jin', name: 'Jin', fullName: 'Kim Seokjin', image: '/members/member-jin.jpg', delay: 150 },
  { id: 'suga', name: 'SUGA', fullName: 'Min Yoongi', image: '/members/member-suga.jpg', delay: 300 },
  { id: 'jhope', name: 'j-hope', fullName: 'Jung Hoseok', image: '/members/member-jhope.jpg', delay: 450 },
  { id: 'jimin', name: 'Jimin', fullName: 'Park Jimin', image: '/members/member-jimin.jpg', delay: 600 },
  { id: 'v', name: 'V', fullName: 'Kim Taehyung', image: '/members/member-v.jpg', delay: 750 },
  { id: 'jungkook', name: 'Jungkook', fullName: 'Jeon Jungkook', image: '/members/member-jk.jpg', delay: 900 },
];

export const ARMY_COLORS = {
	primary: '#8b5cf6', // Violet
	secondary: '#d946ef', // Fuchsia
	background: '#0c0014',
	accent: '#facc15' // Gold
};
