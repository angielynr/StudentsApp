
using StudentsApp.Services.ServicesDTO;

namespace StudentsApp.Services.Interfaces
{
    public interface IStudentServiceCommands
    {
        Task<ResultResponseDTO> AddStudent(StudentRequestDTO studentDTO);
        Task<StudentResponseDTO> UpdateStudent(StudentRequestDTO studentDTO);
        Task<ResultResponseDTO> DeleteStudent(int id);
    }
}
