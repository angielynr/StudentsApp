using Microsoft.EntityFrameworkCore;
using StudentsApp.Repository.Entities;

namespace StudentsApp.Repository.DataContext
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }


        //DBTable
        public DbSet<Student> students { get; set; }

    }
}
