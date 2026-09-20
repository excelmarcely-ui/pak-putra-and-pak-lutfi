export default function TentangCasido() {
return (
<section
      id="tentang-casido"
      className="scroll-mt-24 bg-cream py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="grid h-[420px] grid-cols-2 gap-4 sm:h-[540px]">
          <div className="relative row-span-2 overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={featuredImages.large}
              alt="Fasad merah cafe DELAPAN di Sidoarjo"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
              priority
            />
            <span className="absolute bottom-4 left-4 rounded-full bg-crimson px-4 py-1.5 text-sm font-bold tracking-widest text-white shadow-md">
              DELAPAN
            </span>
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={featuredImages.barista}
              alt="Barista KedaiKopi8 menyajikan kopi"
              fill
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="relative overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={featuredImages.night}
              alt="Suasana malam di sekitar KedaiKopi8"
              fill
              sizes="(min-width: 1024px) 20vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="inline-block rounded-full bg-crimson-light px-4 py-1.5 text-xs font-bold tracking-widest text-crimson uppercase">
            Apa itu KedaiKopi8
          </span>
          <h2 className="mt-5 font-serif text-3xl leading-snug font-bold text-navy sm:text-4xl lg:text-[2.6rem]">
            KedaiKopi8, Tempat Rasa &amp; Kekhasan Sidoarjo
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Berawal dari kecintaan terhadap kopi dan budaya lokal, KedaiKopi8
            hadir sebagai ruang untuk merayakan rasa khas Sidoarjo. Dari racikan
            kopi robusta pilihan hingga hidangan berbumbu petis, setiap sajian
            membawa cerita panjang kota ini — ditemani sudut baca yang nyaman
            dan suasana hangat khas kedai keluarga.
          </p>
          <a
            href="#rekomendasi"
            className="mt-8 flex w-full items-center justify-center gap-2 rounded-full bg-navy px-8 py-4 text-base font-semibold text-white transition hover:bg-navy-dark sm:w-auto"
          >
            selengkapnya tentang KedaiKopi8
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
}