import Link from "next/link";

export default function Nav() {
    return (
        <>
            <nav>
                <ul  className="flex justify-center gap-15 p-3 bg-white font-[Geist] font-bold uppercase text-[#456789]">
                    <li className=" hover:scale-110 duration-100 hover:text-[#6d95bd]">
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li className=" hover:scale-110 duration-100 hover:text-[#6d95bd]">
                        <Link href="/">
                            Loja
                        </Link>
                    </li>
                    <li className=" hover:scale-110 duration-100 hover:text-[#6d95bd]">
                        <Link href="/">
                            Sobre
                        </Link>
                    </li>
                    <li className=" hover:scale-110 duration-100 hover:text-[#6d95bd]">
                        <Link href="/">
                            Airdots
                        </Link>
                    </li>
                    <li className=" hover:scale-110 duration-100 hover:text-[#6d95bd]">
                        <Link href="/">
                            Apple Watch
                        </Link>
                    </li>
                    <li className=" hover:scale-110 duration-100 hover:text-[#6d95bd]">
                        <Link href="/">
                            Capinhas
                        </Link>
                    </li>
                    <li className=" hover:scale-110 duration-100 hover:text-[#6d95bd]">
                        <Link href="/">
                            Fones de Ouvido
                        </Link>
                    </li>
                    <li className=" hover:scale-110 duration-100 hover:text-[#6d95bd]">
                        <Link href="/">
                            Smartwatch
                        </Link>
                    </li>
                    <li className=" hover:scale-110 duration-100 hover:text-[#6d95bd]">
                        <Link href="/">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}