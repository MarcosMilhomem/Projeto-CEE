"use client";

import Link from "next/link";
import Image from "next/image";
import {
  UserIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";



export default function Nav() {

  const modal = document.querySelector('dialog')
  const openModal = () => {}

  return (
    <div>
      <header>
        <nav className="flex bg-white justify-center gap-12 items-center h-20 text-[#1267a3] pl-10 pr-10 text-geistSans">
          <Image src={"/img/logo.png"} alt="Logo" width={90} height={100} />

          <div className="flex rounded-full border-2 border-[#1267a3]">
            <input
              type="text"
              placeholder="O que você busca?"
              id="search"
              className="bg-white text-black text-lg  pl-6 w-xl h-12  rounded-l-4xl outline-none"
            />

            <label
              for="search"
              className="text-[#1267a3] rounded-r-4xl bg-[#456789] border-2 border-white w-15 flex items-center justify-center"
            >
              <MagnifyingGlassIcon className="h-8 text-white font-bold" />
            </label>
          </div>

          <div
            className="flex cursor-pointer gap-3 items-end"
            onMouseEnter={() => {
              modal();
            }}
          >
            <UserIcon className="w-11 h-11 text-[#1267a3]" />

            <div>
              <p>Olá</p>
              <p className="font-bold">Entre | Registrar</p>
            </div>
          </div>

          <div className="gap-x-10">
            <Link href="/cart" className="flex items-start">
              <ShoppingCartIcon className="w-11 h-11" />
              <span className=" bg-[#45678] text-white pl-3 pr-3 rounded-2xl">
                0
              </span>
            </Link>
          </div>
        </nav>
      </header>
      <dialog>
        <div>
          <p>asdasda</p>
        </div>
      </dialog>
    </div>
  );
}

{
  /* <div>
    <ul>
      <li>
        <Link>
          Entrar
        </Link>
      </li>
      <li>
        <Link>
          Cadastrar
        </Link>
      </li>
      <li>
        <Link>
          Entrar
        </Link>
      </li>
    </ul>
  </div> */
}
