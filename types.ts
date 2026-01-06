
export interface Member {
  id: string;
  name: string;
  fullName: string;
  image: string;
  delay: number;
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface ArmyMessage {
  text: string;
  author: string;
}
