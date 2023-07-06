
using StudentsApp.Services.ServicesDTO;

namespace StudentsApp.Services.Interfaces
{
    public interface IStudentServiceCommands
    {
        Task<StudentResponseDTO> AddStudent(StudentRequestDTO studentDTO);
        Task<StudentResponseDTO> UpdateStudent(StudentRequestDTO studentDTO);
        Task<ResultResponse> DeleteStudent(int id);
    }
}
