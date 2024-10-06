import { useEffect, useState } from "react";

/*

!Custom hook
* React hooklarına benzer şekilde görev yapan projenin ihityacına göre kendimiz oluştururuz,
* görevini biz belirleriz
* Genelde veriyi ve veriyi güncelleyecek fonksiyonu dizi içinde dönerler
*/
export function useLocaleStorage<T>(key: string, initialValue: T) {
  //* 1 adım state i tanımla
  const [value, setValue] = useState<T>(() => {
    //*2 . adım localstorage den verileri al
    const jsonValue = localStorage.getItem(key);
    //* 3. adım localstorage de elemanyoksa initialValue tanımla
    if (jsonValue === null) {
      return initialValue;
    } else {
      //* 4. adım localstoragede eleman varsa localdeki verileri state altar
      return JSON.parse(jsonValue);
    }
  });

  //* 5.adım:state her değiştiğinde localStorage i guncelle
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  //* 6. adım Hookumn kullanılması için state i ve değiştirme metodunu return et
  return [value, setValue] as [T, typeof setValue];
}
