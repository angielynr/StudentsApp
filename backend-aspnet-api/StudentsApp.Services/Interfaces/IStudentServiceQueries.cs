using StudentsApp.Services.ServicesDTO;

namespace StudentsApp.Services.Interfaces
{
    public interface IStudentServiceQueries
    {
        Task<List<StudentResponseDTO>> GetAllStudents();
    }
}
