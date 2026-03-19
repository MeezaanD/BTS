
import { Member } from './types';

export const TARGET_DATE = new Date('2026-03-20T06:00:00');

export const BTS_MEMBERS: Member[] = [
  { id: 'rm', name: 'RM', fullName: 'Kim Namjoon', image: '/members/member-rm.jpg', additionalImage: '/members/RM-2.jpg', role: 'Leader, Main Rapper', delay: 0 },
  { id: 'jin', name: 'Jin', fullName: 'Kim Seokjin', image: '/members/member-jin.jpg', additionalImage: '/members/Jin-2.jpg', role: 'Sub-Vocalist, Visual', delay: 150 },
  { id: 'suga', name: 'SUGA', fullName: 'Min Yoongi', image: '/members/member-suga.jpg', additionalImage: '/members/Suga-2.jpg', role: 'Lead Rapper, Producer', delay: 300 },
  { id: 'jhope', name: 'j-hope', fullName: 'Jung Hoseok', image: '/members/member-jhope.jpg', additionalImage: '/members/J-Hope-2.jpg', role: 'Main Dancer, Sub-rapper, Sub-Vocalist', delay: 450 },
  { id: 'jimin', name: 'Jimin', fullName: 'Park Jimin', image: '/members/member-jimin.jpg', additionalImage: '/members/Jimin-2.jpg', role: 'Main Dancer , Lead Vocalist', delay: 600 },
  { id: 'v', name: 'V', fullName: 'Kim Taehyung', image: '/members/member-v.jpg' , additionalImage:'/members/V-2.jpg' , role:'Lead Dancer, Vocalist, Visual' , delay :750 },
  { id: 'jungkook', name: 'Jungkook', fullName: 'Jeon Jungkook', image: '/members/member-jk.jpg', additionalImage: '/members/JK-2.jpg', role: 'Main Vocalist, Lead Dancer, Sub-rapper, Center, Maknae', delay: 900 },
];

export const ARMY_COLORS = {
	primary: '#8b5cf6', // Violet
	secondary: '#d946ef', // Fuchsia
	background: '#0c0014',
	accent: '#facc15' // Gold
};
