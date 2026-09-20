import sys
import time


def jalanin_lirik():
    lirik = [
        # Format: ("teks baris", delay_karakter)
        ("Mungkinkah kau merasakan ", 0.09),
        ("Semua yang kupasrakan", 0.09),
        ("Kenanglah kasih.....", 0.2),
        ("Kusuka dirinya", 0.2),
        ("Mungkin aku sayang", 0.12),
        ("Namun apakah mungkin", 0.14),
        ("Kau menjadi milikku", 0.14),
        ("Kau pernah menjadi", 0.14),
        ("Menjadi miliknya", 0.14),
        ("Namun salahka aku", 0.14),
        ("Bila kupendam rasa ini.....", 0.16),
        
    ]

    delay = [1.2, 1.2, 3, 0.6, 1, 0.6, 1, 0.6, 1, 0.6, 1]  # jeda (detik) setelah tiap baris selesai diketik

    print("\n============ RASA INI - VIERRA ============\n")
    time.sleep(0.1)

    for i, (baris_lagu, delay_karakter) in enumerate(lirik):
        for karakter in baris_lagu:
            print(karakter, end='')
            sys.stdout.flush()
            time.sleep(delay_karakter)
        time.sleep(delay[i])
        print('')

    print("// Code by Excell Marcely")


if __name__ == "__main__":
    jalanin_lirik()