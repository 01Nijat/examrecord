using System.ComponentModel.DataAnnotations;

public class Imtahan
{
    [Key]
    public int Id { get; set; }

    [StringLength(3)]
    public string DersKodu { get; set; }

    public int SagirdNomresi { get; set; }

    public DateTime ImtahanTarixi { get; set; }

    public int Qiymet { get; set; }
}
