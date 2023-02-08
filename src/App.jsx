import { Icon } from "@iconify/react";
import Banner from "src/assets/banner.png";

function App() {
  return (
    <>
      <nav className="w-full fixed bg-white-50 border-b-2 border-gray-200 z-50 backdrop-blur">
        <div className="container sm:max-w-xl lg:max-w-4xl mx-auto px-4 sm:px-0 py-2 flex justify-center">
          <ul className="flex items-center">
            <li className="mx-2">
              <a href="#root" className="text-sm font-normal text-slate-800">
                Home
              </a>
            </li>
            <li className="mx-2">
              <a
                href="https://smkn1gondangsragen.sch.id/"
                target="_blank"
                className="text-sm font-normal text-slate-800"
              >
                About
              </a>
            </li>
            <li className="mx-2">
              <a
                href=""
                target="_blank"
                className="text-sm font-normal text-slate-800"
              >
                Any Question ?
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main className="h-full min-h-screen bg-slate-50">
        <div className="container sm:max-w-xl lg:max-w-4xl mx-auto px-4 sm:px-0 pt-20 pb-16">
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm font-medium text-slate-800 md:text-lg">
                  Selamat Datang,
                </p>
                <h2 className="text-2xl font-bold text-slate-800 md:text-4xl md:mb-4">
                  SIM Sekolah
                </h2>
              </div>
              <div>
                <div className="text-4xl leading-10 animate-rotate md:text-5xl">
                  👋
                </div>
              </div>
            </div>
          </div>
          <div className="mb-6 md:mb-8">
            <div className="w-full p-4 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl shadow-lg md:p-8">
              <div className="h-full flex justify-between">
                <div>
                  <p className="mb-0.5 text-sm text-white">Informasi Terbaru</p>
                  <h4 className="mb-2 hidden text-lg font-semibold text-white md:text-2xl md:block">
                    SMK Negeri 1 Gondang Sragen <br />
                    Tahun Pelajaran 2023/2024
                  </h4>
                  <h4 className="mb-2 block text-lg font-semibold text-white md:text-2xl md:hidden">
                    PPDB SMK Muhammadiyah 1 Sukoharjo Tahun Pelajaran 2023/2024
                  </h4>
                  <div className="flex items-center">
                    <a
                      href="https://smkn1gondangsragen.sch.id/"
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
                    {/* <a
                      href="https://www.facebook.com/smkmutuharjo/"
                      target="blank"
                      className="mr-0.5"
                    >
                      <Icon
                        icon="ic:baseline-facebook"
                        color="#fff"
                        className="ml-2 h-6 w-6"
                      />
                    </a>
                    <a
                      href="https://twitter.com/smkmutuharjo"
                      target="blank"
                      className="mr-0.5"
                    >
                      <Icon
                        icon="mdi:twitter"
                        color="#fff"
                        className="ml-2 h-6 w-6"
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/channel/UC2kU9TwiQh3RczgumP6pUdg"
                      target="blank"
                      className="mr-0.5"
                    >
                      <Icon
                        icon="mdi:youtube"
                        color="#fff"
                        className="ml-2 h-6 w-6"
                      />
                    </a>
                    <a
                      href="https://www.instagram.com/smk.mutuharjo/?hl=id"
                      target="blank"
                      className="mr-0.5"
                    >
                      <Icon
                        icon="mdi:instagram"
                        color="#fff"
                        className="ml-2 h-6 w-6"
                      />
                    </a> */}
                  </div>
                </div>
                <div>
                  <div className="w-32 hidden lg:block">
                    <img src={Banner} alt="" className="w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 md:mb-4">
            <h4 className="mb-2 text-md font-semibold md:text-xl md:mb-4">
              Daftar Aplikasi
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
                        Rekap absen mengajar setiap guru dan karyawan ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:book"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
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
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-sky-600 to-sky-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Buku Tamu
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://sikadu.smkmutuharjo.com/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Ujian Online
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:task"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="https://cbtmutuharjo.com/"
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
          {/* <div className="mb-2 md:mb-4">
            <h4 className="mb-2 text-md font-semibold md:text-xl md:mb-4">
              Aplikasi Kurikulum
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Raport
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Manajemen nilai siswa setiap semester ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:library-books"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
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
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Jurnal
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Rekap absen mengajar setiap guru dan karyawan ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:book"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
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
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-green-600 to-green-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Kartu Ujian
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Unduh kartu ujian untuk siswa ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:featured-video"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Ujian Online
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:task"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="https://cbtmutuharjo.com/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-sky-600 to-sky-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Info Kelulusan
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="mdi:graduation-cap"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="https://kelulusan.smkmuh1-skh.sch.id/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        E-Learning
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="fluent:learning-app-20-filled"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://smkmutuharjo.com/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-rose-600 to-rose-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Perangkat Pembelajaran
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="ic:outline-device-unknown"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
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
              Aplikasi Kesiswaan
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-amber-600 to-amber-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        PPDB
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Pendaftaran siswa baru setiap tahun ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:library-books"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://ppdb.smkmuh1-skh.sch.id/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Kartu Pelajar
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Kartu identitas diri seorang pelajar ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:person"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-fuchsia-600 to-fuchsia-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Presensi Siswa
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:list-alt"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="https://admin.katalis.info/authentication/login"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Prestasi Siswa
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-orange-600 to-orange-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Penanganan Siswa
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 md:mb-4">
            <h4 className="mb-2 text-md font-semibold md:text-xl md:mb-4">
              Aplikasi Perpustakaan
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Buku Online
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        SIM Perpus
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-stone-600 to-stone-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Pengunjung
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 md:mb-4">
            <h4 className="mb-2 text-md font-semibold md:text-xl md:mb-4">
              Aplikasi TUKS
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-yellow-600 to-yellow-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Pembayaran
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:payments-outline"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="https://admin.katalis.info/authentication/login"
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
              Aplikasi Humas
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        BKK
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-lime-600 to-lime-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Tracer Study Alumni
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-emerald-600 to-emerald-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        PKL
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Kerjasama
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-2 md:mb-4">
            <h4 className="mb-2 text-md font-semibold md:text-xl md:mb-4">
              Aplikasi Sarpras
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-violet-600 to-violet-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Inventaris
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:inventory-2"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="material-symbols:inventory-2"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-rose-600 to-rose-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Sistem Kepegawaian
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="clarity:employee-group-solid"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://sikadu.smkmutuharjo.com/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-cyan-600 to-cyan-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Presensi Guru
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="mdi:teacher"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://sikadu.smkmutuharjo.com/"
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
              Aplikasi Tata Usaha
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Buku Induk
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="clarity:book-solid"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://sikadu.smkmutuharjo.com/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-stone-600 to-stone-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Surat Menyurat
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="mdi:email-newsletter"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://sikadu.smkmutuharjo.com/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-teal-600 to-teal-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Surat Tugas
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="fluent:clipboard-letter-16-filled"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://sikadu.smkmutuharjo.com/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-red-600 to-red-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Surat Keterangan
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="ph:clipboard-text-fill"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://sikadu.smkmutuharjo.com/"
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
                <div className="w-full h-40 p-4 bg-gradient-to-br from-pink-600 to-pink-800 rounded-xl shadow-lg md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Buku Tamu
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="http://sikadu.smkmutuharjo.com/"
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
              Aplikasi BK
            </h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 -mx-2">
              <div className="px-2 pb-4">
                <div className="w-full h-40 p-4 bg-gradient-to-br from-green-600 to-green-800 rounded-xl shadow-lg opacity-50 md:h-48">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <h4 className="mb-0.5 text-md font-medium text-white md:mb-2 md:text-lg">
                        Konseling Siswa
                      </h4>
                      <p className="text-xs font-normal text-white opacity-40">
                        Description aplikasi ...
                      </p>
                    </div>
                    <div className="flex justify-between items-end">
                      <Icon
                        icon="material-symbols:question-mark"
                        color="#fff"
                        className="h-10 md:h-12 w-10 md:w-12"
                      />
                      <a
                        href="#"
                        target="blank"
                        className="px-4 py-2 text-sm font-normal text-white bg-white-10 rounded-lg pointer-events-none"
                      >
                        <Icon
                          icon="material-symbols:lock-outline"
                          color="#fff"
                          className="h-5 w-5"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </main>
      <nav className="w-full bg-sky-100">
        <div className="container sm:max-w-xl lg:max-w-4xl mx-auto px-4 sm:px-0 py-4">
          <p className="text-sm font-normal text-slate-800">
            &copy; Copyright - SMK Muhammadiyah 1 Sukoharjo 🔥
          </p>
        </div>
      </nav>
    </>
  );
}

export default App;
