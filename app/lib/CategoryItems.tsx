import React, { ReactNode } from "react";
import { ChefHat, Globe, PartyPopper } from "lucide-react";

interface iAppProps{
    name: string;
    title: string;
    image: ReactNode;
    id: number;
}

export const CategoryItems: iAppProps[] = [
  {  id: 0,
    name: 'template',
    title:'Template',
    image: <Globe/>,
 },
 {  id: 1,
    name: 'uikit',
    title:'Ui Kit',
    image: <ChefHat/>,
 },
 {  id: 2,
    name: 'icom',
    title:'Icom',
    image: <PartyPopper/>,
 },
]