using StudentsApp.Repository.Interfaces;
using StudentsApp.Services.Interfaces;
using StudentsApp.Services.ServicesDTO;

namespace StudentsApp.Services.Queries
{
    public class StudentServiceQueries : IStudentServiceQueries
    {
        private readonly IStudentsRepositoryQueries _studentsRepositoryQueries;

        public StudentServiceQueries(IStudentsRepositoryQueries studentsRepositoryQueries)
        {
            _studentsRepositoryQueries = studentsRepositoryQueries;
        }
        public async Task<List<StudentsResponse>> GetAllStudents()
        {
            var students = await _studentsRepositoryQueries.GetAllStudents();
            List<StudentsResponse> result = new List<StudentsResponse>();

            if (students == null)
            {
                return null;
            }

            foreach (var student in students)
            {
                result.Add(new StudentsResponse()
                {
                    Id = student.Id,
                    Name = student.Name,
                    Age = student.Age,
                    Address = student.Address,
                    Gender = student.Gender,
                });
            }

            return result;
        }
    }
}
