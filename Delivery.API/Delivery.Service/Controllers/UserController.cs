using Delivery.Model.Classes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Delivery.Service.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            User user = new User();

            return Ok(user);
        }

        [HttpGet]
        [Route("GetUserById")]
        public ActionResult GetUserById(int userId)
        {
            User user = new User();

            return Ok("test");
        }
    }
}
