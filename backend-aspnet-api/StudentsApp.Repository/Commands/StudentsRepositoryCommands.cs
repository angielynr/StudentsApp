using StudentsApp.Repository.DataContext;
using StudentsApp.Repository.Interfaces;
using StudentsApp.Repository.RepositoryDTO;

namespace StudentsApp.Repository.Commands
{
    public class StudentsRepositoryCommands : IStudentsRepositoryCommands
    {
        private readonly AppDbContext _appDbContext;

        public StudentsRepositoryCommands(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }
        public async Task<ResultResponse> AddStudent(Student student)
        {
            var response = new ResultResponse();

            await _appDbContext.AddAsync(student);
            await SaveChangesAsync();

            response.ResultMessage = "Success!";

            return response;
        }

        public async Task<ResultResponse> UpdateStudent(Student student)
        {
            var response = new ResultResponse();

            var isIdExisting = _appDbContext.Students.FirstOrDefault(i => i.Id == student.Id);
            if (isIdExisting == null)
            {
                return null;
            }

            isIdExisting.Id = student.Id;
            isIdExisting.Name = student.Name;
            isIdExisting.Age = student.Age;
            isIdExisting.Gender = student.Gender;
            isIdExisting.Address = student.Address;

            response.ResultMessage = "Success!";

            await SaveChangesAsync();

            return response;
        }

        public async Task<ResultResponse> DeleteStudentById(int id)
        {
            var response = new ResultResponse();

            var isIdExisting = _appDbContext.Students.FirstOrDefault(i => i.Id == id);
            if (isIdExisting == null)
            {
                return null;
            }

            _appDbContext.Remove(isIdExisting);
            await SaveChangesAsync();

            return response;
        }

        private async Task SaveChangesAsync()
        {
            await _appDbContext.SaveChangesAsync();
        }
    }
}
