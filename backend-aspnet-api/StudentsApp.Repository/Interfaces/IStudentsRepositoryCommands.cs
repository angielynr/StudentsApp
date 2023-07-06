using StudentsApp.Repository.RepositoryDTO;

namespace StudentsApp.Repository.Interfaces
{
    public interface IStudentsRepositoryCommands
    {
        Task<ResultResponse> AddStudent(Student student);
        Task<ResultResponse> UpdateStudent(Student student);
        Task<ResultResponse> DeleteStudentById(int id);
    }
}
