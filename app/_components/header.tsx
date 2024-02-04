"use client";

import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOut, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import SideMenu from "./side-menu";


const Header = () => {

    

    return ( 
        <Card>
            <CardContent className="p-5 justify-between flex flex-row items-center">
                <Image src="/logoFSW.png" alt="FSW Barber" height={22} width={120}/>
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={"outline"} size={"icon"} >
                            <MenuIcon size={18}/>
                        </Button>
                    </SheetTrigger>

                    <SheetContent className="p-0">
                        
                        <SideMenu/>

                    </SheetContent>
                </Sheet>
            </CardContent>
        </Card>
     );
}
 
export default Header;