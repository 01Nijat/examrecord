using System.ComponentModel.DataAnnotations;

public class Sagird
{
    [Key]
    public int Nomresi { get; set; }

    [StringLength(30)]
    public string Adi { get; set; }

    [StringLength(30)]
    public string Soyadi { get; set; }

    public int Sinif { get; set; }
}
