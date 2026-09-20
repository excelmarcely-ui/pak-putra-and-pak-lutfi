using System;
class Program
{
    static void Main()
    {
        Console.WriteLine("Masukan Nilai:");
        int Nilai=Convert.ToInt32(Console.ReadLine());
        Console.WriteLine("Kehadiran:");
        int kehadiran=Convert.ToInt32(Console.ReadLine80());
        if(Nilai >=80&& kehadiran >=85)
        {
            Console.WriteLine("maka LULUS");
        }
        else
        {
            Console.WriteLine("tidak LULUS");
        }
    }
}