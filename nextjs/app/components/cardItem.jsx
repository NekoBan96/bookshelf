'use client'
import Link from "next/link"
import Ellipsis from "./ellipsis"

import CardEmpty from "./cardEmpty"

export default function CardItem (props) {


    return (
        <Link href="manga" className="block w-56 bg-center bg-cover">
            <CardEmpty>
                <div className="rounded  bg-gradient-to-b from-transparent via-transparent to-black h-full w-full flex flex-col-reverse">
                    <div className="relative bottom-1 text-white p-3">
                        <p>Манга</p>
                        <p className="max-h-20 line-clamp-3 text-ellipsis">История покорения знаменитого горячего источника в другом мире: Реинкарнация сорокалетнего любителя горячих источников в умиротворяющем курортном раю</p>
                    </div>
                </div>
            </CardEmpty>
        </Link>
    )
}