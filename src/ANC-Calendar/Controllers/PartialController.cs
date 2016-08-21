using Microsoft.AspNetCore.Mvc;

namespace ANC_Calendar.Controllers
{
    public class PartialController : Controller
    {
        public IActionResult Message() => PartialView();
        
        public IActionResult Numbers() => PartialView();
    }
}