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

          <div className="flex rounded-full border border-[#1267a3]">
            <input
              type="text"
              placeholder="O que você busca?"
              id="search"
              className="flex m-auto bg-white text-black text-sm pl-6 w-md h-9 rounded-l-4xl outline-none"
            />

            <label
              for="search"
              className="text-[#1267a3] rounded-r-4xl bg-[#456789] border-2 border-white w-15 flex items-center justify-center"
            >
              <MagnifyingGlassIcon className="h-6 text-white" />
            </label>
          </div>

          <div
            className="flex cursor-pointer gap-2"
            onMouseEnter={() => {
              modal();
            }}
          >
            <UserIcon className="w-7 h-9 text-[#1267a3]" />

            <div className="text-xs">
              <p>Olá</p>
              <p className="font-bold">Entre | Registrar</p>
            </div>
          </div>

          <div className="gap-x-10">
            <Link href="/cart" className="flex items-start">
              <ShoppingCartIcon className="h-8" />
              <span className=" bg-amber-400 text-white pl-2 pr-2 rounded-2xl text-xs">
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
