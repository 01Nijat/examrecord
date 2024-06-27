# 📚 İmtahan Qeydiyyat Sistemi

Bu layihə tələbələrin və dərslərin qeydiyyatını idarə edən, imtahanların planlaşdırılmasını və nəticələrin izlənməsini təmin edən bir imtahan idarəetmə sistemidir. Bu sistem **C#**, **Angular**, **TypeScript** və **MS SQL Server** texnologiyaları istifadə edilərək hazırlanmışdır.

## 🎯 Layihə Məqsədi

Layihənin əsas məqsədi məktəblər və universitetlər üçün asanlıqla idarə oluna bilən bir imtahan idarəetmə sisteminin yaradılmasıdır. Bu sistem tələbələrin, dərslərin və imtahanların effektiv idarə olunmasını təmin edir.

## 🛠️ İstifadə Edilən Texnologiyalar

- **Backend:** ASP.NET Core (C#)
- **Frontend:** Angular (TypeScript)
- **Verilənlər Bazası:** MS SQL Server

## 🏗️ Layihə Strukturu

Layihə, MVC (Model-View-Controller) dizayn nümunəsinə uyğun olaraq hazırlanmışdır.

### Backend

Backend hissəsində ASP.NET Core istifadə edilmişdir. Verilənlər bazası əməliyyatları üçün Entity Framework Core istifadə olunur.

- **Modellər:** Sagird, Ders, Imtahan
- **Kontrollerlər:** SagirdController, DersController, ImtahanController

### Frontend

Frontend hissəsində Angular istifadə edilmişdir. Verilənlər bazası ilə əlaqə üçün HttpClient modulu istifadə olunur.

- **Komponentlər:**
  - `sagird-list`: Tələbələrin siyahısını göstərir.
  - `ders-list`: Dərslərin siyahısını göstərir.
  - `imtahan-list`: İmtahanların siyahısını göstərir.

- **Servislər:**
  - `sagird.service.ts`: Tələbə məlumatlarını idarə edir.
  - `ders.service.ts`: Dərs məlumatlarını idarə edir.
  - `imtahan.service.ts`: İmtahan məlumatlarını idarə edir.

## 📝 CRUD Əməliyyatları

- **Tələbə Əlavə Etmə:** Yeni tələbə qeydiyyatı üçün.
- **Dərs Əlavə Etmə:** Yeni dərs əlavə etmək üçün.
- **İmtahan Əlavə Etmə:** Yeni imtahan planlaşdırmaq üçün.
- **Məlumat Yeniləmə:** Mövcud məlumatları yeniləmək üçün.
- **Məlumat Silmə:** Mövcud məlumatları silmək üçün.


