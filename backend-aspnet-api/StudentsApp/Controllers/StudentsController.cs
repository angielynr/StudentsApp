using Microsoft.AspNetCore.Mvc;
using StudentsApp.API.DTO;
using StudentsApp.Services.Interfaces;
using StudentsApp.Services.ServicesDTO;

namespace StudentsApp.API.Controllers
{
    [Route("/[controller]")]
    [ApiController]
    public class StudentsController : Controller
    {
        private readonly IStudentServiceQueries _studentServiceQueries;
        private readonly IStudentServiceCommands _studentServiceCommands;

        public StudentsController(IStudentServiceQueries studentServiceQueries, IStudentServiceCommands studentServiceCommands)
        {
            _studentServiceQueries = studentServiceQueries;
            _studentServiceCommands = studentServiceCommands;
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

        [HttpPost]
        public async Task<IActionResult> AddStudent([FromBody] AddRequest addRequestDTO)
        {
            var response = new ResponseDTO();

            var student = new StudentRequestDTO()
            {
                Name = addRequestDTO.Name,
                Address = addRequestDTO.Address,
                Age = addRequestDTO.Age,
                Gender = addRequestDTO.Gender,
            };

            var result = await _studentServiceCommands.AddStudent(student);

            response.ResultMessage = result.ResultMessage;

            return Ok(response);
        }

        [Route("{id}")]
        [HttpPut]
        public async Task<IActionResult> UpdateStudent(int id, [FromBody] UpdateRequest updateRequestDTO)
        {
            var student = new StudentRequestDTO();
            if (id != updateRequestDTO.Id)
            {
                return null;
            }

            student.Id = id;
            student.Name = updateRequestDTO.Name;
            student.Address = updateRequestDTO.Address;
            student.Age = updateRequestDTO.Age;
            student.Gender = updateRequestDTO.Gender;

            var result = await _studentServiceCommands.UpdateStudent(student);

            var response = new StudentsResponse()
            {
                Id = result.Id,
                Name = result.Name,
                Address = result.Address,
                Age = result.Age,
                Gender = result.Gender,
            };

            return Ok(response);
        }

        [Route("{id}")]
        [HttpDelete]
        public async Task<IActionResult> DeleteStudent(int id)
        {
            var result = await _studentServiceCommands.DeleteStudent(id);

            return Ok(result);
        }
    }
}
