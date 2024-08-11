import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";

interface iAppProps {
    email: string;
    name: string;
    userImage: string | undefined;
}

export function UserNav({email, name, userImage}: iAppProps){
    return (
       <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar className="h-10 w-10">
                    <AvatarFallback>
                      {/* <AvatarImage src={userImage} alt="Olmam Marketplace"/> */}
                        {name.slice(0, 3)}
                    </AvatarFallback>
                </Avatar>
            </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="w-56" align="end" forceMount>
           <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{name}</p>
                <p className="text-xm leading-none text-muted-foreground">{email}</p>
              </div>
           </DropdownMenuLabel>
           <DropdownMenuSeparator/>
           <DropdownMenuGroup>
             <DropdownMenuItem asChild><Link href="/sell">Sell your product</Link></DropdownMenuItem>
             <DropdownMenuItem>Item 2</DropdownMenuItem>
             <DropdownMenuItem>Item 3</DropdownMenuItem>
             <DropdownMenuItem>Item 4</DropdownMenuItem>
           </DropdownMenuGroup>
        <DropdownMenuSeparator/>
        <DropdownMenuItem asChild>
            <LogoutLink>Log out</LogoutLink>
        </DropdownMenuItem>
        </DropdownMenuContent>
       </DropdownMenu>

    )
}