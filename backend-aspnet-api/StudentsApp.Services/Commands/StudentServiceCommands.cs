using StudentsApp.Repository.Interfaces;
using StudentsApp.Repository.RepositoryDTO;
using StudentsApp.Services.Interfaces;
using StudentsApp.Services.ServicesDTO;

namespace StudentsApp.Services.Commands
{
    public class StudentServiceCommands : IStudentServiceCommands
    {
        private readonly IStudentsRepositoryCommands _studentsRepositoryCommands;

        public StudentServiceCommands(IStudentsRepositoryCommands studentsRepositoryCommands)
        {
            _studentsRepositoryCommands = studentsRepositoryCommands;
        }
        public async Task<StudentResponseDTO> AddStudent(StudentRequestDTO studentDTO)
        {
            var student = await _studentsRepositoryCommands.AddStudent(new Student()
            {
                Id = studentDTO.Id,
                Name = studentDTO.Name,
                Address = studentDTO.Address,
                Age = studentDTO.Age,
                Gender = studentDTO.Gender,
            });

            var response = new StudentResponseDTO()
            {
                Id = studentDTO.Id,
                Name = studentDTO.Name,
                Address = studentDTO.Address,
                Age = studentDTO.Age,
                Gender = studentDTO.Gender,
                ResultMessage = "Success",
            };

            return response;
        }

        public async Task<ResultResponseDTO> DeleteStudent(int id)
        {
            var response = new ResultResponseDTO();

            var isIdExisting = await _studentsRepositoryCommands.DeleteStudentById(id);

            if (isIdExisting == null)
            {
                return null;
            }

            response.ResultMessage = "Success!";

            return response;
        }

        public async Task<StudentResponseDTO> UpdateStudent(StudentRequestDTO studentDTO)
        {
            var student = await _studentsRepositoryCommands.UpdateStudent(new Student()
            {
                Id = studentDTO.Id,
                Name = studentDTO.Name,
                Address = studentDTO.Address,
                Age = studentDTO.Age,
                Gender = studentDTO.Gender,
            });

            var response = new StudentResponseDTO()
            {
                Id = studentDTO.Id,
                Name = studentDTO.Name,
                Address = studentDTO.Address,
                Age = studentDTO.Age,
                Gender = studentDTO.Gender,
                ResultMessage = "Success",
            };

            return response;
        }
    }
}
