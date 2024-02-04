"use client";

import { Button } from "./ui/button";
import { CalendarIcon, HomeIcon, LogInIcon, LogOut, LogOutIcon, MenuIcon, UserIcon } from "lucide-react";
import { SheetHeader, SheetTitle } from "./ui/sheet";
import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const SideMenu = () => {

    const {data} = useSession();

    const handleLogoutClick = () => signOut();

    const handleLoginClick = () => signIn("google");

    return ( 

        <>
            <SheetHeader className="text-left border-b solid border-secondary p-5">
                <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {data?.user ? (
                <div className="flex justify-between px-5 py-6 items-center">
                    <div className="flex items-center gap-3 ">
                        <Avatar>
                            <AvatarImage src={data.user.image ?? ""}/>
                        </Avatar>

                        <h2 className="font-bold">{data.user.name}</h2>
                    </div>

                    <Button variant={"secondary"} size={"icon"}>    
                        <LogOutIcon onClick={handleLogoutClick}/>
                    </Button>
                </div>
            ): (
                <div className="px-5 py-6 gap-3 flex flex-col">
                    <div className="flex items-center gap-2">
                        <UserIcon size={32}/>
                            <h2 className="font-bold">Olá, faça o seu login!</h2>
                    </div>
                    <Button variant={"secondary"} className="w-full justify-start" onClick={handleLoginClick}> <LogInIcon className="mr-2" size={18}/> Fazer o Login</Button>
                </div>
            )}

            <div className="gap-3 flex flex-col px-5">
                <Button variant={"outline"} className="justify-start" asChild>
                    <Link href={"/"}>
                        <HomeIcon size={18} className="mr-2"/>
                            Inicio
                    </Link>  
                </Button>

                {data?.user &&(
                    <Button variant={"outline"} className="justify-start" asChild>
                        <Link href={"/bookings"}>
                            <CalendarIcon size={18} className="mr-2"/>
                                Agendamentos
                        </Link>
                    </Button>
                )}
            </div>
        </>

     );
}
 
export default SideMenu;