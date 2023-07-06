using Microsoft.AspNetCore.Mvc;
using StudentsApp.API.DTO;
using StudentsApp.Services.Interfaces;

namespace StudentsApp.API.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class StudentsController : Controller
    {
        private readonly IStudentServiceQueries _studentServiceQueries;

        public StudentsController(IStudentServiceQueries studentServiceQueries)
        {
            _studentServiceQueries = studentServiceQueries;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllStudents()
        {
            var students = await _studentServiceQueries.GetAllStudents();
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
                    Address = student.Address,
                    Age = student.Age,
                    Gender = student.Gender,
                });
            }

            return Ok(result);
        }

        [Route("{id}")]
        [HttpGet]
        public async Task<IActionResult> GetStudentById(int id)
        {
            var students = await _studentServiceQueries.GetAllStudents();
            if (students == null)
            {
                return null;
            }

            var result = students.Where(s => s.Id == id).Select(s => new StudentsResponse()
            {
                Id = s.Id,
                Name = s.Name,
                Address = s.Address,
                Age = s.Age,
                Gender = s.Gender,
            });

            return Ok(result);
        }
    }
}
