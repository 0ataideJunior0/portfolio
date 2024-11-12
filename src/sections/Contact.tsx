"use client";
import CheckBox from "@/components/CheckBox";
import Image from "next/image";
import profilePhoto from "../assets/images/profile_alta.png";

export const ContactSection = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (event: any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fe12457c-c8d4-444f-9871-8f016e21b244");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };
  return (
    <div className="container py-48" id="contact">
      <section className="lg:flex lg:flex-row justify-evenly sm:flex-col">
        {/* left content */}
        <div className="flex flex-col sm:justify-center items-center">
          <div className="md:flex md:size-[300px] sm:flex sm:size-[200px] z-20">
            <Image src={profilePhoto} alt="my profile Photo" />
          </div>
          <div className="flex flex-col py-4">
            <span className="flex text-3xl text-primary font-semibold sm:justify-center">
              Vamos trabalhar juntos
            </span>
            <span className="sm:flex text-4xl lg:max-w-[300px] py-6 text-whiteP font-bold sm:justify-center">
              Entre em contato que eu te ajudo!
            </span>
            <span className="text-3xl text-whiteS font-semibold lg:max-w-[400px] md:flex md:text-3xl w-full sm:text-2xl sm:justify-center sm:flex">
              Você pode entrar em contato comigo por E-mail e eu responderei o
              mais rápido possivel!
            </span>
          </div>
        </div>
        {/* right content, form */}
        <div className="flex flex-col">
          <form onSubmit={onSubmit}>
            <h2 className="text-5xl font-semibold text-whiteP mb-6 sm:text-3xl sm:justify-center sm:flex">
              Entre em contato
            </h2>
            <div className="flex flex-col md:text-2xl sm:text-xl  text-whiteP gap-2 mb-4">
              <label
                className="
              sm:justify-center sm:flex
              md:flex md:justify-start
              "
              >
                Nome
              </label>
              <input
                name="nome"
                type="text"
                className="h-[48px] rounded-md px-2 text-slate-600 text-xl"
                placeholder="Ataide Junior"
                required
              />
            </div>
            <div className="flex flex-col md:text-2xl sm:text-xl text-whiteP gap-2 mb-4">
              <label
                className="
              sm:justify-center sm:flex
              md:flex md:justify-start
              "
              >
                Email
              </label>
              <input
                name="email"
                type="email"
                className="h-[48px] rounded-md px-2 text-slate-600 text-xl"
                placeholder="ataide.junior.uiux@gmail.com"
                required
              />
              {/* checkbox */}
              <div className="mt-4 grid grid-cols-2 gap-2 ">
                <CheckBox name="uxdesigner" label="Ux Designer" />
                <CheckBox name="uidesigner" label="UI Designer" />
                <CheckBox name="frontend" label="Dev Frontend" />
                <CheckBox name="idvisual" label="ID Visual" />
                <CheckBox name="landingpage" label="Landing Page" />
                <CheckBox name="socialmidia" label="Social Midia" />
              </div>
            </div>
            <div className="flex flex-col text-2xl text-whiteP gap-2 mb-4">
              <label
                className="
              sm:justify-center sm:flex
              md:flex md:justify-start
              "
              >
                Mensagem
              </label>
              <textarea
                name="mensagem"
                className="flex rounded-md px-2 text-slate-600 items-start min-h-[200px] text-xl"
                placeholder="Deixe sua mensagem...."
              ></textarea>
            </div>
            <button
              type="submit"
              className="flex w-full py-4 rounded-md justify-center font-bold text-xl text-whiteP bg-primary600"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};
