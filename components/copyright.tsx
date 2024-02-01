"use client"

import * as React from "react"
import { Copyright } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link";

export function Copyrightt() {

    return (
        <Link href="https://aaravm.me">
            <Button  variant="outline" size="icon">
                <Copyright className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all" />
                <span className="sr-only">Made By Aarav Mehta</span>
            </Button>
        </Link>
    )
}