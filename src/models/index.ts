export interface CommandRequestCardProps {
  request: {
    owner: {
      name: string;
      img: null | string;
    };
    date: string;
    startTime: string;
    endTime: string;
    location: string;
    participantsNumber: number;
    maxParticipantsNumber: number;
    sportType: string;
    level: string;
  };
}
export interface EventCardProps {
  img: string;
  title: string;
  date: string;
}
