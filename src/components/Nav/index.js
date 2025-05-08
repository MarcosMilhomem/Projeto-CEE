import Link from "next/link";

export default function Nav() {
    return (
        <>
            <nav>
                <ul  className="flex justify-center gap-1 p-3 bg-white font-[Geist] text-sm font-bold uppercase text-[#203447]">
                    <li className=" hover:bg-gray-100 px-5 py-2 rounded-xl duration-100">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className="duration-100 hover:bg-gray-100 px-5 py-2 rounded-xl">
                        <Link href="/">
                            Loja
                        </Link>
                    </li>
                    <li className=" duration-100 hover:bg-gray-100 px-5 py-2 rounded-xl">
                        <Link href="/">
                            Sobre
                        </Link>
                    </li>
                    <li className=" duration-100 hover:bg-gray-100 px-5 py-2 rounded-xl">
                        <Link href="/">
                            Airdots
                        </Link>
                    </li>
                    <li className=" duration-100 hover:bg-gray-100 px-5 py-2 rounded-xl">
                        <Link href="/">
                            Apple Watch
                        </Link>
                    </li>
                    <li className=" duration-100 hover:bg-gray-100 px-5 py-2 rounded-xl">
                        <Link href="/">
                            Capinhas
                        </Link>
                    </li>
                    <li className=" duration-100 hover:bg-gray-100 px-5 py-2 rounded-xl">
                        <Link href="/">
                            Fones de Ouvido
                        </Link>
                    </li>
                    <li className=" duration-100 hover:bg-gray-100 px-5 py-2 rounded-xl">
                        <Link href="/">
                            Smartwatch
                        </Link>
                    </li>
                    <li className=" duration-100 hover:bg-gray-100 px-5 py-2 rounded-xl">
                        <Link href="/">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}