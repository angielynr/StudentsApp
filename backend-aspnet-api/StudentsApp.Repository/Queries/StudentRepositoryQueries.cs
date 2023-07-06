using Microsoft.EntityFrameworkCore;
using StudentsApp.Repository.DataContext;
using StudentsApp.Repository.Interfaces;
using StudentsApp.Repository.RepositoryDTO;

namespace StudentsApp.Repository.Queries
{
    public class StudentRepositoryQueries : IStudentsRepositoryQueries
    {
        private readonly AppDbContext _appDbContext;

        public StudentRepositoryQueries(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public async Task<List<Student>> GetAllStudents() => await _appDbContext.Students.ToListAsync();
    }
}
