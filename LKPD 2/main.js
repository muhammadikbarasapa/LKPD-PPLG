     //        hasil gaji karyawan//
    //         let nama = 'ikbar';
    //         let gaji_pokok = 120000;
    //         let tunjangan = 0.20;
    //         let pajak = 0.15;

    //         let pajak_potongan = pajak * (gaji_pokok + (tunjangan * gaji_pokok));
    //         let tunjangan_total = tunjangan * gaji_pokok;
    //         let gaji_bersih = gaji_pokok + tunjangan_total - pajak_potongan;

    //         console.log(pajak_potongan);
    //         console.log(tunjangan_total);
    //         console.log(gaji_bersih);

    

             // hasil mencari detik//

            // let jam = 1;
            // let menit = 40;
            // let detik = 20;
            // let hasil = (jam * 3600) + (menit * 60) + detik;
            // console.log(`ini hasil dari detik`,hasil);

            // let detik = 5440;
            // let menit = 30;
            // let jam = 1;

            // let hasil = (jam * 5440) + (menit * 60) + detik;
            // console.log(hasil)



            //  hasil mencari jam detik menit//

             let detik = 5440 ;
             let menit = 0;
             let jam = 0;
 
             let hasil = (jam * 3600) + (menit * 60) + detik;
             let jamHasil = Math.floor(hasil / 3600);
             let sisaDetik = hasil % 3600;
             let menitHasil = Math.floor(sisaDetik / 60);
             let detikHasil = sisaDetik % 60;
 
             console.log("Jam:", jamHasil);
             console.log("Menit:", menitHasil);
             console.log("Detik:", detikHasil);

