using casolution.web.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;

namespace casolution.web.Controllers
{

    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        [Route("Home")]
        [Route("Index")]
        [Route("/")]
        public IActionResult Index()
        {
            return View();
        }

     
        public IActionResult About()
        {
            return View();
        }

        public IActionResult Contact()
        {
            return View();
        }

        [Route("more-about/{id?}")]
        public IActionResult MoreAbout(int id)
        {
            return View();
        }
    }
}
