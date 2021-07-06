import { Icon } from "./icon";

export type TeamCard = {
    name: string;
    role: string;
    description: string;
    photoUrl?: string;
   icons: Icon[];
}