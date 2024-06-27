using Microsoft.EntityFrameworkCore;

public class MektebContext : DbContext
{
    public MektebContext(DbContextOptions<MektebContext> options) : base(options) { }

    public DbSet<Ders> Dersler { get; set; }
    public DbSet<Sagird> Sagirdler { get; set; }
    public DbSet<Imtahan> Imtahanlar { get; set; }
}
