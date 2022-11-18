using Microsoft.EntityFrameworkCore;

namespace backend
{
    public class CakeContext : DbContext
    {
        public CakeContext(DbContextOptions<CakeContext> options) : base(options) { }

        public DbSet<Cake> Cake => Set<Cake>();
    }
}
