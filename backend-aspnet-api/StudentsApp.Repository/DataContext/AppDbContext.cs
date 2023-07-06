using Microsoft.EntityFrameworkCore;
using StudentsApp.Repository.RepositoryDTO;

namespace StudentsApp.Repository.DataContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }


        //DBTable
        public DbSet<Student> Students { get; set; }

    }
}
