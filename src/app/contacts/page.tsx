import { Loader } from "@/components";
import { Suspense } from "react";

export default function Contacts() {
  return (
    <main id="contacts" className="min-h-screen px-[100px] pt-[123px]">
      <div className="wrapper -mt-[76px] pt-[123px] pb-10">
        <div className="flex flex-col ">
          <p className="text-sm font-medium text-_F2890F mb-2">
            квесты в Одессе
          </p>
          <h2 className="text-[64px] font-[800] text-_FFFFFF mb-8 w-full border-b-[0.5px] border-b-_E6E6E6">
            Контакты
          </h2>

          <div className="flex items-center justify-between">
            <div className="text-_E6E6E6 text-sm font-bold">
              <p>Адрес</p>
              <p className="text-[15px] font-medium">г. Одесса</p>
              <p className="text-[15px] font-medium">ул. Дерибасовская 1</p>

              <p className="mt-8">Режим работы</p>
              <p className="text-[15px] font-medium">
                Ежедневно, с 9:00 до 20:00
              </p>

              <p className="mt-8">Телефон</p>
              <p className="text-[15px] font-medium">+38 (050) 555-99-55</p>

              <p className="mt-8">E-mail</p>
              <p className="text-[15px] font-medium">info@escape-room.ru</p>
            </div>
            <div className="w-[649px] h-[336px] border-2">
              <Suspense fallback={<Loader />}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.256123068521!2d30.74217117621846!3d46.48324067110899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c63198a063f2f9%3A0x4fa50d437bfaf5ae!2z0YPQuy4g0JTQtdGA0LjQsdCw0YHQvtCy0YHQutCw0Y8sIDEsINCe0LTQtdGB0YHQsCwg0J7QtNC10YHRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0KPQutGA0LDQuNC90LAsIDY1MDAw!5e0!3m2!1sru!2sde!4v1716404573722!5m2!1sru!2sde"
                  width="649"
                  height="336"
                  loading="lazy"
                ></iframe>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
