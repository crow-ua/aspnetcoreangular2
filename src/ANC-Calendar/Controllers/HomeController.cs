using Microsoft.AspNetCore.Mvc;

namespace ANC_Calendar.Controllers
{
    public class HomeController : Controller
    {
        // GET: /<controller>/
        public IActionResult Index()
        {
            return View();
        }
    }
}