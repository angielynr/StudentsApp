using StudentsApp.Repository.RepositoryDTO;

namespace StudentsApp.Repository.Interfaces
{
    public interface IStudentsRepositoryQueries
    {
        Task<List<Student>> GetAllStudents();
    }
}
