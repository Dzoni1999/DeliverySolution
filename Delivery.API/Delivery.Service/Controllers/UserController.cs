using Delivery.Contracts;
using Delivery.Entity.Model.Classes;
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
        private IRepositoryWrapper _repository;

        public UserController(IRepositoryWrapper repositoryWrapper)
        {
            _repository = repositoryWrapper;
        }
        
        [HttpGet]
        public IActionResult Get()
        {

            return Ok();
        }

        [HttpGet]
        [Route("GetUserById")]
        public User GetUserById(int userId)
        {
            User user = new User();
            return user;
        }
    }
}
