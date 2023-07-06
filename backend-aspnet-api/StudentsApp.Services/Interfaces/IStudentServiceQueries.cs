using StudentsApp.Services.ServicesDTO;

namespace StudentsApp.Services.Interfaces
{
    public interface IStudentServiceQueries
    {
        Task<List<StudentsResponse>> GetAllStudents();
    }
}
