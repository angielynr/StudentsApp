using Microsoft.AspNetCore.Mvc;

namespace StudentsApp.API.Controllers
{
    public class StudentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
