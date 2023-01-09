import { Icon } from "@iconify/react";

function App() {
  return (
    <>
      <nav className="w-full fixed bg-white-50 border-b-2 border-gray-200 backdrop-blur">
        <div className="container sm:max-w-xl lg:max-w-4xl mx-auto px-4 sm:px-0 py-2 flex justify-center">
          <ul>
            <li>
              <a href="#" className="text-sm font-normal text-slate-800">
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="h-full min-h-screen bg-slate-50">
        <div className="container sm:max-w-xl lg:max-w-4xl mx-auto px-4 sm:px-0 pt-20 pb-16">
          <div className="mb-6 md:mb-8">
            <div className="w-full p-4 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl shadow-lg md:p-8">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <p className="mb-0.5 text-sm text-white">Informasi Terbaru</p>
                  <h4 className="mb-2 hidden text-lg font-semibold text-white md:text-2xl md:block">
                    PPDB SMK Muhammadiyah 1 Sukoharjo <br />
                    Tahun Pelajaran 2022/2023
                  </h4>
                  <h4 className="mb-2 block text-lg font-semibold text-white md:text-2xl md:hidden">
                    PPDB SMK Muhammadiyah 1 Sukoharjo Tahun Pelajaran 2022/2023
                  </h4>
                  <div className="flex items-center">
                    <a
                      href="https://raport.smkmuh1-skh.sch.id/"
                      target="blank"
                      className="mr-0.5 px-8 py-2 flex items-center text-sm font-normal text-white bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-lg"
                    >
                      <span>Lihat Berita</span>
                      <Icon
                        icon="material-symbols:arrow-right-alt"
                        width="16px"
                        color="#fff"
                        className="ml-2"
                      />
                    </a>
                    <a href="" target="blank" className="mr-0.5">
                      <Icon
                        icon="ic:baseline-facebook"
                        color="#fff"
                        className="ml-2 h-6 w-6"
                      />
                    </a>
                    <a href="" target="blank" className="mr-0.5">
                      <Icon
                        icon="mdi:twitter"
                        color="#fff"
                        className="ml-2 h-6 w-6"
                      />
                    </a>
                    <a href="" target="blank" className="mr-0.5">
                      <Icon
                        icon="mdi:youtube"
                        color="#fff"
                        className="ml-2 h-6 w-6"
                      />
                    </a>
                    <a href="" target="blank" className="mr-0.5">
                      <Icon
                        icon="mdi:instagram"
                        color="#fff"
                        className="ml-2 h-6 w-6"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 md:mb-4">
            <h4 className="mb-2 text-md font-semibold md:text-xl md:mb-4">
              Aplikasi Kurikulum
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Raport
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Lorem ipsum dolor sit amet, consectetur ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:library-books"
                        color="#fff"
                        className="h-8 md:h-12 w-8 md:w-12"
                      />
                      <a
                        href="https://raport.smkmuh1-skh.sch.id/"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg"
                      >
                        Buka
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 md:mb-4">
            <h4 className="mb-2 text-md font-semibold md:text-xl md:mb-4">
              Aplikasi Guru
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Jurnal
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Lorem ipsum dolor sit amet, consectetur ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:book"
                        color="#fff"
                        className="h-8 md:h-12 w-8 md:w-12"
                      />
                      <a
                        href="https://jurnalmu.smkmuh1-skh.sch.id/"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg"
                      >
                        Buka
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 md:mb-4">
            <h4 className="mb-2 text-md font-semibold md:text-xl md:mb-4">
              Aplikasi Siswa
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-sky-600 to-sky-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Kartu Pelajar
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Lorem ipsum dolor sit amet, consectetur ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:person"
                        color="#fff"
                        className="h-8 md:h-12 w-8 md:w-12"
                      />
                      <a
                        href="http://kartumu.smkmuh1-skh.sch.id/"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg"
                      >
                        Buka
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Kartu Ujian
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Lorem ipsum dolor sit amet, consectetur ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:featured-video"
                        color="#fff"
                        className="h-8 md:h-12 w-8 md:w-12"
                      />
                      <a
                        href="http://kartumu.smkmuh1-skh.sch.id/"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg"
                      >
                        Buka
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav className="w-full bg-sky-100">
        <div className="container sm:max-w-xl lg:max-w-4xl mx-auto px-4 sm:px-0 py-2.5">
          <p className="text-sm font-normal text-slate-800">
            Build by Mutuharjo Dev ☕️
          </p>
        </div>
      </nav>
    </>
  );
}

export default App;

{
  /* <h4 className="text-md font-normal text-center ">Raport</h4> */
}